import { Injectable } from '@angular/core';

import { MysqlService } from '../../service/mysql/mysql.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private mysql: MysqlService) { }
  
  searchCourseService() {
    console.log('searchCourseService');
    return this.mysql.getCourse();
  }
}
