import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from 'src/app/cargar-scripts.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-welcome-comp',
  templateUrl: './welcome-comp.component.html',
  styleUrls: ['./welcome-comp.component.css']
})
export class WelcomeCompComponent implements OnInit {
  nombreUser:any;
  token:any;
  private decoded:any;

  constructor(private _CargarScripts: CargarScriptsService,public crud:CrudService) {
    _CargarScripts.Carga(["animations"])
   }

  ngOnInit(): void {
    if(this.crud.isAuthenticated()){
    this.token = this.crud.readToken();
    this.getUsername(this.token);
    }
  }

  getUsername(token:string){
    this.decoded = this.crud.decodeToken(token);
    this.nombreUser = this.decoded.data.Name;
    console.log(this.decoded.data.Name)
  } 
}
