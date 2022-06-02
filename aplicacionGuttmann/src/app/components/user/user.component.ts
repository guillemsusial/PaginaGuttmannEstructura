import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { CrudService } from 'src/app/services/crud.service';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {

  token:any;
  decodedToken:any;
 
  constructor(
    private _CargarScripts: CargarScriptsService,
    public crudService:CrudService
    )
   {
    
    this._CargarScripts.Carga(["graficoPolar"])
  }
  
  ngOnInit(): void {
    this.token = this.crudService.readToken();
    console.log(this.token);
    this.decodeToken(this.token);
  }

  decodeToken(token:string){
    this.decodedToken = this.crudService.decodeToken(token);
    console.log(this.decodedToken.data);
  };

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log("Se ha destruido el componente");
    this._CargarScripts.removeScript('graficoPolar');
    window.location.reload();
  }
}
