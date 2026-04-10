import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../../service/analytics/analytics.service';

@Component({
  standalone: true,
  selector: 'app-foot',
  imports: [CommonModule],
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  onLineClick() {
    this.analytics.trackClick('outbound_line');
  }

  onFbClick() {
    this.analytics.trackClick('outbound_fb');
  }

  onIgClick() {
    this.analytics.trackClick('outbound_ig');
  }

}