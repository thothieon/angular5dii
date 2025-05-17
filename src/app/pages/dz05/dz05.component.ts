import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-dz05',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './dz05.component.html',
  styleUrls: ['./dz05.component.scss']
})
export class Dz05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
