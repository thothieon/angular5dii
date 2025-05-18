import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-j100',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './j100.component.html',
  styleUrl: './j100.component.scss'
})

export class J100Component implements OnInit {

  active = 1;
  active1 = 1;
  active2 = 1;

  constructor() { }

  ngOnInit(): void {
  }
}
