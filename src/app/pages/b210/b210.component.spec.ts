import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B210Component } from './b210.component';

describe('B210Component', () => {
  let component: B210Component;
  let fixture: ComponentFixture<B210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
