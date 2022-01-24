import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  symbol1: string;
  symbol2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'LV1', name: 'NT 4,000', weight: 'NT 6,000', symbol: 'NT 8,000', symbol1: 'NT 10,000', symbol2: '無退費'},
  {position: 'POOL', name: 'NT 3,600', weight: 'NT 4,800', symbol: 'NT 6,000', symbol1: '無退費', symbol2: '-'},
  {position: 'BASIC', name: 'NT 3,400', weight: 'NT 4,100', symbol: 'NT 4,800', symbol1: '無退費', symbol2: '-'},
];

@Component({
  selector: 'app-cfd210',
  templateUrl: './cfd210.component.html',
  styleUrls: ['./cfd210.component.scss']
})
export class Cfd210Component implements OnInit {

  active = 1;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
