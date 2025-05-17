import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-b212',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b212.component.html',
  styleUrls: ['./b212.component.scss']
})
export class B212Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
