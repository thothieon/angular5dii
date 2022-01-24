import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd210Component } from './cfd210.component';

describe('Cfd210Component', () => {
  let component: Cfd210Component;
  let fixture: ComponentFixture<Cfd210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cfd210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
