import { Injectable } from '@angular/core';

//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

export interface Customer01 {
  customerNo: number;
  companyName: string;
  companyTel: string;
}

// Base url
const baseurl = 'http://114.32.175.189:8336';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor( private http: HttpClient ) {
  }

  // Http Headers
  //httpOptions = {
  //  headers: new HttpHeaders({
  //    'Content-Type': 'application/json',
  //  }),
  //};

  // GET
  //GetAdmin(id): Observable<Bug> {
  //  return this.http.get<>(this.baseurl + '/bugtracking/' + id)
      //.pipe(retry(1), catchError(this.errorHandl));
  //}

  // GET Customer
  //getCustomer(): Observable<Customer01[]> {
  //  console.log('getCustomer');
  //  return this.http.get<Customer01[]>(baseurl + '/ksis/hello')//.pipe(retry(1));
  //}

  // GET test
  gettest(): Observable<any> {
    console.log('gettest');
    return this.http.get<any>(baseurl + '/ksis/test')//.pipe(retry(1));
  }

  // GET Customer
  getCustomer(): Observable<Customer01[]> {
    console.log('getCustomer');
    return this.http.get<Customer01[]>(baseurl + '/ksis/customer')//.pipe(retry(1));
  }

  // GET Customer ok
  //public async getCustomer() {
  //  console.log('getCustomer');
  //  return await this.http.get<any>(baseurl + '/ksis/customer')//.pipe(retry(1));
  //}

  // GET Customer
  public async getCustomer01() {
    
    console.log('searchCustomer ' + baseurl + '/ksis/hello');
    let res = await this.http.get<any>(baseurl + '/ksis/customer').subscribe(data=>{
      console.log(data)
    });
    console.log('res ' + res);
    
  }
}
