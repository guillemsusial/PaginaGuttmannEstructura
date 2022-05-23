import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../service/cargar-scripts.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {



   constructor(private _CargarScripts:CargarScriptsService) {

   _CargarScripts.Carga(["simon"]);

    }


   ngOnInit(): void {
   }


  }



