import { Component } from '@angular/core';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [SharedMaterialModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {

}
