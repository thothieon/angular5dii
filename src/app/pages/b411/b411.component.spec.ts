import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B411Component } from './b411.component';

describe('B411Component', () => {
  let component: B411Component;
  let fixture: ComponentFixture<B411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
