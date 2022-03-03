import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Equipmentmss { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

export interface Equipmenthbs { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

export interface Equipmentls { 
  id: string;
  img: string; 
  label: string; 
  name: string; 
  price: string; 
  title: string; 
}

@Component({
  selector: 'app-b310',
  templateUrl: './b310.component.html',
  styleUrls: ['./b310.component.scss']
})
export class B310Component implements OnInit {

  active = 1;

  // 新增屬性及內容 stands
  /*eequipments = [
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1_aUKzW9vgOZqqRt3VphwSOa1ilXZekgs',
      name: 'TUSA', 
      price: '70',
      title: 'M212 雙面鏡 （水肺）\n特色：Freedom任意貼裙邊更加貼合臉型\n專利3D立體面鏡帶舒適不易滑落\n雙面鏡設計可更換近視鏡片'
    }
  ]*/

  private equipmentmssCollection: AngularFirestoreCollection<Equipmentmss>;
  equipmentmss: Observable<Equipmentmss[]>;
  private equipmenthbsCollection: AngularFirestoreCollection<Equipmenthbs>;
  equipmenthbs: Observable<Equipmenthbs[]>;
  private equipmentlsCollection: AngularFirestoreCollection<Equipmentls>;
  equipmentls: Observable<Equipmentls[]>;

  constructor(private afs: AngularFirestore) {
    this.equipmentmssCollection = afs.collection<Equipmentmss>('iDiving/equipment/totalequipmentms');
    this.equipmentmss = this.equipmentmssCollection.valueChanges();
    this.equipmenthbsCollection = afs.collection<Equipmenthbs>('iDiving/equipment/totalequipmenthb');
    this.equipmenthbs = this.equipmenthbsCollection.valueChanges();
    this.equipmentlsCollection = afs.collection<Equipmentls>('iDiving/equipment/totalequipmentl');
    this.equipmentls = this.equipmentlsCollection.valueChanges();
  }
  addItem(equipmentmss: Equipmentmss, equipmenthbs: Equipmenthbs, equipmentls: Equipmentls) {
    this.equipmentmssCollection.add(equipmentmss);
    this.equipmenthbsCollection.add(equipmenthbs);
    this.equipmentlsCollection.add(equipmentls);
  }

  ngOnInit(): void {
  }

}
