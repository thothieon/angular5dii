import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-smallactivity',
  templateUrl: './smallactivity.component.html',
  styleUrls: ['./smallactivity.component.scss']
})
export class SmallactivityComponent implements OnInit {

  cards = [
    { href:'/#/d130',
      img: '../../../assets/Image/Data/小琉球.jpg',
      title: '2022/04/02~04 小琉球團'},
    { href:'/#/d140',
      img: '../../../assets/Image/Data/綠島.jpg',
      title: '2022/04/02~05 綠島團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '2022/04/13~14 墾丁團'},

    { href:'/#/d150',
      img: '../../../assets/Image/Data/蘭嶼.jpg',
      title: '2022/04/15~18 蘭嶼團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '2022/04/22~25 墾丁團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '2022/05/07~08 墾丁團'},

    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '2022/05/14~15 墾丁團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁自潛.jpg',
      title: '2022/05/14~15 墾丁自潛團'},
    { href:'/#/d160',
      img: '../../../assets/Image/Data/澎湖.jpg',
      title: '2022/05/19~22 澎湖團'},

      { href:'/#/d120',
        img: '../../../assets/Image/Data/墾丁.jpg',
        title: '2022/05/20~23 綠島團'},
  ];
  
  slides: any = [[]];
  
  constructor(private renderer: Renderer2) { }
  
  
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
  
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
    //  this.renderer.removeClass(el, 'btn-floating');
    //  this.renderer.addClass(el, 'px-3');
    //  this.renderer.addClass(el.firstElementChild, 'fa-1x');
    });
  }

  /*slides: any = [[]];

  constructor(private renderer: Renderer2) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
  }*/

}
