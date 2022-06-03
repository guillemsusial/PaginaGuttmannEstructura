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
  graficoPolar:any =document.getElementById('polarChart');
  constructor(
    private _CargarScripts: CargarScriptsService,
    public crudService:CrudService
    )
   {
    
    //this._CargarScripts.Carga(["graficoPolar"])
  }
  
  ngOnInit(): void {
    this.token = this.crudService.readToken();
    console.log(this.token);
    this.decodeToken(this.token);
    var grafico = new graficoPolar();
     var result:any=grafico.init();
    console.log(result);
   const polarChart = new Chart(this.graficoPolar , result );
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
