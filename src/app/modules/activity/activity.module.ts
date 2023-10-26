import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedMdbModule } from '../../shared/shared-mdb/shared-mdbl.module';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { PartModule } from '../../components/Part/part.module';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityMainComponent } from './pages/activity-main/activity-main.component';


@NgModule({
  declarations: [
    ActivityMainComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedMdbModule,
    SharedMaterialModule,
    PartModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
