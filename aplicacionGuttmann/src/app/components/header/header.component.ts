import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/services/message-service.service';

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
  }

  enviarDatos(): any {
    this.crudService.LoginUser(this.userForm.value).subscribe((data) => {
      this.jsonObject = JSON.parse(data);
      if (this.jsonObject.message == "success") {
        this.crudService.saveToken(this.jsonObject.token);
        this.router.navigateByUrl('');
        this.crudService.loggedIn.next(true);
      } else {
        this.crudService.loggedIn.next(false);
      }
    }, (error) => {
      console.log("error Function");
    });
  }
}



