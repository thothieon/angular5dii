import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Equipmentcps { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

export interface Equipmentaes { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

export interface Equipmentles { 
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

  private equipmentcpsCollection: AngularFirestoreCollection<Equipmentcps>;
  equipmentcps: Observable<Equipmentcps[]>;
  private equipmentaeCollection: AngularFirestoreCollection<Equipmentaes>;
  equipmentaes: Observable<Equipmentaes[]>;
  private equipmentleCollection: AngularFirestoreCollection<Equipmentles>;
  equipmentles: Observable<Equipmentles[]>;

  constructor(private afs: AngularFirestore) {
    this.equipmentcpsCollection = afs.collection<Equipmentcps>('iDiving/equipment/totalequipmentcp');
    this.equipmentcps = this.equipmentcpsCollection.valueChanges();
    this.equipmentaeCollection = afs.collection<Equipmentaes>('iDiving/equipment/totalequipmentae');
    this.equipmentaes = this.equipmentaeCollection.valueChanges();
    this.equipmentleCollection = afs.collection<Equipmentles>('iDiving/equipment/totalequipmentle');
    this.equipmentles = this.equipmentleCollection.valueChanges();
  }
  addItem(equipmentcps: Equipmentcps, equipmentaes: Equipmentaes, equipmentles: Equipmentles) {
    this.equipmentcpsCollection.add(equipmentcps);
    this.equipmentaeCollection.add(equipmentaes);
    this.equipmentleCollection.add(equipmentles);
  }

  ngOnInit(): void {
  }

}
