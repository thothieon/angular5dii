import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Firestore, collection, collectionData, CollectionReference, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

export interface Course { 
  id: string;
  name: string; 
  date: string; 
  state: string; 
}

@Component({
  selector: 'app-bz01',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './bz01.component.html',
  styleUrls: ['./bz01.component.scss']
})
export class Bz01Component implements OnInit {

  //https://stackoverflow.com/questions/57840288/why-bootstrap-table-do-not-use-styles-in-angular-7
  elements: any = [
    {id: 1, first: '2021 自由潛水（冬季班）Lv1 第二期', last: '10/05、10/06、10/09、10/10 + 10/16 ~ 17 墾丁結訓', handle: '已結束'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['id', 'first', 'last', 'handle'];

  firestore = inject(Firestore);

  private CourseRef = collection(this.firestore, 'iDiving/course/totalcourse') as CollectionReference<Course>;
  Course$: Observable<Course[]> = collectionData(this.CourseRef);

  addItem(Courseitems: Course) {
    return addDoc(this.CourseRef, Courseitems);
  }

  ngOnInit(): void {
  }

}
