import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-d420',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './d420.component.html',
  styleUrls: ['./d420.component.scss']
})
export class D420Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
