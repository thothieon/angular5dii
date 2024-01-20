import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationmethodComponent } from '../components/cancellationmethod/cancellationmethod.component'

@NgModule({
  declarations: [
    CancellationmethodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CancellationmethodComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoursecomponentsModule { }
