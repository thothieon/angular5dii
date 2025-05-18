import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';
import { PaymentmethodComponent } from '../../components/paymentmethod/paymentmethod.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  symbol1: string;
  symbol2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Performance Freediver', name: 'NT 5,000', weight: 'NT 7,000', symbol: 'NT 9,000', symbol1: 'NT 11,000', symbol2: '無退費' },
];

@Component({
  selector: 'app-cfd310',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfd310.component.html',
  styleUrls: ['./cfd310.component.scss']
})
export class Cfd310Component implements OnInit {

  active = 1;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
