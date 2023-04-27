import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { MysqlService } from '../../service/mysql/mysql.service';

//import { Customer } from '../../interfaces/customer';

export interface Customer01 {
  customerNo: number;
  companyName: string;
  companyTel: string;
}

// Base url
const baseurl = 'http://114.32.175.189:8336';

@Component({
  selector: 'app-testhttpcline',
  templateUrl: './testhttpcline.component.html',
  styleUrls: ['./testhttpcline.component.scss']
})
export class TesthttpclineComponent implements OnInit {

  myData: any[] = [];
  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'MyClientCert': '',        // This is empty
      'MyToken': '',              // This is empty
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    }),
  };
  // text/html; charset=utf-8 application/json Access-Control-Allow-Origin
  public httpOptionss = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    })
  };

  constructor( 
    private mySQL: MysqlService,
    private http: HttpClient ) { }

  ngOnInit(): void {
  }

  public async searchCustomer() {
    (await this.mySQL.getCustomer())
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

  public async searchCustomer_old() {
    
    console.log('searchCustomer ' + baseurl + '/ksis/hello');
    let res = await this.http.get<any>(baseurl + '/ksis/customer').subscribe(data=>{
      console.log(data)
    });
    console.log('res ' + res);
    
  }

}
