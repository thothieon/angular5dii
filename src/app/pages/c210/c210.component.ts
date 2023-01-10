import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c210',
  templateUrl: './c210.component.html',
  styleUrls: ['./c210.component.scss']
})
export class C210Component implements OnInit {

  active = 1;

  AA_Schedule = [
    {img: '../../../../assets/Image/Data/AA_Schedule_Weekend.png'},
    {img: '../../../../assets/Image/Data/AA_Schedule_Weekdays.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
