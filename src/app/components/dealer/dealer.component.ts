import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';

@Component({
  selector: 'app-dealer',
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  templateUrl: './dealer.component.html',
  styleUrl: './dealer.component.scss'
})
export class DealerComponent {

  showCarousel = true;
  
  constructor() { }
  
  ngOnInit() {
    
  }
}
