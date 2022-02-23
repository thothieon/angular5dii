import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B240Component } from './b240.component';

describe('B240Component', () => {
  let component: B240Component;
  let fixture: ComponentFixture<B240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
