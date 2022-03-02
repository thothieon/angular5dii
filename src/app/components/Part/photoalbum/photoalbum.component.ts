import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.scss']
})
export class PhotoalbumComponent implements OnInit {

  cards = [
    {img: '../../../assets/Image/FUNDIVE/L1120.png',
    title: '墾丁 2021 / 11 / 20 ~ 21 團'},
    {img: '../../../assets/Image/FUNDIVE/L1105.png',
    title: 'XXXX-XX-XX XXX團'},
    {img: '../../../assets/Image/FUNDIVE/L1102.png',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
    title: 'XXXX-XX-XX XXX團'},
    {img: 'https://drive.google.com/uc?export=view&id=1lwjTwdLF4SyZ5J3kzXSMegS98vvZnqZf',
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

  //constructor() { }

  //ngOnInit(): void {
  //}

}
