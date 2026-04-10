import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Course } from '../../interfaces/course';

export interface Activity { 
  id: string;
  location: string; 
  date: string; 
  state: string; 
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private coursesCollection: AngularFirestoreCollection;

  private activitysCollection: AngularFirestoreCollection<Activity>;
  activitys: Observable<Activity[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.coursesCollection = afs.collection<Course>('iDiving/course/totalcourse');
    this.activitysCollection = afs.collection<Activity>('iDiving/activity/totalactivity');
    this.activitys = this.activitysCollection.valueChanges();
  }

  async getCourse() {
    console.log("sdf");
  }

  addItemActivityadd(activitys: Activity) {
    return this.activitysCollection.add(activitys);
  }
}
