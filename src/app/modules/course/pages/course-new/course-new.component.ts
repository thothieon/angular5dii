import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, GridApi, ColumnApi, GetRowIdFunc, GetRowIdParams, StatusPanelDef, RowNodeTransaction } from 'ag-grid-community';

import { Observable } from 'rxjs';

import { CourseService } from '../../../course/course.service';

import { Food } from './../../../../interfaces/course';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.scss']
})
export class CourseNewComponent implements OnInit {

  foods: Food[] = [
    {value: 'OWD', viewValue: 'OWD'},
    {value: 'AA', viewValue: 'AA'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  //loading: boolean = true;
  //myData: any[] = [];
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    { field: 'courseNumber', headerName:'課程編號' },
    { field: 'latestLicense', headerName:'課程', editable: true },
    { field: 'chineseName', headerName:'姓名', editable: true },
    { field: 'idNumber', headerName:'身分證字號', editable: true },
    { field: 'mobilePhone', headerName:'電話', editable: true }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public rowData: any[] | null = getData();
  public rowSelection: 'single' | 'multiple' = 'multiple';

  constructor( ) { }

  ngOnInit() {
    //this.loading = false;
    console.log('ngOnInit');
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  addCourseNumber() {
    console.log('sssss');
  }

  addItems(addIndex: number | undefined) {

    var isWorkProjects = (<HTMLInputElement>document.getElementById("isWorkProjects")).value;
    console.log('isWorkProjects : ' + isWorkProjects);
    //var isWorkProjectsele = (document.getElementById("organization") as HTMLSelectElement).value;
    //console.log('isWorkProjectsele : ' + isWorkProjectsele);
    const isCourseNumberSelect = (<HTMLSelectElement>document.getElementById('isCourseNumber')).value;
    console.log('isCourseNumberSelect : ' + isCourseNumberSelect);
    //select.addEventListener('change', () => (console.log(select.value)));
    //console.log(select.options[select.selectedIndex].value)

    const newItems = [
      createNewRowData(isWorkProjects, isCourseNumberSelect)
    ];
    const res = this.gridApi.applyTransaction({
      add: newItems,
      addIndex: addIndex,
    })!;
    printResult(res);
  }

  updateItems() {
    // update the first 2 items
    const itemsToUpdate: any[] = [];
    this.gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
      // only do first 2
      if (index >= 2) {
        return;
      }
      const data = rowNode.data;
      data.price = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    const res = this.gridApi.applyTransaction({ update: itemsToUpdate })!;
    printResult(res);
  }

  onRemoveSelected() {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.applyTransaction({ remove: selectedData })!;
    printResult(res);
  }

}


let newCount = 1;
let date:Date = new Date();

function createNumberGeneration() {

}

function addz(num) {
  return num < 10 ? '0' + num : num;
}

function createNewRowData(data01, data02) {
  let strYear = date.getFullYear().toString();
  let strMonth = addz(date.getMonth() + 1); //(date.getMonth() + 1).toString();
  let strDay = addz(date.getDay() * 2);
  console.log("date = " + date);  
  console.log("Year = " + strYear);  
  console.log("Year = " + strYear.slice(2));  
  console.log("Month = " + strMonth);
  console.log(strDay);

  const newData = {
    /*make: 'Toyota ' + newCount,
    model: 'Celica ' + newCount,
    price: 35000 + newCount * 17,
    zombies: 'Headless',
    style: 'Little',
    clothes: 'Airbag',*/
    courseNumber: data01, //'OWD' + strYear.slice(2) + strMonth + strDay + 'N' + newCount,
    latestLicense: data02,
    chineseName: '',
    idNumber: '',
    mobilePhone: '',
  };
  newCount++;
  return newData;
}

function printResult(res: RowNodeTransaction) {
  console.log('---------------------------------------');
  if (res.add) {
    res.add.forEach(function (rowNode) {
      console.log('Added Row Node', rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach(function (rowNode) {
      console.log('Removed Row Node', rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(function (rowNode) {
      console.log('Updated Row Node', rowNode);
    });
  }
}

export function getData(): any[] {
  return [
    /*{
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      zombies: 'Elly',
      style: 'Smooth',
      clothes: 'Jeans',
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
      zombies: 'Shane',
      style: 'Filthy',
      clothes: 'Shorts',
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      price: 72000,
      zombies: 'Jack',
      style: 'Dirty',
      clothes: 'Padded',
    },*/
  ];
}
