import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz02Component } from './dz02.component';

describe('Dz02Component', () => {
  let component: Dz02Component;
  let fixture: ComponentFixture<Dz02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dz02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
