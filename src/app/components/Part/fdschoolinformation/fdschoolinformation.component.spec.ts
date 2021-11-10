import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdschoolinformationComponent } from './fdschoolinformation.component';

describe('FdschoolinformationComponent', () => {
  let component: FdschoolinformationComponent;
  let fixture: ComponentFixture<FdschoolinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdschoolinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdschoolinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
