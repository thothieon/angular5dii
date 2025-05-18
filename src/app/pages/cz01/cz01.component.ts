import { Component, OnInit } from '@angular/core';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-cz01',
  standalone: true,
  imports: [
    HeadComponent,
    FootComponent
  ],
  templateUrl: './cz01.component.html',
  styleUrls: ['./cz01.component.scss']
})
export class Cz01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
