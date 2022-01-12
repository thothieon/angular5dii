import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C100Component } from './c100.component';

describe('C100Component', () => {
  let component: C100Component;
  let fixture: ComponentFixture<C100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
