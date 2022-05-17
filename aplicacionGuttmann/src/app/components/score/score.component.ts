import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

declare var $: any;

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(["graficoLinea"]);
    _CargarScripts.Carga(["graficoPolar"]);
   }

  ngOnInit(): void {
  }

}
