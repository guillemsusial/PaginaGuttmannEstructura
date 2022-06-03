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
    
    //this._CargarScripts.Carga(["graficoPolar"])
  }
  
  ngOnInit(): void {
    
    this.graficoPolar = document.getElementById('polarChart');
    this.token = this.crudService.readToken();
    console.log(this.token);
    this.decodeToken(this.token);
    this.graficoPolar =this.graficoPolar?.getContext('2d');
     var grafico = new graficoPolar();
    var result:any=grafico.init();
    this.graficoPolar;
  
    console.log(result);
    console.log(this.graficoPolar);
   const polarChart = new Chart(this.graficoPolar,result);
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
