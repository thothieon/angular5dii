import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dz01',
  templateUrl: './dz01.component.html',
  styleUrls: ['./dz01.component.scss']
})
export class Dz01Component implements OnInit {

  elements: any = [
    {id: 1, first: '墾丁 潛水之旅 ( 雙十連假 )', last: '2021 / 10 / 9 ~ 11', handle: '已結束'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  constructor() { }

  ngOnInit(): void {
  }

}
