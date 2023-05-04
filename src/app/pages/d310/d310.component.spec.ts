import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D310Component } from './d310.component';

describe('D310Component', () => {
  let component: D310Component;
  let fixture: ComponentFixture<D310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
