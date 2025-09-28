import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-c120',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './c120.component.html',
  styleUrls: ['./c120.component.scss']
})
export class C120Component implements OnInit {

  active = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
