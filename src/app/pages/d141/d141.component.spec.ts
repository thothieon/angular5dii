import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D141Component } from './d141.component';

describe('D141Component', () => {
  let component: D141Component;
  let fixture: ComponentFixture<D141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
