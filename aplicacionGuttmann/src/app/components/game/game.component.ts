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
    game: string

  };

  constructor(private _CargarScripts: CargarScriptsService, private rutaActiva: ActivatedRoute) {

    this.game = { game: this.rutaActiva.snapshot.params['game'] };

    _CargarScripts.Carga([this.game.game]);

  }


  ngOnInit(): void {
  }


}



