import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { getDocument, GlobalWorkerOptions, PDFDocumentProxy } from 'pdfjs-dist';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-health001',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './health001.component.html',
  styleUrls: ['./health001.component.scss']
})
export class Health001Component implements AfterViewInit {

  pdfSrc = "assets/pdf/2022_HealthStatement_Chinese_Traditional.pdf";

  constructor() { }

  ngAfterViewInit(): void {
    
    GlobalWorkerOptions.workerSrc = 'assets/pdf/pdf.worker.min.mjs';
    
    const url = 'assets/pdf/2022_HealthStatement_Chinese_Traditional.pdf'; // 本地或遠端 PDF 檔案

    const loadingTask = getDocument(url);
    loadingTask.promise.then((pdf: PDFDocumentProxy) => {
      // 取得第一頁
      pdf.getPage(1).then((page) => {
        const canvas = document.getElementById('pdf-canvas') as HTMLCanvasElement;
        const context = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context!,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    });
  }

}
