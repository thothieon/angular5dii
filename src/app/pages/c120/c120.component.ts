import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c120',
  templateUrl: './c120.component.html',
  styleUrls: ['./c120.component.scss']
})
export class C120Component implements OnInit {

  active = 1;
  
  Weekendcards = [
    {img: '../../../../assets/Image/Data/OWD_Weekend_Schedule_20221.png'},
    {img: '../../../../assets/Image/Data/OWD_Weekend_Schedule_20222.png'},
  ];
  
  Weekdayscards = [
    {img: '../../../../assets/Image/Data/OWD_Weekdays_Schedule_20221.png'},
    {img: '../../../../assets/Image/Data/OWD_Weekdays_Schedule_20222.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
