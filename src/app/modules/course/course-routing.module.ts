import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseSearchComponent } from './pages/course-search/course-search.component';
import { CourseNewComponent } from './pages/course-new/course-new.component';
import { CourseOpenwaterdiverComponent } from './pages/course-openwaterdiver/course-openwaterdiver.component'

const routes: Routes = [
  { path: 'openwaterdiver', component: CourseOpenwaterdiverComponent },
  { path: 'new', component: CourseNewComponent },
  { path: '', component: CourseSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
