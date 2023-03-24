import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideflexComponent } from './insideflex.component';

describe('InsideflexComponent', () => {
  let component: InsideflexComponent;
  let fixture: ComponentFixture<InsideflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
