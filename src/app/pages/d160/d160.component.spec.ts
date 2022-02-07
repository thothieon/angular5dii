import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D160Component } from './d160.component';

describe('D160Component', () => {
  let component: D160Component;
  let fixture: ComponentFixture<D160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
