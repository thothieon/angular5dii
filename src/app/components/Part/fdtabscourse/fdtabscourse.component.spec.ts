import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdtabscourseComponent } from './fdtabscourse.component';

describe('FdtabscourseComponent', () => {
  let component: FdtabscourseComponent;
  let fixture: ComponentFixture<FdtabscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdtabscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdtabscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
