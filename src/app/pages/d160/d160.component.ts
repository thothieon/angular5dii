import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d160',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d160.component.html',
  styleUrls: ['./d160.component.scss']
})
export class D160Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
