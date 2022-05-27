import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  userForm:FormGroup;
  logged =false;
  //loginForm!: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router:Router
  ) {
    this.userForm=this.formulario.group({
      Email:[''],
      Password:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.userForm.value);

    
    
     this.crudService.LoginUser(this.userForm.value).subscribe((data)=>{
       console.log("Obtener data de backend",data);
      
       let jsonObject = JSON.parse(data);
       
       if(jsonObject.message=="Login Successful"){
          console.log(jsonObject.user)
          this.logged=true;
        }else{
          this.logged=false;        }

     },(error) =>{
      console.log("error Function");
     }
     );
     
     
    this.router.navigateByUrl('');
    
  }
 
}


 
