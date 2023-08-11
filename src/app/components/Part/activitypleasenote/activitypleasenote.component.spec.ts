import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPleaseNoteComponent } from './activitypleasenote.component';

describe('ActivityPleaseNoteComponent', () => {
  let component: ActivityPleaseNoteComponent;
  let fixture: ComponentFixture<ActivityPleaseNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPleaseNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityPleaseNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
