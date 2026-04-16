import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { AnalyticsService } from '../../service/analytics/analytics.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  constructor(private analytics: AnalyticsService) {}

  onNavSignupClick() {
    this.analytics.trackClick('nav_signup');
  }

}
