import { Component, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';

declare const gtag: Function;

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'iDiving';

  // ── 追蹤狀態 ──────────────────────────────────────────────
  private readonly sessionId  = this._getOrCreateSessionId();
  private currentPvId: number | null = null;
  private currentPageEnterMs: number | null = null;
  private currentPage = '';
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;

  constructor(private router: Router, private meta: Meta) {
    this.addGAScript();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      /** GA 頁面瀏覽追蹤 */
      gtag('event', 'page_view', { page_path: event.urlAfterRedirects });

      /** 自建分析追蹤 */
      this._onNavigate(event.urlAfterRedirects);
    });

    window.addEventListener('beforeunload', this._onBeforeUnload);

    this.meta.addTags([
      { name: 'title', content: '北部潛水課程首選【iDiving 全方位潛水中心】，精緻小班教學，提供保證班潛水課程｜水肺潛水｜ 自由潛水 ｜技術潛水｜ 美人魚課程 ｜生態潛水｜體驗潛水｜各項教練班課程 ｜潛水旅遊 ｜潛水器材裝備販售｜企業合作｜。' },
    ]);
  }

  ngOnDestroy() {
    window.removeEventListener('beforeunload', this._onBeforeUnload);
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
  }

  // ── 換頁處理 ─────────────────────────────────────────────
  private _onNavigate(page: string) {
    // 1. 記錄上一頁停留時間
    if (this.currentPvId && this.currentPageEnterMs) {
      const dur = Math.round((Date.now() - this.currentPageEnterMs) / 1000);
      this._sendLeave(this.currentPvId, dur);
    }

    // 2. 停止上一頁的心跳
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }

    // 3. 記錄新頁面
    this.currentPage        = page;
    this.currentPageEnterMs = Date.now();
    this.currentPvId        = null;

    this._sendPageView(page).then(pvId => {
      this.currentPvId = pvId;
    });

    // 4. 啟動心跳（立即發一次，之後每 30 秒）
    this._sendHeartbeat();
    this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), 30_000);
  }

  // ── 關閉頁面 ─────────────────────────────────────────────
  private _onBeforeUnload = () => {
    if (this.currentPvId && this.currentPageEnterMs) {
      const dur = Math.round((Date.now() - this.currentPageEnterMs) / 1000);
      this._sendLeave(this.currentPvId, dur);
    }
  };

  // ── Session ID ───────────────────────────────────────────
  private _getOrCreateSessionId(): string {
    try {
      const key = '_pv_sid';
      let sid = localStorage.getItem(key);
      if (!sid) {
        sid = 's' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
        localStorage.setItem(key, sid);
      }
      return sid;
    } catch {
      return 's' + Math.random().toString(36).slice(2, 10);
    }
  }

  // ── API 呼叫（全部 fire-and-forget）─────────────────────
  private async _sendPageView(page: string): Promise<number | null> {
    try {
      const res = await fetch(`${environment.apiUrl}/api/pv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page,
          ref:        document.referrer || undefined,
          session_id: this.sessionId,
          ua:         navigator.userAgent,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return data.pv_id ?? null;
      }
    } catch {}
    return null;
  }

  private _sendLeave(pvId: number, durationSec: number) {
    fetch(`${environment.apiUrl}/api/pv/leave`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pv_id: pvId, duration_sec: durationSec }),
      keepalive: true,
    }).catch(() => {});
  }

  private _sendHeartbeat() {
    fetch(`${environment.apiUrl}/api/pv/heartbeat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: this.sessionId, page: this.currentPage }),
      keepalive: true,
    }).catch(() => {});
  }

  /** Add Google Analytics Script Dynamically */
  addGAScript() {
    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.GA_TRACKING_ID;
    document.head.prepend(gtagScript);
    gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });
  }
}
