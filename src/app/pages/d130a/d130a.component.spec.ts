import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D130aComponent } from './d130a.component';

describe('D130aComponent', () => {
  let component: D130aComponent;
  let fixture: ComponentFixture<D130aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D130aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D130aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
