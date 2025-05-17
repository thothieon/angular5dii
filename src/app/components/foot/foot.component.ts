import { Component } from '@angular/core';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

@Component({
  selector: 'app-foot',
    standalone: true,
    imports: [SharedMaterialModule],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.scss'
})
export class FootComponent {

}
