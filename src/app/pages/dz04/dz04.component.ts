import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-dz04',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './dz04.component.html',
  styleUrls: ['./dz04.component.scss']
})
export class Dz04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
