import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';


@Component({
  selector: 'app-c130',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './c130.component.html',
  styleUrls: ['./c130.component.scss']
})
export class C130Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
