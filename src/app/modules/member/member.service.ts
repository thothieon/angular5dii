import { Injectable } from '@angular/core';

import { MysqlService } from '../../service/mysql/mysql.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor( private mysql: MysqlService) { }
  
  searchCustomerService() {
    console.log('searchCustomerService');
    return this.mysql.getMember();
  }
}
