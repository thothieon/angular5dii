import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

@Component({
  selector: 'app-cfd131',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfd131.component.html',
  styleUrls: ['./cfd131.component.scss']
})
export class Cfd131Component implements OnInit {

  //美人魚
  Weekdays = [
    {img: '../../../../assets/Image/Data/FD_MM_01.png'},
    {img: '../../../../assets/Image/Data/FD_MM_02.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
