import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthttpclineComponent } from './testhttpcline.component';

describe('TesthttpclineComponent', () => {
  let component: TesthttpclineComponent;
  let fixture: ComponentFixture<TesthttpclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesthttpclineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthttpclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
