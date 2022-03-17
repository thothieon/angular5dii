import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B311Component } from './b311.component';

describe('B311Component', () => {
  let component: B311Component;
  let fixture: ComponentFixture<B311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
