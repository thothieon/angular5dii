import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// For MDB Angular Free
import { MDBBootstrapModule, CarouselModule, CollapseModule, NavbarModule, WavesModule, DropdownModule, TableModule } from 'angular-bootstrap-md';
// MDB Angular Free
import { CheckboxModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeadComponent } from './head/head.component';
import { HeadmenuComponent } from './headmenu/headmenu.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FootComponent } from './foot/foot.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LinkComponent } from './link/link.component';
import { TeamComponent } from './team/team.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';
import { OwdtabscourseComponent } from './owdtabscourse/owdtabscourse.component';
import { FdtabscourseComponent } from './fdtabscourse/fdtabscourse.component';
import { Fdlv1introduceComponent } from './fdlv1introduce/fdlv1introduce.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { FdschoolinformationComponent } from './fdschoolinformation/fdschoolinformation.component';
import { HearsayComponent } from './hearsay/hearsay.component';
import { SmallactivityComponent } from './smallactivity/smallactivity.component';
import { DealerComponent } from './dealer/dealer.component';
import { FewalbumsComponent } from './fewalbums/fewalbums.component';



@NgModule({
  declarations: [
    HeadComponent,
    HeadmenuComponent,
    CarouselComponent,
    YoutubeComponent,
    FootComponent,
    LinkComponent,
    TeamComponent,
    PhotoalbumComponent,
    OwdtabscourseComponent,
    FdtabscourseComponent,
    Fdlv1introduceComponent,
    PaymentmethodComponent,
    FdschoolinformationComponent,
    HearsayComponent,
    SmallactivityComponent,
    DealerComponent,
    FewalbumsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    NgbModule
  ],
  exports: [
    HeadComponent,
    HeadmenuComponent,
    CarouselComponent,
    YoutubeComponent,
    FootComponent,
    LinkComponent,
    TeamComponent,
    PhotoalbumComponent,
    OwdtabscourseComponent,
    FdtabscourseComponent,
    Fdlv1introduceComponent,
    PaymentmethodComponent,
    FdschoolinformationComponent,
    HearsayComponent,
    SmallactivityComponent,
    DealerComponent,
    FewalbumsComponent
  ]
})
export class PartModule { }
