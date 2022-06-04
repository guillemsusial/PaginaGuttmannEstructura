import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public crud:CrudService, public router:Router) { }

  canActivate(): boolean {
    if (!this.crud.isAuthenticated()) {
      this.router.navigateByUrl('/home');
      window.alert("Inicia sesión por favor");
      return false;
    }
    return true;
  }
}
