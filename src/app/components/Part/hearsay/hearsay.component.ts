import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Hearsay {
  id: string;
  color: string;
  title: string;
  date: string;
  item: string;
}

@Component({
  standalone: true,
  selector: 'app-hearsay',
  imports: [CommonModule],
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
