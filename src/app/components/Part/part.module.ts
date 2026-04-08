import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { LinkComponent } from './link/link.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { HearsayComponent } from './hearsay/hearsay.component';
import { DealerComponent } from './dealer/dealer.component';
import { FewalbumsComponent } from './fewalbums/fewalbums.component';



@NgModule({
  imports: [
    CommonModule,
    HeadComponent,
    FootComponent,
    LinkComponent,
    PaymentmethodComponent,
    HearsayComponent,
    DealerComponent,
    FewalbumsComponent
  ],
  exports: [
    HeadComponent,
    FootComponent,
    LinkComponent,
    PaymentmethodComponent,
    HearsayComponent,
    DealerComponent,
    FewalbumsComponent
  ]
})
export class PartModule { }
