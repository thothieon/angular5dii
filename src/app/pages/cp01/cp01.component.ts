import { Component } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';

export interface Dessert {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cp01',
  templateUrl: './cp01.component.html',
  styleUrls: ['./cp01.component.scss']
})
export class Cp01Component {
  desserts: Dessert[] = [
    {name: 'OWD', price: 4},
    {name: 'Ice cream sandwich', price: 4},
    {name: 'Eclair', price: 6},
    {name: 'Cupcake', price: 4},
    {name: 'Gingerbread', price: 4},
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
