import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About001Component } from './about001.component';

describe('About001Component', () => {
  let component: About001Component;
  let fixture: ComponentFixture<About001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(About001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
