import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd130Component } from './cfd130.component';

describe('Cfd130Component', () => {
  let component: Cfd130Component;
  let fixture: ComponentFixture<Cfd130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
