import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { VCardFormatter, VCard } from "ngx-vcard";

import { vCard } from "../../interfaces/vcard";


// sample code typescript interface json
// https://www.npmjs.com/package/ngx-vcard
// https://www.bracketsacademy.com/angular-ionic-qr-code-vcard/
// https://ithelp.ithome.com.tw/m/articles/10270427
// https://medium.com/@yuhsienyeh/typescript-%E7%B0%A1%E4%BB%8B-a83363df0922
// https://www.ozkary.com/2019/08/typescript-interface-json-type-inference.html
// https://www.delftstack.com/zh-tw/howto/typescript/typescript-initializing-typescript-object-from-a-json-object/
// https://old-oomusou.goodjack.tw/angular/api/

@Component({
  selector: 'app-businesscard001',
  templateUrl: './businesscard001.component.html',
  styleUrls: ['./businesscard001.component.scss']
})
export class Businesscard001Component implements OnInit {

  srcid: string;
  private sub: any;

  public myvCard: vCard = { name: { ssiMid:123, firstNames:"謝", lastNames:"伊暉", addtionalNames: "AutoNames"}};
  
  //ssiMid:1233, dataCode:[firstNames:"謝", lastNames:"伊暉"],
  //ssiMid:1233, dataCode:[firstNames:"謝", lastNames:"伊暉"] ;

  public vCard: VCard = {
    name: {
      firstNames: "謝",
      lastNames: "伊暉"
    },
  };
  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    //return {
    //  name: { firstNames: "謝", lastNames: "伊暉", addtionalNames: "AutoNames" },
    //};
    return this.myvCard;
  };
  //public vCardString = VCardFormatter.getVCardAsString(this.vCard);
  public vCardString = VCardFormatter.getVCardAsString(this.myvCard);

  constructor(
    private route: ActivatedRoute, 
    private router: Router
    ) {
    this.srcid = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.srcid = params['id'];
      // In a real app: dispatch action to load the details here.
    });

    console.log(this.vCardString);
  }


}
