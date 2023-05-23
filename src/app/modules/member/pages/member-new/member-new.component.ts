import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, GridApi, ColumnApi, GetRowIdFunc, GetRowIdParams, StatusPanelDef } from 'ag-grid-community';

import { Observable } from 'rxjs';

import { MemberService } from '../../../member/member.service';

import { Customer } from '../../../../interfaces/customer';


interface ICar {
  make: string;
  model: string;
  price: number;
}

@Component({
  selector: 'app-member-new',
  templateUrl: './member-new.component.html',
  styleUrls: ['./member-new.component.scss']
})
export class MemberNewComponent implements OnInit {

  //loading: boolean = true;
  //myData: any[] = [];

  constructor(
    private http: HttpClient,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    //this.loading = false;
    console.log('ngOnInit');
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'joinYear', headerName:'年分' },
    { field: 'identity', headerName:'身分', editable: true },
    { field: 'latestLicense', headerName:'課程', editable: true },
    { field: 'idNumber', headerName:'身分證字號', editable: true },
    { field: 'chineseName', headerName:'姓名'},
    { field: 'englishName', headerName:'英文姓名'}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<Customer[]>;
  //myAGData: Customer[] = [];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.memberService.searchMemberService()
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
