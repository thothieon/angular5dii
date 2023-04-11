import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { VCardFormatter, VCard } from "ngx-vcard";

@Component({
  selector: 'app-businesscard001',
  templateUrl: './businesscard001.component.html',
  styleUrls: ['./businesscard001.component.scss']
})
export class Businesscard001Component implements OnInit {

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
    console.log(this.vCardString);
  }

  public vCard: VCard = {
    name: {
      firstNames: "John",
      lastNames: "Doe",
    },
  };

  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return {
      name: { firstNames: "John", lastNames: "Doe", addtionalNames: "Auto" },
    };
  };

  public vCardString = VCardFormatter.getVCardAsString(this.vCard);

}
