import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    
      this.formRegister=this.formulario.group({
      Name:[''],
      LastName:[''],
      Email:[''],
      Password:[''],
      anioNacimiento:[''],
      Estudios:[''],
      Sexo:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("Me has presionado");
    console.log(this.formRegister.value);
    
    this.crudService.AddUser(this.formRegister.value).subscribe();
    this.router.navigateByUrl('/form');
  }
}
