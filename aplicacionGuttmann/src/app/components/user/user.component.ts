import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { CrudService } from 'src/app/services/crud.service';
import { graficoPolar} from  '../../../assets/js/graficoPolar';
import { Chart } from "chart.js";

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {

  token:any;
  decodedToken:any;
  graficoPolar:any ;

  constructor(
    private _CargarScripts: CargarScriptsService,
    public crudService:CrudService
    )
   {
    /*Llamamos a CargarScriptsService para cargar el grafico */
    this._CargarScripts.Carga(["graficoPolar"])
  }
  
  ngOnInit(): void {    
    /*Obtenemos el TOKEN */
    this.token = this.crudService.readToken();
  
    this.decodeToken(this.token);
  
  }

  decodeToken(token:string){
  /*Decodificamos los valores y los guardamos  */
    this.decodedToken = this.crudService.decodeToken(token);
    
  };

  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log("Se ha destruido el componente");
    this._CargarScripts.removeScript('graficoPolar');
    window.location.reload();
  }
}
