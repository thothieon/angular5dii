import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

// For MDB Angular Free
import { MDBBootstrapModule, ButtonsModule, CardsModule, CarouselModule, CheckboxModule, CollapseModule, IconsModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { InputsModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

import { MemberRoutingModule } from './member-routing.module';

import { MemberSearchComponent } from './pages/member-search/member-search.component';
import { MemberNewComponent } from './pages/member-new/member-new.component';


@NgModule({
  declarations: [
    MemberSearchComponent,
    MemberNewComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    SharedMaterialModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    CardsModule,
    CarouselModule.forRoot(),
    CheckboxModule, 
    CollapseModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(), 
    NavbarModule,
    WavesModule,
    DropdownModule.forRoot(),
    TableModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
