import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B211Component } from './b211.component';

describe('B211Component', () => {
  let component: B211Component;
  let fixture: ComponentFixture<B211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
