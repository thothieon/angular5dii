import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz05Component } from './dz05.component';

describe('Dz05Component', () => {
  let component: Dz05Component;
  let fixture: ComponentFixture<Dz05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dz05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
