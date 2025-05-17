import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d150',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d150.component.html',
  styleUrls: ['./d150.component.scss']
})
export class D150Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
