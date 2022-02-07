import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D130Component } from './d130.component';

describe('D130Component', () => {
  let component: D130Component;
  let fixture: ComponentFixture<D130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
