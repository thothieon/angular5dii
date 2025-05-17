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
  selector: 'app-qac001',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './qac001.component.html',
  styleUrls: ['./qac001.component.scss']
})
export class Qac001Component implements OnInit, AfterViewInit {

  previous: any = [];

  private firestore = inject(Firestore);  
  private infosRef = collection(this.firestore, 'iDiving/begin/qac') as CollectionReference<Infos>;
  infos$: Observable<Infos[]> = collectionData(this.infosRef, { idField: 'id' });

  constructor(private cdRef: ChangeDetectorRef) {}

  addItem(infos: Infos) {
    return addDoc(this.infosRef, infos);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
