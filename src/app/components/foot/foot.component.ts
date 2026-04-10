import { Component } from '@angular/core';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { AnalyticsService } from '../../service/analytics/analytics.service';

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [SharedMaterialModule],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.scss'
})
export class FootComponent {

  constructor(private analytics: AnalyticsService) {}

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
