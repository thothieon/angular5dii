import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bz01Component } from './bz01.component';

describe('Bz01Component', () => {
  let component: Bz01Component;
  let fixture: ComponentFixture<Bz01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bz01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bz01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
