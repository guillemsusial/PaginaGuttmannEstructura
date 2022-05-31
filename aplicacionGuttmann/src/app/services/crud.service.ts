import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  loggedIn = new BehaviorSubject<boolean>(false);
  API: string='http://localhost/Users/';

  constructor(private clientHttp:HttpClient, private cookies: CookieService) {
    this.checkToken();
  }

  AddUser(userData:User):Observable<any>{
   
    return this.clientHttp.post(this.API+"?addUser=1",userData,{responseType:'text'});
  }

  ShowAllUsers(){
    return this.clientHttp.get(this.API);
  }

  DeleteUser(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?deleteUser="+id);
  }

  ObtainUserById(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?showUserById="+id);
  }

  ModifyUser(id:any,userData:any):Observable<any>{
    console.log(userData);
    return this.clientHttp.post(this.API+"?modifyUser="+id,userData,{responseType:'text'});
  }


  LoginUser(userData:User):Observable<any | void>{

    return this.clientHttp.post(this.API+"?login=1",userData,{responseType:'text'});


  }

  checkToken(): void {
    if(localStorage.getItem('token')){
    const userToken = localStorage.getItem('token') || "[]";
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired',isExpired);
    isExpired ? this.logout() : this.loggedIn.next(true);}
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  readToken(): void {}

  saveToken( token: string): void {
    localStorage.setItem('token', token);
  }
}