import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd310Component } from './cfd310.component';

describe('Cfd310Component', () => {
  let component: Cfd310Component;
  let fixture: ComponentFixture<Cfd310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
