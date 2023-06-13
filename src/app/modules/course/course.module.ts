import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { CourseRoutingModule } from './course-routing.module';

import { CourseSearchComponent } from './pages/course-search/course-search.component';
import { CourseNewComponent } from './pages/course-new/course-new.component';


@NgModule({
  declarations: [
    CourseSearchComponent,
    CourseNewComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    SharedMaterialModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
