import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c120',
  templateUrl: './c120.component.html',
  styleUrls: ['./c120.component.scss']
})
export class C120Component implements OnInit {

  active = 1;
  
  //假日班
  Weekenders = [
    {img: '../../../../assets/Image/Data/OWD_Weekend_Schedule.png'},
    {img: '../../../../assets/Image/Data/OWD_Weekend_Schedule01.png'}
  ];
  
  //平日班
  Weekdays = [
    {img: '../../../../assets/Image/Data/OWD_Weekdays_Schedule.png'},
    {img: '../../../../assets/Image/Data/OWD_Weekdays_Schedule01.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
