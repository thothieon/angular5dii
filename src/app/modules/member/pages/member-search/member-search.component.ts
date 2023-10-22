import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';

import { Observable } from 'rxjs';

import { MemberService } from '../../../member/member.service';

import { Member } from '../../../../interfaces/member';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent implements OnInit {

  //loading: boolean = true;
  //myData: any[] = [];

  constructor(
    private http: HttpClient,
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.loading = false;
    console.log('ngOnInit');
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'joinYear', headerName:'年分', width:80 },
    { field: 'identity', headerName:'身分', editable: true, width:100 },
    { field: 'latestLicense', headerName:'課程', editable: true, width:150 },
    { field: 'idNumber', headerName:'身分證字號', editable: true, width:130 },
    { field: 'chineseName', headerName:'姓名', width:110},
    { field: 'mid', headerName:'MID', cellRenderer: this.createHyperLink.bind(this), width:110},
    { field: 'englishName', headerName:'英文姓名', width:200}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<Member[]>;
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

  createHyperLink(params): any {
    if (!params.data) { return; }
    const spanElement = document.createElement('span');
    //spanElement.innerHTML = `<a href="${this.homeUrl}" > ${params.value} </a> `;
    spanElement.innerHTML = `<a href="/#/c120" > ${params.value} </a> `;
    console.log(spanElement.innerHTML);
    spanElement.addEventListener('click', ($event) => {
      $event.preventDefault();
      // The below code is used to navigate from one page to another page in angular. you can change it          // according to your requirement.
      //this.router.navigate([this.homeUrl]);
      this.router.navigate(['/', 'member']);
    });
    return spanElement;
  }

  get homeUrl(): string {
    //return 'home';
    return '/#/';
  }

}
