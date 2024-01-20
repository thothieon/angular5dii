import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationmethodComponent } from '../components/cancellationmethod/cancellationmethod.component'
import { ChangemethodComponent } from '../components/changemethod/changemethod.component'

@NgModule({
  declarations: [
    CancellationmethodComponent,
    ChangemethodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CancellationmethodComponent,
    ChangemethodComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoursecomponentsModule { }
