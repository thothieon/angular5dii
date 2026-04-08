import { Component, OnInit } from '@angular/core';
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
export class AppComponent {
  title = 'iDiving';

  constructor(private router: Router, private meta: Meta) {
    this.addGAScript();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      /** START : Code to Track Page View  */
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
      /** END */

      // 自建頁面瀏覽統計（fire-and-forget）
      this.sendPageView(event.urlAfterRedirects);
    });
    //https://blog.poychang.net/how-to-use-html-head/
    this.meta.addTags([
          {name: 'title', content: '北部潛水課程首選【iDiving 全方位潛水中心】，精緻小班教學，提供保證班潛水課程｜水肺潛水｜ 自由潛水 ｜技術潛水｜ 美人魚課程 ｜生態潛水｜體驗潛水｜各項教練班課程 ｜潛水旅遊 ｜潛水器材裝備販售｜企業合作｜。'},
          //{name: 'description', content: 'How to use Angular 4 meta service'},
          //{name: 'author', content: 'talkingdotnet'},
          //{name: 'keywords', content: 'Angular, Meta Service'}
        ]);
        // this.meta.updateTag({ name: 'description', content: 'Angular 4 meta service - original method'});
        //this.meta.updateTag({ name: 'description', content: 'Angular 4 meta service - updated' });
  }

  /** 將頁面瀏覽資料送至自建後端（不影響主流程，失敗靜默忽略） */
  private sendPageView(page: string) {
    try {
      fetch(`${environment.apiUrl}/api/pv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, ref: document.referrer || undefined }),
        keepalive: true,
      }).catch(() => {});
    } catch {}
  }

  /** Add Google Analytics Script Dynamically */
  addGAScript() {
    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.GA_TRACKING_ID;
    document.head.prepend(gtagScript);
    /** Disable automatic page view hit to fix duplicate page view count  **/
    gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });
  }
}
