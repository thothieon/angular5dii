//import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Component, OnInit, inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Firestore, collection, collectionData, CollectionReference, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

export interface Infos { 
  id: string;
  q: string; 
  a: string;
}

@Component({
  selector: 'app-qaa001',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './qaa001.component.html',
  styleUrls: ['./qaa001.component.scss']
})
export class Qaa001Component implements OnInit, AfterViewInit {

  previous: any = [];
  
  firestore = inject(Firestore);

  infosRef = collection(this.firestore, '/iDiving/begin/qaa') as CollectionReference<Infos>;
  infos$: Observable<Infos[]> = collectionData(this.infosRef, { idField: 'id' });

  constructor(private cdRef: ChangeDetectorRef) {}

  addItem(item: Infos) {
    return addDoc(this.infosRef, item);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
