import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userForm: FormGroup;
  ID: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private router:Router
  ) {
    this.ID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.ID);

    this.crudService.ObtainUserById(this.ID).subscribe(
      result => {
        console.log(result);
        this.userForm.setValue({
          Name:result[0]['Name'],
          LastName:result[0]['LastName'],
          Email:result[0]['Email'],
          anioNacimiento:result[0]['anioNacimiento'],
          Estudios:result[0]['Estudios'],
          Sexo:result[0]['Sexo']
        });
      }
    );

    this.userForm = this.formulario.group(
      {
        Name: [''],
        LastName: [''],
        Email: [''],
        anioNacimiento: [''],
        Estudios: [''],
        Sexo: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.ID);
    console.log(this.userForm.value);
    this.crudService.ModifyUser(this.ID,this.userForm.value).subscribe(()=>{
      this.router.navigateByUrl('');
    });
  }
}
