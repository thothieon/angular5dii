import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-m100',
  templateUrl: './m100.component.html',
  styleUrls: ['./m100.component.scss']
})
export class M100Component implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];

  elementsa: any = [
    {id: 1, img: '../../../../assets/Image/Data/綠島自潛深度團.jpg', item:'訊息', data:'2022.02.24', last: 'Otto', text: '綠島自潛深度團'},
    {id: 2, img: '../../../../assets/Image/Data/海洋博物誌2.jpg', item:'訊息', data:'2022.02.22', last: 'Thornton', text: '海洋博物誌 新書分享會，於2/26(六)15:00開始'},
    {id: 3, img: '../../../../assets/Image/Data/22新年壓歲金_n.jpg', item:'優惠', data:'2022.02.23', last: 'the Bird', text: '2022 OWD FD 課程夏季班早鳥優惠'},
    {id: 4, img: '../../../../assets/Image/Data/綠島自潛深度團.jpg', item:'訊息', data:'2022.02.24', last: 'Otto', text: '綠島自潛深度團'},
    {id: 5, img: '../../../../assets/Image/Data/海洋博物誌2.jpg', item:'訊息', data:'2022.02.24', last: 'Thornton', text: '海洋博物誌 新書分享會，於2/26(六)15:00開始'},
    {id: 6, img: '../../../../assets/Image/Data/22新年壓歲金_n.jpg', item:'優惠', data:'2022.02.24', last: 'the Bird', text: '2022 OWD FD 課程夏季班早鳥優惠'},
    {id: 7, img: '../../../../assets/Image/Data/綠島自潛深度團.jpg', item:'訊息', data:'2022.02.24', last: 'Otto', text: '綠島自潛深度團'},
    {id: 8, img: '../../../../assets/Image/Data/海洋博物誌2.jpg', item:'訊息', data:'2022.02.24', last: 'Thornton', text: '海洋博物誌 新書分享會，於2/26(六)15:00開始'},
    {id: 9, img: '../../../../assets/Image/Data/22新年壓歲金_n.jpg', item:'優惠', data:'2022.02.24', last: 'the Bird', text: '2022 OWD FD 課程夏季班早鳥優惠'},
    {id: 10, img: '../../../../assets/Image/Data/綠島自潛深度團.jpg', item:'訊息', data:'2022.02.24', last: 'Otto', text: '綠島自潛深度團'},
    {id: 11, img: '../../../../assets/Image/Data/海洋博物誌2.jpg', item:'訊息', data:'2022.02.24', last: 'Thornton', text: '海洋博物誌 新書分享會，於2/26(六)15:00開始'},
    {id: 12, img: '../../../../assets/Image/Data/22新年壓歲金_n.jpg', item:'優惠', data:'2022.02.24', last: 'the Bird', hatextndle: '2022 OWD FD 課程夏季班早鳥優惠'},
    {id: 13, img: '../../../../assets/Image/Data/綠島自潛深度團.jpg', item:'訊息', data:'2022.02.24', last: 'Otto', text: '綠島自潛深度團'},
    {id: 14, img: '../../../../assets/Image/Data/海洋博物誌2.jpg', item:'訊息', data:'2022.02.24', last: 'Thornton', text: '海洋博物誌 新書分享會，於2/26(六)15:00開始'},
    {id: 15, img: '../../../../assets/Image/Data/22新年壓歲金_n.jpg', item:'優惠', data:'2022.02.24', last: 'the Bird', text: '2022 OWD FD 課程夏季班早鳥優惠'},
  ];

  headElementsa = ['ID', 'img', 'Last', 'Handle'];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    /*for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }*/

    this.mdbTable.setDataSource(this.elementsa);
    this.elementsa = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
