import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D111Component } from './d111.component';

describe('D111Component', () => {
  let component: D111Component;
  let fixture: ComponentFixture<D111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
