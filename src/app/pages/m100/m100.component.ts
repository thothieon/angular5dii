import { Component, OnInit, inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Firestore, collection, collectionData, CollectionReference, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { HeadComponent } from '../../components/head/head.component';
import { FootComponent } from '../../components/foot/foot.component';

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
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './m100.component.html',
  styleUrls: ['./m100.component.scss']
})
export class M100Component implements OnInit, AfterViewInit {

  previous: any = [];

  firestore = inject(Firestore);

  // 設定三個 Collection 引用
  private hearsaytotalsCollection = collection(this.firestore, 'iDiving/begin/hearsaytotal') as CollectionReference<Hearsaytotal>;

  // 透過 collectionData() 建立 observable
  hbs$: Observable<Hearsaytotal[]> = collectionData(this.hearsaytotalsCollection, { idField: 'id' });

  // 分別新增資料的方法
  addMssItem(item: Hearsaytotal) {
    return addDoc(this.hearsaytotalsCollection, item);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
