import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import swal from'sweetalert2';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  titular:string='';
  constructor(public crud:CrudService, public router:Router) { }

  canActivate(): boolean {
    if (!this.crud.isAuthenticated()) {
      swal.fire('Inicia Sesion Porfavor ', this.titular, 'error');
      this.router.navigateByUrl('/home');

     
     

      return false;
    }
    return true;
  }
}
