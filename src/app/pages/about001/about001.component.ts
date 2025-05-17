import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-about001',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './about001.component.html',
  styleUrls: ['./about001.component.scss']
})
export class About001Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
