import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ec01',
  templateUrl: './ec01.component.html',
  styleUrls: ['./ec01.component.scss']
})
export class Ec01Component implements OnInit {

  tomorrow = new Date(2017, 9, 20, 14,34); 
  

  constructor() { }

  ngOnInit(): void {
  }

}
