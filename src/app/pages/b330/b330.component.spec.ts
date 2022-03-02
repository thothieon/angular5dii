import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B330Component } from './b330.component';

describe('B330Component', () => {
  let component: B330Component;
  let fixture: ComponentFixture<B330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
