import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { VCardFormatter, VCard } from "ngx-vcard";

@Component({
  selector: 'app-businesscard001',
  templateUrl: './businesscard001.component.html',
  styleUrls: ['./businesscard001.component.scss']
})
export class Businesscard001Component implements OnInit {

  //https://stackoverflow.com/questions/57840288/why-bootstrap-table-do-not-use-styles-in-angular-7
  elements: any = [
    { id: 1, firstNames: 'John', lastNames: 'Doe', email: 'ddsd@tswitter.com' },
    { id: 2, firstNames: 'Jacob', lastNames: 'Thornton', email: 'ss@fat.ss' },
    { id: 3, firstNames: 'Larry', lastNames: 'the Bird', email: 'ddd@twitter.com' },
  ];

  headElements = ['id', 'firstNames', 'lastNames', 'email'];

  public vCardTest: Array<VCard> = [
    {
      photo: "0911098765",
      workFax: ["0911098765"],
      workEmail: ["hsiehieon@gmail.com"],
      name: { firstNames: "hsieh", lastNames: "ihui", addtionalNames: "Auto" },
      gender: { text: "sewtest" }
    }, {}
  ]

  srcid: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router ) {
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
    name:
      { firstNames: "John", lastNames: "Doe" },
  };

  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return this.vCardTest[1];
  };

  //public vCardString = VCardFormatter.getVCardAsString(this.vCard);
  public vCardString = VCardFormatter.getVCardAsString(this.vCardTest[0]);

}
