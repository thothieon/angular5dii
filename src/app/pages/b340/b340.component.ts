import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Equipmentbcs { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

export interface Equipmentrms { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}


@Component({
  selector: 'app-b340',
  templateUrl: './b340.component.html',
  styleUrls: ['./b340.component.scss']
})
export class B340Component implements OnInit {

  active = 1;

  // 新增屬性及內容
  stands = [
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能將配重袋鬆脫，配重袋裝填只需插入口袋即可”卡住”。'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1DymrwxurBFpIVrwBNDaRfyvlaE909Yax',
      name: 'Aqualung PRO HD BCD', 
      price: '17,500',
      title: 'Pro HD配備整合式配重系統，簡單一拉就能\n將配重袋鬆脫，配重袋裝填只需插入口袋\n即可”卡住”。'
    },
  ]

  private equipmentbcsCollection: AngularFirestoreCollection<Equipmentbcs>;
  equipmentbcs: Observable<Equipmentbcs[]>;
  private equipmentrmsCollection: AngularFirestoreCollection<Equipmentrms>;
  equipmentrms: Observable<Equipmentrms[]>;

  constructor(private afs: AngularFirestore) {
    this.equipmentbcsCollection = afs.collection<Equipmentbcs>('iDiving/equipment/totalequipmentbc');
    this.equipmentbcs = this.equipmentbcsCollection.valueChanges();
    this.equipmentrmsCollection = afs.collection<Equipmentrms>('iDiving/equipment/totalequipmentrm');
    this.equipmentrms = this.equipmentrmsCollection.valueChanges();
  }
  addItem(equipmentbcs: Equipmentbcs, equipmentrms: Equipmentrms) {
    this.equipmentbcsCollection.add(equipmentbcs);
    this.equipmentrmsCollection.add(equipmentrms);
  }

  ngOnInit(): void {
  }

}
