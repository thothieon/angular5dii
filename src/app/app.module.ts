import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For MDB Angular Free
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, TableModule  } from 'angular-bootstrap-md';

import { HeadComponent } from './components/Part/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    CollapseModule,
    NavbarModule,
    WavesModule,
    TableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
