import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d230',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d230.component.html',
  styleUrls: ['./d230.component.scss']
})
export class D230Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
