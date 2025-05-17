import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-b411',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b411.component.html',
  styleUrls: ['./b411.component.scss']
})
export class B411Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
