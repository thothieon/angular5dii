import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FewalbumsComponent } from './fewalbums.component';

describe('FewalbumsComponent', () => {
  let component: FewalbumsComponent;
  let fixture: ComponentFixture<FewalbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FewalbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FewalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
