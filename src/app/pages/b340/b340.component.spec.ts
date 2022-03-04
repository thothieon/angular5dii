import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B340Component } from './b340.component';

describe('B340Component', () => {
  let component: B340Component;
  let fixture: ComponentFixture<B340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
