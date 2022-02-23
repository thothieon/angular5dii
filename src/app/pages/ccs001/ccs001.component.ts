import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ccs001',
  templateUrl: './ccs001.component.html',
  styleUrls: ['./ccs001.component.scss']
})
export class Ccs001Component implements OnInit {

  srcid: string;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.srcid = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.srcid = params['id'];
      // In a real app: dispatch action to load the details here.
    });
  }

}
