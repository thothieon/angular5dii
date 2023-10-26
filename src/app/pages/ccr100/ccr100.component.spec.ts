import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccr100Component } from './ccr100.component';

describe('Ccr100Component', () => {
  let component: Ccr100Component;
  let fixture: ComponentFixture<Ccr100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ccr100Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ccr100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
