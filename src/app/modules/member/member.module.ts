import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { MemberRoutingModule } from './member-routing.module';

import { MemberSearchComponent } from './pages/member-search/member-search.component';


@NgModule({
  declarations: [
    MemberSearchComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    SharedMaterialModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
