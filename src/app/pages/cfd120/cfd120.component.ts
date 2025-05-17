import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';


@Component({
  selector: 'app-cfd120',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfd120.component.html',
  styleUrls: ['./cfd120.component.scss']
})
export class Cfd120Component implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
