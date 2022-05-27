import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
API: string='http://localhost/Users/';
  constructor(private clientHttp:HttpClient) { }

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

  LoginUser(userData:User):Observable<any>{   

    return this.clientHttp.post(this.API+"?login=1",userData,{responseType:'text'});

  }
}