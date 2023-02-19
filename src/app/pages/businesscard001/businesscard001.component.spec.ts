import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Businesscard001Component } from './businesscard001.component';

describe('Businesscard001Component', () => {
  let component: Businesscard001Component;
  let fixture: ComponentFixture<Businesscard001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Businesscard001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Businesscard001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
