import { Component, inject  } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { Firestore, collection, collectionData, CollectionReference, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Fewalbums { 
  t01: string;
  t02: string; 
  t03: string;
}

@Component({
  selector: 'app-fewalbums',
    standalone: true,
    imports: [
      CommonModule,
      SharedMaterialModule
    ],
  templateUrl: './fewalbums.component.html',
  styleUrl: './fewalbums.component.scss'
})
export class FewalbumsComponent {

  firestore = inject(Firestore);

  private fewalbumsRef = collection(this.firestore, 'iDiving/begin/fewalbums') as CollectionReference<Fewalbums>;
  fewalbums$: Observable<Fewalbums[]> = collectionData(this.fewalbumsRef);

  addItem(fewalbumsitems: Fewalbums) {
    return addDoc(this.fewalbumsRef, fewalbumsitems);
  }

  ngOnInit(): void {
  }

}
