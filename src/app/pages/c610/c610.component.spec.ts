import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C610Component } from './c610.component';

describe('C610Component', () => {
  let component: C610Component;
  let fixture: ComponentFixture<C610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
