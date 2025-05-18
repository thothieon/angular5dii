import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Firestore, collection, collectionData, CollectionReference, addDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FootComponent } from '../../components/foot/foot.component';
import { HeadComponent } from '../../components/head/head.component';

export interface Activity {
  id: string;
  location: string;
  date: string;
  state: string;
}

@Component({
  selector: 'app-dz01',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent
  ],
  templateUrl: './dz01.component.html',
  styleUrls: ['./dz01.component.scss']
})
export class Dz01Component implements OnInit {

  firestore = inject(Firestore);

  private activityRef = collection(this.firestore, 'iDiving/activity/totalactivity') as CollectionReference<Activity>;
  activitys$: Observable<Activity[]> = collectionData(this.activityRef, { idField: 'id' });

  async addItem(activity: Activity) {
    await addDoc(this.activityRef, activity);
  }

  ngOnInit(): void {
  }

}
