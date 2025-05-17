import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';

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

  constructor() { }

  ngOnInit(): void {
  }

}
