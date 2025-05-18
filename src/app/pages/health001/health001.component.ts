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

  pdfDoc!: PDFDocumentProxy;
  currentPage = 1;
  totalPages = 0;
  scale = 1.5;

  ngAfterViewInit(): void {
    GlobalWorkerOptions.workerSrc = 'assets/pdf/pdf.worker.min.mjs';
    const url = 'assets/pdf/2022_HealthStatement_Chinese_Traditional.pdf';

    getDocument(url).promise.then((pdf: PDFDocumentProxy) => {
      this.pdfDoc = pdf;
      this.totalPages = pdf.numPages;
      this.renderPage(this.currentPage);
    });
  }

  renderPage(pageNumber: number): void {
    this.pdfDoc.getPage(pageNumber).then((page) => {
      const canvas = document.getElementById('pdf-canvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: this.scale });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({ canvasContext: context!, viewport });
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.renderPage(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.renderPage(this.currentPage);
    }
  }

}
