import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D410Component } from './d410.component';

describe('D410Component', () => {
  let component: D410Component;
  let fixture: ComponentFixture<D410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
