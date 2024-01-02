//import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Infos { 
  id: string;
  q: string; 
  a: string;
}

@Component({
  selector: 'app-qaa001',
  templateUrl: './qaa001.component.html',
  styleUrls: ['./qaa001.component.scss']
})
export class Qaa001Component implements OnInit, AfterViewInit {

  //@ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  //@ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective

  previous: any = [];

  private hearsaytotalsCollection: AngularFirestoreCollection<Infos>;
  infos: Observable<Infos[]>;
  constructor(private cdRef: ChangeDetectorRef, private afs: AngularFirestore) {
    this.hearsaytotalsCollection = afs.collection<Infos>('/iDiving/begin/qaa');
    this.infos = this.hearsaytotalsCollection.valueChanges();
  }

  addItem(infos: Infos) {
    this.hearsaytotalsCollection.add(infos);
  }

  ngOnInit(): void {
    //this.mdbTable.setDataSource(this.infos);
    //this.infos = this.mdbTable.getDataSource();
    //this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    //this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    //this.mdbTablePagination.calculateFirstItemIndex();
    //this.mdbTablePagination.calculateLastItemIndex();
    //this.cdRef.detectChanges();
  }
}
