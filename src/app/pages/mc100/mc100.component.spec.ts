import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mc100Component } from './mc100.component';

describe('Mc100Component', () => {
  let component: Mc100Component;
  let fixture: ComponentFixture<Mc100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mc100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mc100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
