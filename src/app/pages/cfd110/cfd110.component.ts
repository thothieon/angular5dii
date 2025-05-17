import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

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
  {position: 'Freediver 自由潛水員', name: 'NT 4,000', weight: 'NT 6,000', symbol: 'NT 8,000', symbol1: 'NT 10,000', symbol2: '無退費'},
  {position: 'POOL', name: 'NT 3,600', weight: 'NT 4,800', symbol: 'NT 6,000', symbol1: '無退費', symbol2: '-'},
  {position: 'BASIC', name: 'NT 3,400', weight: 'NT 4,100', symbol: 'NT 4,800', symbol1: '無退費', symbol2: '-'},
];

@Component({
  selector: 'app-cfd110',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent,
    PaymentmethodComponent
  ],
  templateUrl: './cfd110.component.html',
  styleUrls: ['./cfd110.component.scss']
})
export class Cfd110Component implements OnInit {

  active = 1;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
