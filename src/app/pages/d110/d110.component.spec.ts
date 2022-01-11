import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D110Component } from './d110.component';

describe('D110Component', () => {
  let component: D110Component;
  let fixture: ComponentFixture<D110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
