import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
 
    this._CargarScripts.Carga(["graficoLinea", "graficoPolar"]) 
  }

  ngOnInit(): void {
   
    
    
    $('button[category="lineChart"]').click(function lineChart() {
      $('div[category="polarChart"]').toggle();
      $('div[category="lineChart"]').toggle();
    }
    )
  }

}
