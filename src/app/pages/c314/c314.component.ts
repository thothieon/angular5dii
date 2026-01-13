import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

@Component({
  selector: 'app-c314',
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './c314.component.html',
  styleUrl: './c314.component.scss'
})
export class C314Component {

  active = 1;

  AA_Schedule = [
    {img: '../../../../assets/Image/Data/AA_Schedule_Weekend.png'},
    {img: '../../../../assets/Image/Data/AA_Schedule_Weekdays.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
