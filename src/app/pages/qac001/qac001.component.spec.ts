import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qac001Component } from './qac001.component';

describe('Qac001Component', () => {
  let component: Qac001Component;
  let fixture: ComponentFixture<Qac001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Qac001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Qac001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
