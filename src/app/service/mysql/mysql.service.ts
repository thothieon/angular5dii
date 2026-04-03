import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from '../../interfaces/customer';
import { Translator } from '../../interfaces/translator';
import { Member } from '../../interfaces/member';
import { environment } from '../../../environments/environment';

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
    return this.http.get<any>(environment.apiUrl + '/ksis/test')//.pipe(retry(1));
  }

  // Search Customer 
  // Customer GET
  getCustomer(): Observable<Customer[]> {
    console.log('getCustomer');
    return this.http.get<Customer[]>(environment.apiUrl + '/ksis/customer')//.pipe(retry(1));
  }

  // Customer GET params
  getparamsCustomer(): Observable<Customer[]> {
    console.log('getparamsCustomer');
    return this.http.get<Customer[]>(environment.apiUrl + '/ksis/getparamscustomer')//.pipe(retry(1));
  }

  // Customer post
  postCustomer() {
    console.log('postCustomer');
    return this.http.post(environment.apiUrl + '/ksis/customer', this.createAuthorizationHeader);
  }

  // Translator ==================================================
  // Search Customer 
  // Customer GET
  getTranslator(): Observable<Translator[]> {
    console.log('getTranslator');
    return this.http.get<Translator[]>(environment.apiUrl + '/ksis/translator')//.pipe(retry(1));
  }

  // Member ==================================================

  // Search Member 
  // Member GET
  getMember(): Observable<Customer[]> {
    console.log('getMember');
    return this.http.get<Customer[]>(environment.apiUrl + '/idiving/Member')//.pipe(retry(1));
  }
  // Member Single GET
  getMemberSingle(strid: string): Observable<Customer[]> {
    console.log('getMemberSingle strid', strid );
    let searchparams = new HttpParams();
    searchparams = searchparams.append('id', strid);
    console.log('getMemberSingle', searchparams );
    return this.http.get<Customer[]>(environment.apiUrl + '/idiving/GetTestSingle',  { params: searchparams })//.pipe(retry(1));
  }

  // Course ==================================================

  // Search Course 
  // Course GET
  getCourse(): Observable<Customer[]> {
    console.log('getCourse');
    return this.http.get<Customer[]>(environment.apiUrl + '/idiving/Course')//.pipe(retry(1));
  }

}
