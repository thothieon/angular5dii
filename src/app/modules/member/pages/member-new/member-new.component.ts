import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, GridApi, ColumnApi, GetRowIdFunc, GetRowIdParams, StatusPanelDef, RowNodeTransaction } from 'ag-grid-community';

import { Observable } from 'rxjs';

import { MemberService } from '../../../member/member.service';

import { Member } from '../../../../interfaces/member';


@Component({
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.scss']
})
export class MemberNewComponent implements OnInit {

  //loading: boolean = true;
  //myData: any[] = [];
  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    { field: 'joinYear', headerName:'年分' },
    { field: 'identity', headerName:'身分', editable: true },
    { field: 'latestLicense', headerName:'課程', editable: true },
    { field: 'idNumber', headerName:'身分證字號', editable: true },
    { field: 'chineseName', headerName:'姓名', editable: true },
    { field: 'englishName', headerName:'英文姓名', editable: true }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public rowData: any[] | null = getData();
  public rowSelection: 'single' | 'multiple' = 'multiple';

  constructor(
    private http: HttpClient,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    //this.loading = false;
    console.log('ngOnInit');
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  addItems(addIndex: number | undefined) {
    const newItems = [
      createNewRowData()
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
function createNewRowData() {
  const newData = {
    /*make: 'Toyota ' + newCount,
    model: 'Celica ' + newCount,
    price: 35000 + newCount * 17,
    zombies: 'Headless',
    style: 'Little',
    clothes: 'Airbag',*/
    joinYear: 'Toyota ' + newCount,
    identity: 'Celica ' + newCount,
    latestLicense: 35000 + newCount * 17,
    idNumber: 'Headless',
    chineseName: 'Little',
    englishName: 'Airbag',
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

