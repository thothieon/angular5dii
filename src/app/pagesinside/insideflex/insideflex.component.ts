import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insideflex',
  templateUrl: './insideflex.component.html',
  styleUrls: ['./insideflex.component.scss']
})
export class InsideflexComponent implements OnInit {

  loading: boolean;

  constructor() { }

  async ngOnInit() {
    this.loading = true;
  }

}
