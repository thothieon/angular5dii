import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    SharedMaterialModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
