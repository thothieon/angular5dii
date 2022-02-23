import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd220Component } from './cfd220.component';

describe('Cfd220Component', () => {
  let component: Cfd220Component;
  let fixture: ComponentFixture<Cfd220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
