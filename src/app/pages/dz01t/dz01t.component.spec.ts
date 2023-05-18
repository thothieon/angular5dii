import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz01tComponent } from './dz01t.component';

describe('Dz01tComponent', () => {
  let component: Dz01tComponent;
  let fixture: ComponentFixture<Dz01tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz01tComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dz01tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
