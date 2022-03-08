import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearsayComponent } from './hearsay.component';

describe('HearsayComponent', () => {
  let component: HearsayComponent;
  let fixture: ComponentFixture<HearsayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearsayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearsayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
