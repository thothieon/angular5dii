import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D150Component } from './d150.component';

describe('D150Component', () => {
  let component: D150Component;
  let fixture: ComponentFixture<D150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
