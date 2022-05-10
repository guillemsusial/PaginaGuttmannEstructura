import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 

    _CargarScripts.Carga(["graficoLinea"]);
    _CargarScripts.Carga(["graficoPolar"]);
  }

  ngOnInit(): void {
    $('button[category="lineChart"]').hide();
    $('div[category="polarChart"]').hide();
    $('button[category="lineChart"]').addClass("button-categories-active");
    $('button[category="polarChart"]').addClass("button-categories-active");

    $('button[category="lineChart"]').click(function (){
      $('button[category="lineChart"]').hide();
      $('div[category="polarChart"]').fadeOut("fast");
      $('div[category="lineChart"]').fadeIn("fast");
      $('button[category="polarChart"]').show();
    }
    )
    $('button[category="polarChart"]').click(function (){
      $('button[category="polarChart"]').hide();
      $('div[category="lineChart"]').fadeOut("fast");
      $('button[category="lineChart"]').fadeIn("fast");
      $('div[category="polarChart"]').show();
    }
    )
  }

}
