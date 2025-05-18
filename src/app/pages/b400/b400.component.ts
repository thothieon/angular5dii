import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-b400',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b400.component.html',
  styleUrls: ['./b400.component.scss']
})
export class B400Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
