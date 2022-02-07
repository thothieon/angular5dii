import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Import the timeline library
import { VerticalTimelineModule } from 'angular-vertical-timeline';

// For MDB Angular Free
import { MDBBootstrapModule, ButtonsModule, CardsModule, CarouselModule, CheckboxModule, CollapseModule, IconsModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { InputsModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedMaterialModule } from '../app/shared-material/shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PartModule } from './components/Part/part.module';
import { BeginComponent } from './pages/begin/begin.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';
import { C100Component } from './pages/c100/c100.component';
import { C120Component } from './pages/c120/c120.component';
import { C130Component } from './pages/c130/c130.component';
import { C210Component } from './pages/c210/c210.component';
import { C310Component } from './pages/c310/c310.component';
import { Cfd110Component } from './pages/cfd110/cfd110.component';
import { Cfd120Component } from './pages/cfd120/cfd120.component';
import { Cfd130Component } from './pages/cfd130/cfd130.component';
import { Cfd210Component } from './pages/cfd210/cfd210.component';
import { Cfd310Component } from './pages/cfd310/cfd310.component';
import { Cfdc210Component } from './pages/cfdc210/cfdc210.component';
import { Bz01Component } from './pages/bz01/bz01.component';
import { Dz01Component } from './pages/dz01/dz01.component';
import { Ec01Component } from './pages/ec01/ec01.component';
import { Cz01Component } from './pages/cz01/cz01.component';
import { B310Component } from './pages/b310/b310.component';
import { B320Component } from './pages/b320/b320.component';
import { D110Component } from './pages/d110/d110.component';
import { B230Component } from './pages/b230/b230.component';
import { Ccs001Component } from './pages/ccs001/ccs001.component';
import { Cfd220Component } from './pages/cfd220/cfd220.component';
import { D111Component } from './pages/d111/d111.component';
import { D112Component } from './pages/d112/d112.component';
import { D120Component } from './pages/d120/d120.component';
import { D130Component } from './pages/d130/d130.component';
import { D140Component } from './pages/d140/d140.component';


@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    LinkidivingComponent,
    C120Component,
    C210Component,
    Cfd110Component,
    Cfd120Component,
    Cfd130Component,
    Cfd310Component,
    Cfdc210Component,
    Bz01Component,
    Dz01Component,
    Ec01Component,
    Cz01Component,
    Cfd210Component,
    B310Component,
    B320Component,
    D110Component,
    C130Component,
    C100Component,
    B230Component,
    C310Component,
    Ccs001Component,
    Cfd220Component,
    D111Component,
    D112Component,
    D120Component,
    D130Component,
    D140Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    ButtonsModule, 
    CardsModule,
    CarouselModule.forRoot(),
    CheckboxModule, 
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(), 
    NavbarModule,
    TableModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    PartModule,
    VerticalTimelineModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    SharedMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
