import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B310Component } from './b310.component';

describe('B310Component', () => {
  let component: B311Component;
  let fixture: ComponentFixture<B311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
