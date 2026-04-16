import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { AnalyticsService } from '../../service/analytics/analytics.service';

@Component({
  selector: 'app-paymentmethod',
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  templateUrl: './paymentmethod.component.html',
  styleUrl: './paymentmethod.component.scss'
})
export class PaymentmethodComponent {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit(): void {
  }

  onSignupClick() {
    this.analytics.trackClick('cta_signup');
    window.location.href = '/#/cz01';
  }

}
