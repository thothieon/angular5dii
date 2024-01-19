import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfd131',
  templateUrl: './cfd131.component.html',
  styleUrls: ['./cfd131.component.scss']
})
export class Cfd131Component implements OnInit {

  //美人魚
  Weekdays = [
    {img: '../../../../assets/Image/Data/FD_MM_01.png'},
    {img: '../../../../assets/Image/Data/FD_MM_02.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
