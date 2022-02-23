import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D140Component } from './d140.component';

describe('D140Component', () => {
  let component: D140Component;
  let fixture: ComponentFixture<D140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
