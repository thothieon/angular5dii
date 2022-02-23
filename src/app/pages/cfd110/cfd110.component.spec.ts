import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd110Component } from './cfd110.component';

describe('Cfd110Component', () => {
  let component: Cfd110Component;
  let fixture: ComponentFixture<Cfd110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
