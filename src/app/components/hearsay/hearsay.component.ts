import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Hearsay {
  id: string;
  color: string;
  title: string;
  date: string;
  item: string;
}

@Component({
  selector: 'app-hearsay',
  standalone: true,
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  templateUrl: './hearsay.component.html',
  styleUrl: './hearsay.component.scss'
})
export class HearsayComponent {

  private firestore = inject(Firestore);
  hearsays$: Observable<any>;

  constructor() {
    const col = collection(this.firestore, 'iDiving/begin/hearsay');
    this.hearsays$ = collectionData(col, { idField: 'id' });
  }
}
