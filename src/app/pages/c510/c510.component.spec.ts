import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C510Component } from './c510.component';

describe('C510Component', () => {
  let component: C510Component;
  let fixture: ComponentFixture<C510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C510Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
