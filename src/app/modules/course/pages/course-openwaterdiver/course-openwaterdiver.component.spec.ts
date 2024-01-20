import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOpenwaterdiverComponent } from './course-openwaterdiver.component';

describe('CourseOpenwaterdiverComponent', () => {
  let component: CourseOpenwaterdiverComponent;
  let fixture: ComponentFixture<CourseOpenwaterdiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseOpenwaterdiverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseOpenwaterdiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
