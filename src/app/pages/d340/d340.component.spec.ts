import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D340Component } from './d340.component';

describe('D340Component', () => {
  let component: D340Component;
  let fixture: ComponentFixture<D340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
