import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

@Component({
  selector: 'app-cfdc210',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfdc210.component.html',
  styleUrls: ['./cfdc210.component.scss']
})
export class Cfdc210Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
