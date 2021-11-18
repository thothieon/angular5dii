import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec01Component } from './ec01.component';

describe('Ec01Component', () => {
  let component: Ec01Component;
  let fixture: ComponentFixture<Ec01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ec01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
