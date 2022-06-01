import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/services/message-service.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  userForm: FormGroup;
  logged = false;
  jsonObject: any;

  constructor(
    public formulario: FormBuilder,
    public crudService: CrudService,
    private router: Router,
    private msgService: MessageServiceService
  ) {
    this.userForm = this.formulario.group({
      Email: [''],
      Password: ['']
    });
  }

  ngOnInit(): void {

  }

  logOut(): void {
    
    this.crudService.logout();
    this.router.navigateByUrl('/home');
  }

  //FUNCIÓN PARA ENVIAR LOS DATOS DEL LOGIN
  enviarDatos(): any {
    //LLAMADA AL SERVICIO CRUD CON LOS DATOS DEL LOGIN
    this.crudService.LoginUser(this.userForm.value).subscribe((data) => {
      //RECOGEMOS LOS DATOS DEL USUARIO ENCRIPTADOS QUE NOS DEVUELVE EL LOGIN Y LO CONVERTIMOS A JSON
      this.jsonObject = JSON.parse(data);
      //SI EL MENSAJE ES "success" HACEMOS LO SIGUENTE:
      if (this.jsonObject.message == "success") {
        //GUARDAMOS EL TOKEN EN LOCAL CON EL SERVICIO DE CRUD
        this.crudService.saveToken(this.jsonObject.token);
        //REDIRIGIMOS AL USUARIO A LA PAGINA PRINCIPAL
        this.router.navigateByUrl('');
        //LE DECIMOS A LA VARIABLE loggedIn QUE ES true
        this.crudService.loggedIn.next(true);
      } else {
        //SI NO ES CORRECTO EL LOGIN LE DECIMOS QUE LA VARIABLE loggedIn ES false
        this.crudService.loggedIn.next(false);
      }
    }, (error) => {
      console.log("error Function");
    });
  }
}



