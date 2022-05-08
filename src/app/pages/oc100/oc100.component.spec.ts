import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oc100Component } from './oc100.component';

describe('Oc100Component', () => {
  let component: Oc100Component;
  let fixture: ComponentFixture<Oc100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oc100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oc100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
