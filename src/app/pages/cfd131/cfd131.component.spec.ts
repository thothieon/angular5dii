import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd131Component } from './cfd131.component';

describe('Cfd131Component', () => {
  let component: Cfd131Component;
  let fixture: ComponentFixture<Cfd131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cfd131Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfd131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
