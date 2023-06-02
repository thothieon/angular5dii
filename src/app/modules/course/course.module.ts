import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

import { CourseRoutingModule } from './course-routing.module';

import { CourseSearchComponent } from './pages/course-search/course-search.component';


@NgModule({
  declarations: [
    CourseSearchComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    SharedMaterialModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
