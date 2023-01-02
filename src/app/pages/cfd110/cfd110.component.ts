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
  selector: 'app-cfd110',
  templateUrl: './cfd110.component.html',
  styleUrls: ['./cfd110.component.scss']
})
export class Cfd110Component implements OnInit {

  active = 3;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2'];
  dataSource = ELEMENT_DATA;
  
  //假日班
  Weekenders = [
    {img: '../../../../assets/Image/Data/FD_Weekend_Schedule_01.png'},
    {img: '../../../../assets/Image/Data/FD_Weekend_Schedule_02.png'}
  ];
  
  //平日班
  Weekdays = [
    {img: '../../../../assets/Image/Data/FD_Weekdays_Schedule_20221.png'},
    {img: '../../../../assets/Image/Data/FD_Weekdays_Schedule_20222.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
