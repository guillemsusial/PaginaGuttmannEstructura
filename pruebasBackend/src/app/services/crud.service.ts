import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
API: string='http://localhost/Users/'
  constructor(private clientHttp:HttpClient) { }
  AddUser(userData:User):Observable<any>{
    return this.clientHttp.post(this.API+"?addUser=1",userData,{responseType:'text'});
  }
}