import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInforComponent } from './member-infor.component';

describe('MemberInforComponent', () => {
  let component: MemberInforComponent;
  let fixture: ComponentFixture<MemberInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberInforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
