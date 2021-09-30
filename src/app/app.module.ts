import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For MDB Angular Free
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, TableModule  } from 'angular-bootstrap-md';

import { HeadComponent } from './components/Part/head/head.component';
import { FootComponent } from './components/Part/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent
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
