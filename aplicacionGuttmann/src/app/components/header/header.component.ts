import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "src/app/components/service/cargar-scripts.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User} from 'src/assets/objects/usuarios';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  logged =false;
  //loginForm!: FormGroup;

  email= new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('', [Validators.required]);


  loginForm= new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor() {
  }

  ngOnInit(): void {

  }

  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(): void {
    console.log(this.loginForm.value);
    // Call Api
  }

  click(datos:User){

    console.log(datos);
    //this.http.createUser(datos);

  }
}

