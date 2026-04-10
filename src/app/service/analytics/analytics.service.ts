import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  readonly sessionId = this._getOrCreateSessionId();
  currentPvId: number | null = null;

  // ── 頁面瀏覽 ─────────────────────────────────────────────
  async trackPageView(page: string): Promise<number | null> {
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
        const pvId = data.pv_id ?? null;
        this.currentPvId = pvId;
        return pvId;
      }
    } catch {}
    return null;
  }

  // ── 離開頁面（停留時間）──────────────────────────────────
  sendLeave(pvId: number, durationSec: number) {
    fetch(`${environment.apiUrl}/api/pv/leave`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pv_id: pvId, duration_sec: durationSec }),
      keepalive: true,
    }).catch(() => {});
  }

  // ── 心跳（即時在線）─────────────────────────────────────
  sendHeartbeat(page: string) {
    fetch(`${environment.apiUrl}/api/pv/heartbeat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: this.sessionId, page }),
      keepalive: true,
    }).catch(() => {});
  }

  // ── 點擊事件（CTA / 外部連結 / 漏斗）───────────────────
  //
  //  type  範例值：
  //    'cta_signup'    — 立即報名按鈕
  //    'nav_signup'    — 導覽列「線上報名」
  //    'outbound_line' — LINE 外部連結
  //    'outbound_fb'   — Facebook 外部連結
  //    'outbound_ig'   — Instagram 外部連結
  //
  //  label：自動帶入觸發時的當前頁路徑，方便後端計算漏斗轉換率
  trackClick(type: string, label?: string) {
    const page = window.location.hash || window.location.pathname;
    fetch(`${environment.apiUrl}/api/pv/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pv_id:      this.currentPvId,
        session_id: this.sessionId,
        type,
        label:      label ?? page,
        page,
      }),
      keepalive: true,
    }).catch(() => {});
  }

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
}
