import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Fewalbums { 
  t01: string;
  t02: string; 
  t03: string;
}

@Component({
  selector: 'app-fewalbums',
  templateUrl: './fewalbums.component.html',
  styleUrls: ['./fewalbums.component.scss']
})
export class FewalbumsComponent implements OnInit {

  private fewalbumsitemCollection: AngularFirestoreCollection<Fewalbums>;
  fewalbumsitems: Observable<Fewalbums[]>;
  constructor(private afs: AngularFirestore) {
    this.fewalbumsitemCollection = afs.collection<Fewalbums>('iDiving/begin/fewalbums');
    this.fewalbumsitems = this.fewalbumsitemCollection.valueChanges();
  }
  addItem(fewalbumsitems: Fewalbums) {
    this.fewalbumsitemCollection.add(fewalbumsitems);
  }

  ngOnInit(): void {
  }

}
