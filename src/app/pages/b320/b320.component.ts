import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { Firestore, collection, collectionData, CollectionReference, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';


export interface Equipment {
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

@Component({
  selector: 'app-b320',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b320.component.html',
  styleUrls: ['./b320.component.scss']
})
export class B320Component implements OnInit {

  active = 1;

  firestore = inject(Firestore);

  // 設定三個 Collection 引用
  private bcsRef = collection(this.firestore, 'iDiving/equipment/totalequipmentbc') as CollectionReference<Equipment>;
  private rcsRef = collection(this.firestore, 'iDiving/equipment/totalequipmentrm') as CollectionReference<Equipment>;

  // 透過 collectionData() 建立 observable
  bcs$: Observable<Equipment[]> = collectionData(this.bcsRef, { idField: 'id' });
  rcs$: Observable<Equipment[]> = collectionData(this.rcsRef, { idField: 'id' });

  // 分別新增資料的方法
  addMssItem(item: Equipment) {
    return addDoc(this.bcsRef, item);
  }

  addHbsItem(item: Equipment) {
    return addDoc(this.rcsRef, item);
  }

  ngOnInit(): void {
  }

}
