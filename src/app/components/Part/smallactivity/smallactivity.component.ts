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
      title: '小琉球 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d140',
      img: '../../../assets/Image/Data/綠島.jpg',
      title: '綠島 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '墾丁 2022 / 11 / 20 ~ 21 團'},

    { href:'/#/d150',
      img: '../../../assets/Image/Data/蘭嶼.jpg',
      title: '蘭嶼 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d130',
      img: '../../../assets/Image/Data/小琉球_人魚_自潛.jpg',
      title: '小琉球 自潛 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '墾丁 2022 / 11 / 20 ~ 21 團'},

    { href:'/#/d140',
      img: '../../../assets/Image/Data/綠島.jpg',
      title: '綠島 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d120',
      img: '../../../assets/Image/Data/墾丁.jpg',
      title: '墾丁 2022 / 11 / 20 ~ 21 團'},
    { href:'/#/d140',
      img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
      title: 'XXXX-XX-XX XXX團'},
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
