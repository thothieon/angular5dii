import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bz01',
  templateUrl: './bz01.component.html',
  styleUrls: ['./bz01.component.scss']
})
export class Bz01Component implements OnInit {

  elements: any = [
    {id: 1, first: '2021 自由潛水（冬季班）Lv1 第二期', last: '10/05、10/06、10/09、10/10 + 10/16 ~ 17 墾丁結訓', handle: '已結束'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor() { }

  ngOnInit(): void {
  }

}
