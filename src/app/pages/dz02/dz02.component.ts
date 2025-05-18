import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-dz02',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './dz02.component.html',
  styleUrls: ['./dz02.component.scss']
})
export class Dz02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
