import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Fewalbums { 
  id: string;
  img: string; 
  hrf: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-b240',
  templateUrl: './b240.component.html',
  styleUrls: ['./b240.component.scss']
})
export class B240Component implements OnInit {

  stands = [
    { img:'../../../assets/Image/FUNDIVE/L1120.png',hrf:'https://www.facebook.com/janicewa2002',name:'墾丁', title:'2021 / 11 / 20 ~ 21' },
    { img:'../../../assets/Image/FUNDIVE/L1105.png',hrf:'https://www.facebook.com/janicewa2002',name:'墾丁', title:'2021 / 11 / 20 ~ 21' },
    { img:'../../../assets/Image/FUNDIVE/L1102.png',hrf:'https://www.facebook.com/janicewa2002',name:'墾丁', title:'2021 / 11 / 20 ~ 21' },
    { img:'../../../assets/Image/FUNDIVE/L1030.png',hrf:'https://www.facebook.com/janicewa2002',name:'墾丁', title:'2021 / 11 / 20 ~ 21' }
  ]

  private fewalbumsitemCollection: AngularFirestoreCollection<Fewalbums>;
  fewalbumsitems: Observable<Fewalbums[]>;
  constructor(private afs: AngularFirestore) {
    this.fewalbumsitemCollection = afs.collection<Fewalbums>('iDiving/activity/fewalbums');
    this.fewalbumsitems = this.fewalbumsitemCollection.valueChanges();
  }
  addItem(fewalbumsitems: Fewalbums) {
    this.fewalbumsitemCollection.add(fewalbumsitems);
  }

  ngOnInit(): void {
  }

}
