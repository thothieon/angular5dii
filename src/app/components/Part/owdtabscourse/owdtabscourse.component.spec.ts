import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwdtabscourseComponent } from './owdtabscourse.component';

describe('OwdtabscourseComponent', () => {
  let component: OwdtabscourseComponent;
  let fixture: ComponentFixture<OwdtabscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwdtabscourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwdtabscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
