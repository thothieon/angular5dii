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
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedMaterialModule } from '../app/shared-material/shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PartModule } from './components/Part/part.module';
import { BeginComponent } from './pages/begin/begin.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';
import { C120Component } from './pages/c120/c120.component';
import { C210Component } from './pages/c210/c210.component';
import { Cfd110Component } from './pages/cfd110/cfd110.component';
import { Cfd120Component } from './pages/cfd120/cfd120.component';
import { Bz01Component } from './pages/bz01/bz01.component';
import { Dz01Component } from './pages/dz01/dz01.component';
import { Ec01Component } from './pages/ec01/ec01.component';
import { Cz01Component } from './pages/cz01/cz01.component';
import { Cfd210Component } from './pages/cfd210/cfd210.component';


@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    LinkidivingComponent,
    C120Component,
    C210Component,
    Cfd110Component,
    Cfd120Component,
    Bz01Component,
    Dz01Component,
    Ec01Component,
    Cz01Component,
    Cfd210Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    CollapseModule,
    NavbarModule,
    WavesModule,
    DropdownModule,
    TableModule,
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
