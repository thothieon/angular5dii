import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd120Component } from './cfd120.component';

describe('Cfd120Component', () => {
  let component: Cfd120Component;
  let fixture: ComponentFixture<Cfd120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
