import { Component, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AnalyticsService } from './service/analytics/analytics.service';

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

  private currentPvId: number | null = null;
  private currentPageEnterMs: number | null = null;
  private currentPage = '';
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;

  constructor(
    private router: Router,
    private meta: Meta,
    private analytics: AnalyticsService,
  ) {
    this.addGAScript();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', { page_path: event.urlAfterRedirects });
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

  private _onNavigate(page: string) {
    // 1. 記錄上一頁停留時間
    if (this.currentPvId && this.currentPageEnterMs) {
      const dur = Math.round((Date.now() - this.currentPageEnterMs) / 1000);
      this.analytics.sendLeave(this.currentPvId, dur);
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

    this.analytics.trackPageView(page).then(pvId => {
      this.currentPvId = pvId;
    });

    // 4. 啟動心跳（立即發一次，之後每 30 秒）
    this.analytics.sendHeartbeat(page);
    this.heartbeatTimer = setInterval(() => this.analytics.sendHeartbeat(this.currentPage), 30_000);
  }

  private _onBeforeUnload = () => {
    if (this.currentPvId && this.currentPageEnterMs) {
      const dur = Math.round((Date.now() - this.currentPageEnterMs) / 1000);
      this.analytics.sendLeave(this.currentPvId, dur);
    }
  };

  addGAScript() {
    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.GA_TRACKING_ID;
    document.head.prepend(gtagScript);
    gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });
  }
}
