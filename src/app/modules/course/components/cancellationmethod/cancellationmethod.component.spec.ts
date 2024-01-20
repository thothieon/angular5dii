import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationmethodComponent } from './cancellationmethod.component';

describe('CancellationmethodComponent', () => {
  let component: CancellationmethodComponent;
  let fixture: ComponentFixture<CancellationmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellationmethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancellationmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
