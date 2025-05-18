import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

@Component({
  selector: 'app-cfd130',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfd130.component.html',
  styleUrls: ['./cfd130.component.scss']
})
export class Cfd130Component implements OnInit {

  active = 1;

  //美人魚 平日 假日
  /*Weekdays = [
    {img: '../../../../assets/Image/Data/FD_MM_01.png'},
    {img: '../../../../assets/Image/Data/FD_MM_03.png'},
    {img: '../../../../assets/Image/Data/FD_MM_02.png'},
    {img: '../../../../assets/Image/Data/FD_MM_04.png'}
  ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
