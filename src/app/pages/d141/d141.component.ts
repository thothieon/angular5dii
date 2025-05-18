import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

@Component({
  selector: 'app-d141',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './d141.component.html',
  styleUrls: ['./d141.component.scss']
})
export class D141Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
