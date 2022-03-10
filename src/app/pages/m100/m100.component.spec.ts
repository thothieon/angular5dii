import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M100Component } from './m100.component';

describe('M100Component', () => {
  let component: M100Component;
  let fixture: ComponentFixture<M100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
