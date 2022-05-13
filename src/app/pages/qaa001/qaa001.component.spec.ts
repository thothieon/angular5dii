import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qaa001Component } from './qaa001.component';

describe('Qaa001Component', () => {
  let component: Qaa001Component;
  let fixture: ComponentFixture<Qaa001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qaa001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qaa001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
