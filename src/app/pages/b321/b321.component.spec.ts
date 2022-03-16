import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B321Component } from './b321.component';

describe('B321Component', () => {
  let component: B321Component;
  let fixture: ComponentFixture<B321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
