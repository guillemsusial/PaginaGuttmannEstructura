import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Sesion } from '../../services/sesion';
import { LoaderService } from 'src/app/loader/loader.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  userForm: FormGroup;
  loginFailed: boolean;
  userid: any;
  jsonObject: any;
  emailID: any;
 
  constructor(
    public formulario: FormBuilder,
    public crudService: CrudService,
    private router: Router,
    private msgService: MessageServiceService,
    public  loaderService:LoaderService

  ) {
    this.userForm = this.formulario.group({
      Email: [''],
      Password: [''],
      Identificador: ['']
    });
    this.loginFailed = false;
  }

  ngOnInit(): void {
  }

  logOut(confirm: boolean): void {
    if (confirm == true) {
      this.crudService.logout();
      window.location.reload();
      this.loginFailed = false;
    } else {
      window.location.reload();
    }
  }

  is_touch_enabled() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }

  get getLoginFailed(): boolean {
    return this.loginFailed;
  }

  //FUNCIÓN PARA ENVIAR LOS DATOS DEL LOGIN
  enviarDatosLogin(): any {

    //LLAMADA AL SERVICIO CRUD CON LOS DATOS DEL LOGIN
    this.crudService.LoginUser(this.userForm.value).subscribe((data) => {

      //RECOGEMOS LOS DATOS DEL USUARIO ENCRIPTADOS QUE NOS DEVUELVE EL LOGIN Y LO CONVERTIMOS A JSON
      this.jsonObject = JSON.parse(data);

      //SI EL MENSAJE ES "success" HACEMOS LO SIGUENTE:
      if (this.jsonObject.message == "success") {
        //Añadimos la sesion del usuario
        this.crudService.GetIdByEmail(this.userForm.value["Email"]).subscribe((data) => {
          this.emailID = JSON.parse(data);

          //Añadimos nueva sesión a la base de datos
          let sesion = new Sesion();

            sesion.idUsuario = this.emailID.id + "";

            if (this.is_touch_enabled()) {
              sesion.dispositivo ="tactil";
            } else {
              sesion.dispositivo ="teclado/raton";
            }
            sesion.fecha = new Date().toJSON().slice(0, 19).replace('T', ' ');
            sesion.version = "1.0";

            sesion.identificador = this.userForm.value["Identificador"];

            sesion=JSON.parse(JSON.stringify(sesion));

          this.crudService.AddSesion(sesion).subscribe((data) =>{
            //console.log(data);
          });

        });

        //GUARDAMOS EL TOKEN EN LOCAL CON EL SERVICIO DE CRUD
        this.crudService.saveToken(this.jsonObject.token);


        //VARIABLE loggedIn = true
        this.crudService.loggedIn.next(true);
        //window.location.reload();

      } else {
        //SI NO ES CORRECTO EL LOGIN LE DECIMOS QUE LA VARIABLE loggedIn ES false
        this.crudService.loggedIn.next(false);
        this.loginFailed = true;
        this.userForm.reset();
      }
    }, (error) => {
      console.log("error Function");
    });
  }
}



