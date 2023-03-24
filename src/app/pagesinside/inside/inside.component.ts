import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu_01: boolean = false;
  showSubmenu_02: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor() {
  }

  ngOnInit() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
