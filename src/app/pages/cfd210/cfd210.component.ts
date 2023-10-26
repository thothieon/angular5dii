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
  {position: 'Advanced Freediver', name: 'NT 4,000', weight: 'NT 6,000', symbol: 'NT 8,000', symbol1: 'NT 10,000', symbol2: '無退費'},
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
