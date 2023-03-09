import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health001',
  templateUrl: './health001.component.html',
  styleUrls: ['./health001.component.scss']
})
export class Health001Component implements OnInit {

  pdfSrc = "assets/pdf/2022_HealthStatement_Chinese_Traditional.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
