import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-health001',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './health001.component.html',
  styleUrls: ['./health001.component.scss']
})
export class Health001Component implements OnInit {

  pdfSrc = "assets/pdf/2022_HealthStatement_Chinese_Traditional.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
