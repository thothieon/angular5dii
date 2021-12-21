import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cz01Component } from './cz01.component';

describe('Cz01Component', () => {
  let component: Cz01Component;
  let fixture: ComponentFixture<Cz01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cz01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cz01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
