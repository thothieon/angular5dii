import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  showCarousel = true;
  
  constructor() { }
  
  ngOnInit() {
    
  }

  /*
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
  */
}
