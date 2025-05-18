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
  selector: 'app-b310',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './b310.component.html',
  styleUrls: ['./b310.component.scss']
})
export class B310Component implements OnInit {

  active = 1;

  firestore = inject(Firestore);

  // 設定三個 Collection 引用
  private mssRef = collection(this.firestore, 'iDiving/equipment/totalequipmentms') as CollectionReference<Equipment>;
  private hbsRef = collection(this.firestore, 'iDiving/equipment/totalequipmenthb') as CollectionReference<Equipment>;
  private lsRef  = collection(this.firestore, 'iDiving/equipment/totalequipmentl') as CollectionReference<Equipment>;

  // 透過 collectionData() 建立 observable
  mss$: Observable<Equipment[]> = collectionData(this.mssRef, { idField: 'id' });
  hbs$: Observable<Equipment[]> = collectionData(this.hbsRef, { idField: 'id' });
  ls$:  Observable<Equipment[]> = collectionData(this.lsRef,  { idField: 'id' });

  // 分別新增資料的方法
  addMssItem(item: Equipment) {
    return addDoc(this.mssRef, item);
  }

  addHbsItem(item: Equipment) {
    return addDoc(this.hbsRef, item);
  }

  addLsItem(item: Equipment) {
    return addDoc(this.lsRef, item);
  }

  ngOnInit(): void {
  }

}
