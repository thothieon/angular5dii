import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B400Component } from './b400.component';

describe('B400Component', () => {
  let component: B400Component;
  let fixture: ComponentFixture<B400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
