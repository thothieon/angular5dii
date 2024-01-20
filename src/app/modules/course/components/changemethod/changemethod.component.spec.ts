import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemethodComponent } from './changemethod.component';

describe('ChangemethodComponent', () => {
  let component: ChangemethodComponent;
  let fixture: ComponentFixture<ChangemethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangemethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
