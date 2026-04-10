import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../../service/analytics/analytics.service';

@Component({
  standalone: true,
  selector: 'app-head',
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  collapsed = true;

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  onNavSignupClick() {
    this.analytics.trackClick('nav_signup');
  }

}