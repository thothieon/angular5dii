import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  cards = [
    {img: '../../../../assets/Image/Dealer/1.png'},
    {img: '../../../../assets/Image/Dealer/2.png'},
    {img: '../../../../assets/Image/Dealer/3.png'},
    {img: '../../../../assets/Image/Dealer/4.png'},
    {img: '../../../../assets/Image/Dealer/5.png'},
    {img: '../../../../assets/Image/Dealer/6.png'},
    {img: '../../../../assets/Image/Dealer/7.png'},
    {img: '../../../../assets/Image/Dealer/8.png'},
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
    //const buttons = document.querySelectorAll('.btn-floating');
    //buttons.forEach((el: any) => {
    //  this.renderer.removeClass(el, 'btn-floating');
    //  this.renderer.addClass(el, 'px-3');
    //  this.renderer.addClass(el.firstElementChild, 'fa-1x');
    //});
  }

  //constructor() { }

  //ngOnInit(): void {
  //}

}
