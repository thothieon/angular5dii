import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C210Component } from './c210.component';

describe('C210Component', () => {
  let component: C210Component;
  let fixture: ComponentFixture<C210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
