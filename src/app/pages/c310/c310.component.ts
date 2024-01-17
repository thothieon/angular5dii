import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c310',
  templateUrl: './c310.component.html',
  styleUrls: ['./c310.component.scss']
})
export class C310Component implements OnInit {

  active = 1;
  active_01 = 1;
  active_02 = 1;
  active_03 = 1;

  // DD 課表
  //DDSchedules = [
    // 假日班
    //{img: '../../../../assets/Image/Data/DD_Weekend_Schedule.png'},
    // 平日班
    //{img: '../../../../assets/Image/Data/DD_Weekdays_Schedule.png'}
  //];

  // NL 課表
  //NLSchedules = [
    // 假日班
    //{img: '../../../../assets/Image/Data/NL_Weekend_Schedule.png'},
    // 平日班
    //{img: '../../../../assets/Image/Data/NL_Weekdays_Schedule.png'}
  //];

  constructor() { }

  ngOnInit(): void {
  }

}
