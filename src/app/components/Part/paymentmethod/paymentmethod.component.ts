import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../../service/analytics/analytics.service';

@Component({
  standalone: true,
  selector: 'app-paymentmethod',
  imports: [CommonModule],
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.scss']
})
export class PaymentmethodComponent implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit(): void {
  }

  onSignupClick() {
    this.analytics.trackClick('cta_signup');
    window.location.href = '/#/cz01';
  }

}
