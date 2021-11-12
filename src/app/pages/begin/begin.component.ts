import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Course { 
  id: string;
  first: string; 
  last: string; 
  handle: string; 
}

export interface Activity { 
  id: string;
  first: string; 
  last: string; 
  handle: string; 
}

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent implements OnInit {

  private coursesCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;
  private activitysCollection: AngularFirestoreCollection<Activity>;
  activitys: Observable<Activity[]>;
  constructor(private afs: AngularFirestore) {
    this.coursesCollection = afs.collection<Course>('iDiving/course/keycourse');
    this.courses = this.coursesCollection.valueChanges();
    this.activitysCollection = afs.collection<Activity>('iDiving/activity/keyactivity');
    this.activitys = this.activitysCollection.valueChanges();
  }
  addItem(course: Course, activitys: Activity) {
    this.coursesCollection.add(course);
    this.activitysCollection.add(activitys);
  }

  ngOnInit(): void {
  }

}
