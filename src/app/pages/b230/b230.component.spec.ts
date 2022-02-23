import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B230Component } from './b230.component';

describe('B230Component', () => {
  let component: B230Component;
  let fixture: ComponentFixture<B230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
