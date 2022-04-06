import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D121Component } from './d121.component';

describe('D121Component', () => {
  let component: D121Component;
  let fixture: ComponentFixture<D121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
