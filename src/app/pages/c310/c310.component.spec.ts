import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C310Component } from './c310.component';

describe('C310Component', () => {
  let component: C310Component;
  let fixture: ComponentFixture<C310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
