import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { CrudService } from 'src/app/services/crud.service';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  token:any;
  constructor(
    private _CargarScripts: CargarScriptsService,
    private messageService:MessageServiceService,
    private crudService:CrudService)
   {
    this._CargarScripts.Carga(["graficoLinea", "graficoPolar"])
  }


  ngOnInit(): void {
    $('button[category="lineChart"]').click(function lineChart() {
      $('div[category="polarChart"]').toggle();
      $('div[category="lineChart"]').toggle();
    }
    )
    
    this.getUserLogged();
    //console.log(this.messageService.getMessage());
  }

  getUserLogged(){
    this.token = this.crudService.getToken();
    console.log(this.token);
  }

}
