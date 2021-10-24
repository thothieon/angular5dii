import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For MDB Angular Free
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

import { PartModule } from './components/Part/part.module';
import { BeginComponent } from './pages/begin/begin.component';
import { LinkidivingComponent } from './pages/linkidiving/linkidiving.component';
import { C120Component } from './pages/c120/c120.component';


@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    LinkidivingComponent,
    C120Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    CollapseModule,
    NavbarModule,
    WavesModule,
    DropdownModule,
    TableModule,
    PartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
