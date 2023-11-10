import { Injectable } from '@angular/core';

import { MysqlService } from '../../service/mysql/mysql.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor( private mysql: MysqlService) { }
  
  searchMemberService() {
    console.log('searchMemberService');
    return this.mysql.getMember();
  }

  serviceInferMember(strId) {
    console.log('serviceInferMember', strId);
    return this.mysql.getMemberSingle(strId);
  }
}
