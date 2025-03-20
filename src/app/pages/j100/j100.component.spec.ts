import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J100Component } from './j100.component';

describe('J100Component', () => {
  let component: J100Component;
  let fixture: ComponentFixture<J100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [J100Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(J100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
