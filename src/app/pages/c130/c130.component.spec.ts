import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C130Component } from './c130.component';

describe('C130Component', () => {
  let component: C130Component;
  let fixture: ComponentFixture<C130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
