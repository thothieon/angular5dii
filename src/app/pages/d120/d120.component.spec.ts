import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D120Component } from './d120.component';

describe('D120Component', () => {
  let component: D120Component;
  let fixture: ComponentFixture<D120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
