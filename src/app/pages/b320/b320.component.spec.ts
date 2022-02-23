import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B320Component } from './b320.component';

describe('B320Component', () => {
  let component: B320Component;
  let fixture: ComponentFixture<B320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
