import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz06Component } from './dz06.component';

describe('Dz06Component', () => {
  let component: Dz06Component;
  let fixture: ComponentFixture<Dz06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dz06Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dz06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
