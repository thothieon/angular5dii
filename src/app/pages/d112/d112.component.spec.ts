import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D112Component } from './d112.component';

describe('D112Component', () => {
  let component: D112Component;
  let fixture: ComponentFixture<D112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
