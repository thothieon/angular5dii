import { Component } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';

export interface Dessert {
  type: string;
  name: string;
  price: string;
}

@Component({
  selector: 'app-cp01',
  templateUrl: './cp01.component.html',
  styleUrls: ['./cp01.component.scss']
})
export class Cp01Component {
  desserts: Dessert[] = [
    {type:'15', name: '', price: ''},
    {type:'20', name: '自由潛水', price: ''},
    {type:'15', name: 'TRY Freediving 前港', price: '2500'},
    {type:'15', name: 'TRY Freediving 南港', price: '3000'},
    {type:'15', name: 'Basic Freediver', price: '7500'},
    {type:'15', name: 'Pool Freediver', price: '10000'},
    {type:'15', name: 'Freediver', price: '14000'},
    {type:'15', name: 'Advanced Freediver', price: '15000'},
    {type:'15', name: 'Performance Freediver', price: '17000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: '美人魚課程', price: ''},
    {type:'15', name: 'TRY MERMAID 前港', price: '2500'},
    {type:'15', name: 'TRY MERMAID 南港', price: '3000'},
    {type:'15', name: 'SSI美人魚課程', price: '12000'},
    {type:'15', name: 'SSI海洋美人魚課程', price: '15000'},
    {type:'15', name: '親子人魚課程(一大一小)', price: '10000'},
    {type:'15', name: '親子人魚課程(一大兩小)', price: '18000'},
    {type:'15', name: '親子人魚課程(兩大兩小)', price: '16000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: 'FD初階專長', price: ''},
    {type:'15', name: 'TT(訓練技巧)', price: '8000'},
    {type:'15', name: 'MONOFIN(單蹼)', price: '9000'},
    {type:'15', name: 'FIM(攀繩)', price: '6000'},
    {type:'15', name: 'RR(正確反應員)', price: '5000'},
    {type:'15', name: '', price: ''},
    {type:'15', name: 'FD進階專長', price: ''},
    {type:'15', name: 'VWT(可變配重下潛)', price: '7000'},
    {type:'15', name: '', price: ''},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺潛水', price: ''},
    {type:'15', name: '一對一水肺泳池體驗', price: '1500'},
    {type:'15', name: '一對一水肺五米泳池體驗', price: '2500'},
    {type:'15', name: '一對一水肺海洋體驗', price: '3000'},
    {type:'15', name: 'SSI Open Water 初級課程含贈品', price: '19800'},
    {type:'15', name: 'SSI Advanced Adventurer 進階探險課程', price: '11000'},
    {type:'15', name: '水肺複習(前港泳池)', price: '2500'},
    {type:'15', name: '水肺複習(南港泳池)', price: '3500'},
    {type:'15', name: '水肺複習(海洋平靜水域 5米)', price: '5000'},
    {type:'15', name: '水肺複習(複習課程)', price: '6000'},
    {type:'15', name: '水肺複習(複習課程 + 執照申請)', price: '7000'},
    {type:'15', name: '進階探險潛水員 AA', price: '11000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺基礎專長', price: ''},
    {type:'15', name: 'DD深潛', price: '7000'},
    {type:'15', name: 'NL夜潛', price: '6000'},
    {type:'15', name: 'EAN高氧', price: '5000'},
    {type:'15', name: 'PB完美浮力', price: '6000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺選修專長', price: ''},
    {type:'15', name: 'NV導航', price: '6000'},
    {type:'15', name: 'BD船潛', price: '7000/出團+4500'},
    {type:'15', name: 'PV水下攝影', price: '7000'},
    //{type:'15', name: '搜索與尋回', price: ''},
    {type:'15', name: '', price: ''},
    {type:'15', name: '水肺安全專長', price: ''},
    {type:'15', name: 'SSI RR正確反應員', price: '5000'},
    {type:'15', name: 'SSI RR正確反應員(Renew)', price: '2000'},
    {type:'15', name: 'SR壓力與救援', price: '13000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺環保專長', price: ''},
    {type:'15', name: 'ECO Diver生態潛水員(環境資訊協會)', price: '11000'},
    {type:'15', name: '', price: ''},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺高階專長', price: ''},
    {type:'15', name: 'DECO減壓潛水', price: '15000'},
    {type:'15', name: 'DSM休閒側掛潛水', price: '12000'},
    {type:'15', name: 'DRY乾式防寒衣', price: '12000/自備9000/購買6000'},
    {type:'15', name: '', price: ''},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺延伸領域潛水', price: ''},
    {type:'15', name: 'ER延伸領域潛水', price: '35000'},
    //{type:'15', name: 'Scooter/DPV', price: ''},
    //{type:'15', name: 'SCR', price: ''},
    //{type:'15', name: 'CCR ER', price: ''},
    //{type:'15', name: 'GBL混氣員', price: ''},
    {type:'15', name: '', price: ''},
    {type:'20', name: '自潛教練培訓', price: ''},
    {type:'15', name: '自由潛水教練', price: '57000'},
    {type:'15', name: '進階自由潛水教練', price: '22000'},
    {type:'15', name: '卓越自由潛水教練', price: '30000'},
    {type:'15', name: '', price: ''},
    {type:'20', name: '水肺教練培訓', price: ''},
    {type:'15', name: 'DG', price: '35000'},
    {type:'15', name: 'DM', price: '10000'},
    {type:'15', name: '潛水長套裝(DG+SOD)', price: '45000'},
    {type:'15', name: 'AI', price: '48000'},
    {type:'15', name: '助理教練套裝(DG+SOD+AI)', price: '89000'},
    {type:'15', name: '教練套裝(DG+SOD+AI+ITC)', price: '120000'},
    {type:'15', name: 'OWI開放水域潛水教練', price: '42000'},
    //{type:'15', name: '水肺專長教練', price: ''},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'price':
          return compare(a.price, b.price, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
