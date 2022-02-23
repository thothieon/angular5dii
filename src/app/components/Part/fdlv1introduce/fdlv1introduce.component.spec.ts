import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fdlv1introduceComponent } from './fdlv1introduce.component';

describe('Fdlv1introduceComponent', () => {
  let component: Fdlv1introduceComponent;
  let fixture: ComponentFixture<Fdlv1introduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fdlv1introduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fdlv1introduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
