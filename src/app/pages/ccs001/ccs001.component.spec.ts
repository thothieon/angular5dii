import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccs001Component } from './ccs001.component';

describe('Ccs001Component', () => {
  let component: Ccs001Component;
  let fixture: ComponentFixture<Ccs001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ccs001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccs001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
