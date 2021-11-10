import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent implements OnInit {
  
  elementsCourse: any = [
    {id: 1, first: '自由潛水(冬季班)-04期', last: '10-26', handle: '可報名'},
    {id: 2, first: '自由潛水(夏季假日)-01期', last: '05-03', handle: '可報名'},
    {id: 3, first: '初級潛水(冬季班)-03期', last: '10-27', handle: '可報名'},
    {id: 4, first: '初級潛水(夏季假日)-01期', last: '04-12', handle: '可報名'},
    {id: 5, first: '高氧專長-16期', last: '10-26', handle: '可報名'}
  ];

  elementsActivity: any = [
    {id: 1, first: '小琉球', last: '2021-10-30', handle: '剩1位'},
    {id: 2, first: '小琉球', last: '2021-11-02', handle: '可報名'},
    {id: 3, first: '墾丁', last: '2021-11-20', handle: '可報名'},
    {id: 4, first: '墾丁', last: '2021-12-18', handle: '可報名'},
    {id: 5, first: '小琉球(自潛)', last: '2021-03-18', handle: '可報名'}
  ];

  headElementsCourse = ['ID', 'First', 'Last', 'Handle'];

  headElementsActivity = ['ID', 'First', 'Last', 'Handle'];

  constructor() { }

  ngOnInit(): void {
  }

}
