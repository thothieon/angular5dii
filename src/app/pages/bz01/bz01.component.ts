import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Course { 
  id: string;
  name: string; 
  date: string; 
  state: string; 
}

@Component({
  selector: 'app-bz01',
  templateUrl: './bz01.component.html',
  styleUrls: ['./bz01.component.scss']
})
export class Bz01Component implements OnInit {

  elements: any = [
    {id: 1, first: '2021 自由潛水（冬季班）Lv1 第二期', last: '10/05、10/06、10/09、10/10 + 10/16 ~ 17 墾丁結訓', handle: '已結束'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  private coursesCollection: AngularFirestoreCollection<Course>;
  courses: Observable<Course[]>;
  constructor(private afs: AngularFirestore) {
    this.coursesCollection = afs.collection<Course>('iDiving/course/totalcourse');
    this.courses = this.coursesCollection.valueChanges();
  }
  addItem(course: Course) {
    this.coursesCollection.add(course);
  }

  ngOnInit(): void {
  }

}
