import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-openwaterdiver',
  templateUrl: './course-openwaterdiver.component.html',
  styleUrl: './course-openwaterdiver.component.scss'
})
export class CourseOpenwaterdiverComponent implements OnInit {

  active = 1;

  constructor(
  ) { }

  ngOnInit() {
    //this.loading = false;
    console.log('ngOnInit');
  }
}
