import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D230Component } from './d230.component';

describe('D230Component', () => {
  let component: D230Component;
  let fixture: ComponentFixture<D230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
