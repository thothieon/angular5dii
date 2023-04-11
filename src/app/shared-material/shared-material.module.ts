//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule  } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
  ],
  schemas: [  ]
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedMaterialModule { }

/*import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

export const TW_DATE_FORMAT = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatTreeModule,
    MatSlideToggleModule,
    DragDropModule,
    MatStepperModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatTreeModule,
    MatSlideToggleModule,
    DragDropModule,
    MatStepperModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { float: 'always' } },
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: TW_DATE_FORMAT }
  ]
})
export class SharedMaterialModule { }*/
