import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz01Component } from './dz01.component';

describe('Dz01Component', () => {
  let component: Dz01Component;
  let fixture: ComponentFixture<Dz01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dz01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
