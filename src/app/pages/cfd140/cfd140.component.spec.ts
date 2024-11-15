import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfd140Component } from './cfd140.component';

describe('Cfd140Component', () => {
  let component: Cfd140Component;
  let fixture: ComponentFixture<Cfd140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cfd140Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cfd140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
