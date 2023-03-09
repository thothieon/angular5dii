import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Health001Component } from './health001.component';

describe('Health001Component', () => {
  let component: Health001Component;
  let fixture: ComponentFixture<Health001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Health001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Health001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
