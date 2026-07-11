import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c120',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './c120.component.html',
  styleUrls: ['./c120.component.scss']
})
export class C120Component implements OnInit {

  active = 3;

  private tabMap: Record<string, number> = {
    weekend: 1,
    weekday: 2,
    '3day': 3,
    'special': 4,
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // 1) 先根據 query param 切 tab
    this.route.queryParamMap.subscribe((params) => {
      const tabKey = (params.get('tab') || '').toLowerCase();
      if (this.tabMap[tabKey]) this.active = this.tabMap[tabKey];

      // 2) 若同時有 #hash（錨點），等 tab 畫面出來再捲動
      setTimeout(() => this.scrollToHash(), 0);
    });

    // 如果你是只用 #hash 也想處理（可留可不留）
    this.route.fragment.subscribe(() => setTimeout(() => this.scrollToHash(), 0));
  }

  private scrollToHash() {
    const id = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
