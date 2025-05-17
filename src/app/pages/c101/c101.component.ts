import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-c101',
    standalone: true,
    imports: [
      CommonModule,
      NgbNavModule,
      HeadComponent,
      FootComponent
    ],
  templateUrl: './c101.component.html',
  styleUrls: ['./c101.component.scss']
})
export class C101Component {

  active = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
