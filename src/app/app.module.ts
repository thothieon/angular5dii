import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// For MDB Angular Free
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';

import { HeadComponent } from './components/Part/head/head.component';
import { HeadmenuComponent } from './components/Part/headmenu/headmenu.component';
import { CarouselComponent } from './components/Part/carousel/carousel.component';
import { YoutubeComponent } from './components/Part/youtube/youtube.component';
import { FootComponent } from './components/Part/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeadmenuComponent,
    CarouselComponent,
    YoutubeComponent,
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
    DropdownModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
