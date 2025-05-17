import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-dz03',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './dz03.component.html',
  styleUrls: ['./dz03.component.scss']
})
export class Dz03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
