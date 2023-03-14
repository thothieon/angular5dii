import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Activity { 
  id: string;
  location: string; 
  date: string; 
  state: string; 
}

@Component({
  selector: 'app-dz01',
  templateUrl: './dz01.component.html',
  styleUrls: ['./dz01.component.scss']
})
export class Dz01Component implements OnInit {
  
  private activitysCollection: AngularFirestoreCollection<Activity>;
  activitys: Observable<Activity[]>;
  constructor(private afs: AngularFirestore) {
    this.activitysCollection = afs.collection<Activity>('iDiving/activity/totalactivity');
    this.activitys = this.activitysCollection.valueChanges();
  }
  addItem(activitys: Activity) {
    this.activitysCollection.add(activitys);
  }

  ngOnInit(): void {
  }

}
