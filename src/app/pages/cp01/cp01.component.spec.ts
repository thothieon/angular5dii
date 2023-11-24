import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cp01Component } from './cp01.component';

describe('Cp01Component', () => {
  let component: Cp01Component;
  let fixture: ComponentFixture<Cp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cp01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
