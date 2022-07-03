import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz04Component } from './dz04.component';

describe('Dz04Component', () => {
  let component: Dz04Component;
  let fixture: ComponentFixture<Dz04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dz04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
