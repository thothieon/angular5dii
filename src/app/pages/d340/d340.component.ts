import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d340',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d340.component.html',
  styleUrls: ['./d340.component.scss']
})
export class D340Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
