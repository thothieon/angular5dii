//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// For MDB Angular Free
import { MDBBootstrapModule, ButtonsModule, CardsModule, CarouselModule, CheckboxModule, CollapseModule, IconsModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { InputsModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
    TableModule
  ],
  exports: [
    MDBBootstrapModule,
    ButtonsModule,
    CardsModule,
    CarouselModule,
    CheckboxModule,
    CollapseModule,
    IconsModule,
    InputsModule,
    NavbarModule,
    WavesModule,
    DropdownModule,
    TableModule
  ],
  schemas: [  ]
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedMdbModule { }
