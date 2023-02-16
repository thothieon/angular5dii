import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentmethod1000Component } from './paymentmethod1000.component';

describe('Paymentmethod1000Component', () => {
  let component: Paymentmethod1000Component;
  let fixture: ComponentFixture<Paymentmethod1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paymentmethod1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paymentmethod1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
