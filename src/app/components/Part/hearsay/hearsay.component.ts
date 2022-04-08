import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
  templateUrl: './hearsay.component.html',
  styleUrls: ['./hearsay.component.scss']
})
export class HearsayComponent implements OnInit {

  private hearsaysCollection: AngularFirestoreCollection<Hearsay>;
  hearsays: Observable<Hearsay[]>;
  constructor(private afs: AngularFirestore) {
    this.hearsaysCollection = afs.collection<Hearsay>('iDiving/begin/hearsay');
    this.hearsays = this.hearsaysCollection.valueChanges();
  }
  addItem(hearsays: Hearsay) {
    this.hearsaysCollection.add(hearsays);
  }


  ngOnInit(): void {
  }

}
