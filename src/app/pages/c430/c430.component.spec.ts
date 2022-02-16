import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C430Component } from './c430.component';

describe('C430Component', () => {
  let component: C430Component;
  let fixture: ComponentFixture<C430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
