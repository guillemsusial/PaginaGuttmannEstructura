import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {

    this.userForm = this.formulario.group({
      Name: [''],
      LastName: [''],
      Email: [''],
      Password: [''],
      anioNacimiento: [''],
      Estudios: [''],
      Sexo: ['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    console.log(this.userForm.value.Password);
    console.log(this.userForm.value);
    

    this.crudService.AddUser(this.userForm.value).subscribe();
    //this.router.navigateByUrl('');
    
  }

}
