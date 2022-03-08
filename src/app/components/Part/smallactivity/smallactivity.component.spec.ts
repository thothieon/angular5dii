import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallactivityComponent } from './smallactivity.component';

describe('SmallactivityComponent', () => {
  let component: SmallactivityComponent;
  let fixture: ComponentFixture<SmallactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
