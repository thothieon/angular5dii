import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C101Component } from './c101.component';

describe('C101Component', () => {
  let component: C101Component;
  let fixture: ComponentFixture<C101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
