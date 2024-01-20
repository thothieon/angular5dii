import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PartModule } from '../../components/Part/part.module';
import { CoursecomponentsModule } from './components/coursecomponents.module';

import { CourseRoutingModule } from './course-routing.module';

import { CourseSearchComponent } from './pages/course-search/course-search.component';
import { CourseNewComponent } from './pages/course-new/course-new.component';
import { CourseOpenwaterdiverComponent } from './pages/course-openwaterdiver/course-openwaterdiver.component';


@NgModule({
  declarations: [
    CourseSearchComponent,
    CourseNewComponent,
    CourseOpenwaterdiverComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    SharedMaterialModule,
    NgbModule,
    PartModule,
    CoursecomponentsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
