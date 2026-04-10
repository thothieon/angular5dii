import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytics/analytics.service';

@Component({
  selector: 'app-paymentmethod1000',
  templateUrl: './paymentmethod1000.component.html',
  styleUrls: ['./paymentmethod1000.component.scss']
})
export class Paymentmethod1000Component implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit(): void {
  }

  onSignupClick() {
    this.analytics.trackClick('cta_signup');
    window.location.href = '/#/cz01';
  }

}
