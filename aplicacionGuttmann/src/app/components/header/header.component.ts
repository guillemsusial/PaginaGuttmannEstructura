import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "src/app/cargar-scripts.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged =false;
  loginForm!: FormGroup;

  constructor(private script: CargarScriptsService) {
    script.Carga(["popupLogin"]);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
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
}

