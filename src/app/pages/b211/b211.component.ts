import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-b211',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b211.component.html',
  styleUrls: ['./b211.component.scss']
})
export class B211Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
