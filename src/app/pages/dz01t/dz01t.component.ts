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

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

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
  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'Has custom class',
      color: colors.yellow,
      cssClass: 'my-custom-class',
    },
    {
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'A non draggable event',
      color: colors.blue,
      start: new Date()
    }
  ];

  activitys: Observable<Activity[]>;

  constructor( private firebaseService: FirebaseService) {
  }

  addItem(activitys: Activity) {
    console.log('asas');
    //this.activity = this.firebaseService.addItemActivityadd(activitys);
  }

  ngOnInit(): void {
    console.log('view', this.view);
    console.log('viewDate', this.viewDate);
  }

}
