import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { MemberService } from '../../../member/member.service';

@Component({
  selector: 'app-member-infor',
  templateUrl: './member-infor.component.html',
  styleUrls: ['./member-infor.component.scss']
})
export class MemberInforComponent implements OnInit {

  public id: string;
  myData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
  ) { }

  async ngOnInit() {
    //this.loading = false;
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ngOnInit id ' + this.id);
    this.memberService.serviceInferMember(this.id.substr(2));

    (await this.memberService.serviceInferMember(this.id))
      .pipe(
        finalize(() => {
          console.log('finalize');
        })
      )
      .subscribe((myData: any) => {
        console.log('subscribe' + JSON.stringify(myData));
        this.myData = JSON.parse(JSON.stringify(myData));
      });
  }
}
