import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-ccs001',
  templateUrl: './ccs001.component.html',
  styleUrls: ['./ccs001.component.scss']
})
export class Ccs001Component implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe( params => this.onSearch(params['id']) );
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  onSearch(id:string) {
    this.router.navigate(['/ccs001', id])
  }
}
