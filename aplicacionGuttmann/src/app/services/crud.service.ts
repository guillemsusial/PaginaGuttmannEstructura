import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Sesion } from './sesion';
import { serieLuces } from './serieLuces';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  loggedIn = new BehaviorSubject<boolean>(false);

  //URL DE LA API EN XAMPP
  API: string='http://localhost/API/users.php/';
  APISesion: string='http://localhost/API/sesion.php/';
  APILuces: string='http://localhost/API/serie_luces.php/';
  constructor(private clientHttp: HttpClient, private cookies: CookieService, private router: Router) {
    //CHEQUEAMOS EL TOKEN SIEMPRE QUE SE RECARGUE LA PÁGINA PARA SABER SI LA SESIÓN SIGUE ACTIVA
    this.checkToken();
  }

//--------------------------------APARTADO SESION DE JUEGO--------------------------------

  //AÑADIR SESION (SE USA EN EL LOGIN)
  AddSesion(sesionData: Sesion): Observable<any> {
   console.log(sesionData);
    return this.clientHttp.post('http://localhost/API/sesion.php/?addSesion=1',sesionData, { responseType: 'text' });
  }

  

  AddSerieLuces(dataLuces: serieLuces): Observable<any> {
    return this.clientHttp.post(this.APILuces + "?addRegistroLuces=1", dataLuces, { responseType: 'text' });
  }

//--------------------------------FIN APARTADO SESION DE JUEGO--------------------------------

//--------------------------------------APARTADO USER--------------------------------------

  //AÑADIR USER (SE USA EN REGISTER/SIGN-UP)
  AddUser(userData: User): Observable<any> {
    console.log(userData);
    return this.clientHttp.post(this.API + "?addUser=1", userData, { responseType: 'text' });
  }

  //Recuperar la id de un usuario por su email que ha de ser unico
  GetIdByEmail(Email: string): Observable<any> {
    return this.clientHttp.get(this.API + "?getIdByEmail=" + Email , { responseType: 'text'});
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
      if (isExpired == true) {
        this.logout();
      } else {
        this.loggedIn.next(true);
      }
    }
  }

  isAuthenticated(): any  {
    if (localStorage.getItem('token')) {
      const userToken = localStorage.getItem('token') || "[]";
      return !helper.isTokenExpired(userToken);
    }
  }
  //SE USA EN EL MENÚ DE USUARIO EN EL HEADER CON LA SESIÓN INICIADA PARA HACER LOG OUT (ELIMINA EL TOKEN)
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.checkToken();
  }

  //MÉTODO PARA SABER EL ESTADO DE LA VARIABLE QUE DICE SI EL USER ESTÁ LOGUEADO
  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  //LEE EL TOKEN ALMACENADO EN LOCAL
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

//----------------------------------FIN APARTADO USER--------------------------------------
}