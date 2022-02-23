import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkidivingComponent } from './linkidiving.component';

describe('LinkidivingComponent', () => {
  let component: LinkidivingComponent;
  let fixture: ComponentFixture<LinkidivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkidivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkidivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
