import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { VCardFormatter, VCard } from "ngx-vcard";

export interface OutVCard {
  photo: string;
}

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
      photo: "https://drive.google.com/uc?export=view&id=1b8QUP5F-jJXZ9sKp0AnWKFuZdpzBDjY3",
      telephone: ["+886","0911098765"],
      workFax: ["0911098765"],
      workEmail: ["hsiehieon@gmail.com"],
      name: { firstNames: "hsieh", lastNames: "ihui", addtionalNames: "Auto" },
      gender: { text: "sewtest" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1b8QUP5F-jJXZ9sKp0AnWKFuZdpzBDjY3",
      telephone: ["0911098765"],
      workFax: ["0911098765"],
      workEmail: ["hsiehieon@gmail.com"],
      name: { firstNames: "hsieh", lastNames: "ihui", addtionalNames: "Auto" },
      gender: { text: "sewtest" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1b8QUP5F-jJXZ9sKp0AnWKFuZdpzBDjY3",
      telephone: ["+886","0911098765"],
      workFax: ["0911098765"],
      workEmail: ["hsiehieon@gmail.com"],
      name: { firstNames: "謝", lastNames: "伊暉", addtionalNames: "hsieh-ihui" },
      gender: { text: "2sewtest" }
    },
  ]

  srcid: string;
  nbId: number = 0;
  OutVCardPhoto: any;
  OutVCardFirstNames: string;
  OutVCardLastNames: string;
  OutVCardAddtionalNames: string;
  OutVCardTelephone: any;
  OutVCardWorkEmail: string[];
  OutVCardText: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router ) {
    this.srcid = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.srcid = params['id'];
      
      if (this.srcid == "296653")  //阿甘
      {
        this.nbId = 0;
      }
      else if (this.srcid == "322717") //上銘
      {
        this.nbId = 1;
      }
      else if (this.srcid == "333160") //伊暉
      {
        this.nbId = 2;
        this.OutVCardPhoto = this.vCardTest[this.nbId].photo;
        this.OutVCardFirstNames = this.vCardTest[this.nbId].name.firstNames;
        this.OutVCardLastNames = this.vCardTest[this.nbId].name.lastNames;
        this.OutVCardAddtionalNames = this.vCardTest[this.nbId].name.addtionalNames;
        this.OutVCardTelephone = this.vCardTest[this.nbId].telephone;
        this.OutVCardWorkEmail = this.vCardTest[this.nbId].workEmail;
        this.OutVCardText = this.vCardTest[this.nbId].gender.text;
      }
      else if (this.srcid == "676139") //東陸
      {
        this.nbId = 3;
      }
      else if (this.srcid == "333160") //伊暉
      {
        this.nbId = 4;
      }
      else if (this.srcid == "1633543") //佳伶
      {
        this.nbId = 5;
      }
      else if (this.srcid == "2519206") //聰穎
      {
        this.nbId = 6;
      }
      else if (this.srcid == "2190788") //家輝
      {
        this.nbId = 7;
      }
      else if (this.srcid == "2925167") //晨柔
      {
        this.nbId = 8;
      }
    });
    console.log(this.vCardString);
  }

  public vCard: VCard = {
    name:
      { firstNames: "John", lastNames: "Doe" },
  };

  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return this.vCardTest[this.nbId];
  };

  //public vCardString = VCardFormatter.getVCardAsString(this.vCard);
  public vCardString = VCardFormatter.getVCardAsString(this.vCardTest[this.nbId]);

}
