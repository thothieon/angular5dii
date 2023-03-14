import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Hearsaytotal { 
  id: string;
  color: string; 
  title: string; 
  date: string; 
  item: string; 
  img: string; 
  detail: string; 
}

@Component({
  selector: 'app-m100',
  templateUrl: './m100.component.html',
  styleUrls: ['./m100.component.scss']
})
export class M100Component implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective

  previous: any = [];

  private hearsaytotalsCollection: AngularFirestoreCollection<Hearsaytotal>;
  hearsaytotals: Observable<Hearsaytotal[]>;
  constructor(private cdRef: ChangeDetectorRef, private afs: AngularFirestore) {
    this.hearsaytotalsCollection = afs.collection<Hearsaytotal>('iDiving/begin/hearsaytotal');
    this.hearsaytotals = this.hearsaytotalsCollection.valueChanges();
  }

  addItem(hearsaytotals: Hearsaytotal) {
    this.hearsaytotalsCollection.add(hearsaytotals);
  }

  ngOnInit(): void {
    this.mdbTable.setDataSource(this.hearsaytotals);
    this.hearsaytotals = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
