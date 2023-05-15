import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';

import { Observable } from 'rxjs';

import { CalendarEvent, CalendarView } from 'angular-calendar';

import { FirebaseService } from '../../service/firebase/firebase.service';

export interface Activity { 
  id: string;
  location: string; 
  date: string; 
  state: string; 
}

@Component({
  selector: 'app-dz01t',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dz01t.component.html',
  styleUrls: ['./dz01t.component.scss']
})
export class Dz01tComponent implements OnInit {

  //angular-calendar
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  activitys: Observable<Activity[]>;

  constructor( private firebaseService: FirebaseService) {
  }

  addItem(activitys: Activity) {
    console.log('dfsdf');
    //this.activity = this.firebaseService.addItemActivityadd(activitys);
  }

  ngOnInit(): void {
  }

}
