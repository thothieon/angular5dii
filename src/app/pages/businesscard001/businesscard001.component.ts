import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { VCardFormatter, VCard } from "ngx-vcard";

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

export interface OutVCard {
  lineIDURL: string;
}

@Component({
  selector: 'app-businesscard001',
  templateUrl: './businesscard001.component.html',
  styleUrls: ['./businesscard001.component.scss']
})
export class Businesscard001Component implements OnInit {

  // We can have Canvas/Img/Url as elementType
  elementType = NgxQrcodeElementTypes.URL;
  
  // We can have High/Low/Medium/Quartile
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  // Need to specify the valid website address
  value = 'https://www.geeksforgeeks.com/';

  //https://stackoverflow.com/questions/57840288/why-bootstrap-table-do-not-use-styles-in-angular-7
  elements: any = [
    { id: 1, firstNames: 'John', lastNames: 'Doe', email: 'ddsd@tswitter.com' },
    { id: 2, firstNames: 'Jacob', lastNames: 'Thornton', email: 'ss@fat.ss' },
    { id: 3, firstNames: 'Larry', lastNames: 'the Bird', email: 'ddd@twitter.com' },
  ];

  headElements = ['id', 'firstNames', 'lastNames', 'email'];

  public vCardOutTest: Array<OutVCard> = [
    {lineIDURL : ""},
    {lineIDURL : "https://line.me/ti/p/M1kWJuRtYN"},
    {lineIDURL : ""},
    {lineIDURL : ""},
    {lineIDURL : "https://line.me/ti/p/9kEtU-6H4d"},
    {lineIDURL : "https://line.me/ti/p/UXaWjPO2tS"},
    {lineIDURL : ""},
    {lineIDURL : ""},
    {lineIDURL : ""},
    {lineIDURL : ""}
  ]

  public vCardTest: Array<VCard> = [
    {
      photo: "",
      telephone: ["+886","0922803201"],
      workFax: [""],
      workEmail: [""],
      name: { firstNames: "", lastNames: "", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1r324AKqyusFlb1otInIvqNn9q1teX-ye",
      telephone: ["+886","0922803201"],
      workFax: ["0909098786"],
      workEmail: ["kankp726@gmail.com"],
      name: { firstNames: "甘", lastNames: "昆平", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1Hpb6UHM-KF1_fTVDFch-k5-uE0g-N9WB",
      telephone: ["+886","0970051587"],
      workFax: ["0909098786"],
      workEmail: ["misery918@gmail.com"],
      name: { firstNames: "陳", lastNames: "彥儒", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1QSwmFJjCdmfTQIdBhtBBPHvdGAYl6nto",
      telephone: ["+886","0920313067"],
      workFax: ["0909098786"],
      workEmail: ["littleorca@gmail.com"],
      name: { firstNames: "黃", lastNames: "上銘", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=17OTWb6S5vCYDolsVELgccgPTzfUjef10",
      telephone: ["+886","0911098765"],
      workFax: ["0911098765"],
      workEmail: ["hsiehieon@gmail.com"],
      name: { firstNames: "謝", lastNames: "伊暉", addtionalNames: "hsieh-ihui" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1sI0KY0jIHbQLPJQO3_HHBce7BKJi-FJm",
      telephone: ["+886","0919533440"],
      workFax: ["0911098765"],
      workEmail: ["ytldylan@yahoo.com.tw"],
      name: { firstNames: "楊", lastNames: "東陸", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1J5hAICJeu0jwfSQ1g1IAhjQjCBp-q8qA",
      telephone: ["+886","0926600498"],
      workFax: ["0911098765"],
      workEmail: ["jennyhu1027@gmail.com"],
      name: { firstNames: "胡", lastNames: "佳伶", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1UUw3FxpT-VLMrW8BEopEfhR4rJvvNCDP",
      telephone: ["+886","0966638962"],
      workFax: ["0911098765"],
      workEmail: ["chongying328@gmail.com"],
      name: { firstNames: "潘", lastNames: "聰穎", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1yBA9Yg_DQXX5fZJvzaU8PjSaZUXx8l_t",
      telephone: ["+886","0989506696"],
      workFax: ["0911098765"],
      workEmail: ["b5200345@gmail.com"],
      name: { firstNames: "林", lastNames: "家輝", addtionalNames: "" },
      gender: { text: "統編 25122613" }
    },
    {
      photo: "https://drive.google.com/uc?export=view&id=1J0I4Ie1ZUb5JI-UIuOJbG3i_SggHTqBs",
      telephone: ["+886","0919703112"],
      workFax: ["0911098765"],
      workEmail: ["kuroboo723@gmail.com"],
      name: { firstNames: "徐", lastNames: "晨柔", addtionalNames: "" },
      gender: { text: "統編 25122613" }
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
  OutVCardOutLineID: string;
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
      
      if (this.srcid == "000000")  //公司
      {
        this.nbId = 0;
      }
      else if (this.srcid == "296653")  //阿甘
      {
        this.nbId = 1;
      }
      else if (this.srcid == "340953") //彥儒
      {
        this.nbId = 2;
      }
      else if (this.srcid == "322717") //上銘
      {
        this.nbId = 2;
      }
      else if (this.srcid == "333160") //伊暉
      {
        this.nbId = 4;
      }
      else if (this.srcid == "676139") //東陸
      {
        this.nbId = 5;
      }
      else if (this.srcid == "1633543") //佳伶
      {
        this.nbId = 6;
      }
      else if (this.srcid == "2519206") //聰穎
      {
        this.nbId = 7;
      }
      else if (this.srcid == "2190788") //家輝
      {
        this.nbId = 8;
      }
      else if (this.srcid == "2925167") //晨柔
      {
        this.nbId = 9;
      }
      this.OutVCardPhoto = this.vCardTest[this.nbId].photo;
      this.OutVCardFirstNames = this.vCardTest[this.nbId].name.firstNames;
      this.OutVCardLastNames = this.vCardTest[this.nbId].name.lastNames;
      this.OutVCardAddtionalNames = this.vCardTest[this.nbId].name.addtionalNames;
      this.OutVCardTelephone = this.vCardTest[this.nbId].telephone;
      this.OutVCardWorkEmail = this.vCardTest[this.nbId].workEmail;
      this.OutVCardText = this.vCardTest[this.nbId].gender.text;
      this.OutVCardOutLineID = this.vCardOutTest[this.nbId].lineIDURL;
      this.value = this.vCardOutTest[this.nbId].lineIDURL;
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
