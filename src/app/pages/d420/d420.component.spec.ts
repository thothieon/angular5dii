import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D420Component } from './d420.component';

describe('D420Component', () => {
  let component: D420Component;
  let fixture: ComponentFixture<D420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
