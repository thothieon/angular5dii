import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BZ01Component } from './bz01.component';

describe('BZ01Component', () => {
  let component: BZ01Component;
  let fixture: ComponentFixture<BZ01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BZ01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BZ01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
