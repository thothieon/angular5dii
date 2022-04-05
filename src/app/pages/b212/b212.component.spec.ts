import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B212Component } from './b212.component';

describe('B212Component', () => {
  let component: B212Component;
  let fixture: ComponentFixture<B212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
