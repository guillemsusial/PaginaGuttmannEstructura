import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {

  game: {
    mode: string
   

  };

  constructor(private _CargarScripts: CargarScriptsService, private rutaActiva: ActivatedRoute) {

    this.game = { mode: this.rutaActiva.snapshot.params['mode'] };

    _CargarScripts.Carga([(this.game.mode)]);

  }


  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this._CargarScripts.removeScript((this.game.mode));
  }

}



