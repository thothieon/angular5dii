import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coc100Component } from './coc100.component';

describe('Coc100Component', () => {
  let component: Coc100Component;
  let fixture: ComponentFixture<Coc100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coc100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coc100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
