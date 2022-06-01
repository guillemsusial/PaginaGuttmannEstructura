import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  loggedIn = new BehaviorSubject<boolean>(false);

  //URL DE LA API EN XAMPP
  API: string = 'http://localhost/Users/';
  constructor(private clientHttp: HttpClient, private cookies: CookieService, private router: Router) {
    //CHEQUEAMOS EL TOKEN SIEMPRE QUE SE RECARGUE LA PÁGINA PARA SABER SI LA SESIÓN SIGUE ACTIVA
    this.checkToken();

  }

  //AÑADIR USER (SE USA EN REGISTER/SIGN-UP)
  AddUser(userData: User): Observable<any> {
    return this.clientHttp.post(this.API + "?addUser=1", userData, { responseType: 'text' });
  }

  //MOSTRAR TODOS LOS USERS EN BBDD (NO SE USA ACTUALMENTE)
  ShowAllUsers() {
    return this.clientHttp.get(this.API);
  }

  //ELIMINAR USER POR ID (NO SE USA ACTUALMENTE)
  DeleteUser(id: any): Observable<any> {
    return this.clientHttp.get(this.API + "?deleteUser=" + id);
  }

  //OBTENER USER POR ID (NO SE USA ACTUALMENTE)
  ObtainUserById(id: any): Observable<any> {
    return this.clientHttp.get(this.API + "?showUserById=" + id);
  }

  //MODIFICAR USER (SE USA EN EL CONTENEDOR USER PARA MODIFICAR LA INFO DEL USER LOGUEADO)
  ModifyUser(id: any, userData: any): Observable<any> {
    console.log(userData);
    return this.clientHttp.post(this.API + "?modifyUser=" + id, userData, { responseType: 'text' });
  }

  //LOGIN DE USER (SE USA EN HEADER EN LOGIN)
  LoginUser(userData: User): Observable<any | void> {
    return this.clientHttp.post(this.API + "?login=1", userData, { responseType: 'text' });
  }

  //VER SI EL TOKEN SIGUE SIENDO VÁLIDO COMPROBANDO EL TIEMPO DE CADUCIDAD
  checkToken(): void {
    if (localStorage.getItem('token')) {
      const userToken = localStorage.getItem('token') || "[]";
      const isExpired = helper.isTokenExpired(userToken);
      console.log('isExpired', isExpired);
      //isExpired ? this.logout()  this.router.navigateByUrl('/') : this.loggedIn.next(true);
    }
  }

  //SE USA EN EL MENÚ DE USUARIO EN EL HEADER HABIENDO INICIADO SESIÓN PARA HACER LOG OUT (ELIMINA EL TOKEN)
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);

  }

  //MÉTODO PARA SABER EL ESTADO DE LA VARIABLE QUE DICE SI EL USER ESTÁ LOGUEADO
  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  //LEE EL TOKEN ALMACENADO EN LOCAL (NO SE USA ACTUALMENTE)
  readToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  //GUARDA EL TOKEN EN ALMACENAMIENTO LOCAL DEL NAVEGADOR EN EL MOMENTO DE INICIAR SESIÓN
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  decodeToken(token: string): void {
    return helper.decodeToken(token);
  }
}