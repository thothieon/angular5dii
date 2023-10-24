import { Injectable } from '@angular/core';

//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Customer } from '../../interfaces/customer';
import { Translator } from '../../interfaces/translator';
import { Member } from '../../interfaces/member';

// Base url
const baseurl = 'http://114.32.175.189:8336';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {

  constructor(
    private http: HttpClient
    ) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  // Http Headers
  //httpOptions = {
  //  _headers: new HttpHeaders({
  //    'Content-Type': 'application/json',
  //  }),
  //};

  // Customer ==================================================
  // Test Customer 
  // test GET
  gettest(): Observable<any> {
    console.log('gettest');
    return this.http.get<any>(baseurl + '/ksis/test')//.pipe(retry(1));
  }

  // Search Customer 
  // Customer GET
  getCustomer(): Observable<Customer[]> {
    console.log('getCustomer');
    return this.http.get<Customer[]>(baseurl + '/ksis/customer')//.pipe(retry(1));
  }

  // Customer GET params
  getparamsCustomer(): Observable<Customer[]> {
    console.log('getparamsCustomer');
    return this.http.get<Customer[]>(baseurl + '/ksis/getparamscustomer')//.pipe(retry(1));
  }

  // Customer post
  postCustomer() {
    console.log('postCustomer');
    return this.http.post(baseurl + '/ksis/customer', this.createAuthorizationHeader);
  }

  // Translator ==================================================
  // Search Customer 
  // Customer GET
  getTranslator(): Observable<Translator[]> {
    console.log('getTranslator');
    return this.http.get<Translator[]>(baseurl + '/ksis/translator')//.pipe(retry(1));
  }

  // Member ==================================================

  // Search Member 
  // Member GET
  getMember(): Observable<Customer[]> {
    console.log('getMember');
    return this.http.get<Customer[]>(baseurl + '/idiving/Member')//.pipe(retry(1));
  }

  // Member Single GET
  getMemberSingle(strid: string): Observable<Customer[]> {
    console.log('getMemberSingle strid', strid );
    let searchparams = new HttpParams();
    searchparams = searchparams.append('id', strid);
    console.log('getMemberSingle', searchparams );
    return this.http.get<Customer[]>(baseurl + '/idiving/GetTestSingle',  { params: searchparams })//.pipe(retry(1));
  }

}
