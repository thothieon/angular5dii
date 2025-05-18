import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d310',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d310.component.html',
  styleUrls: ['./d310.component.scss']
})
export class D310Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
