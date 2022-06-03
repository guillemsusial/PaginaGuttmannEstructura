import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import {Simon} from '../../../assets/Juegos/simon';
import {Player } from "../../../assets/Juegos/player";
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {

  game: {
    mode: string
   

  };
 
  

  constructor(private _CargarScripts: CargarScriptsService, private rutaActiva: ActivatedRoute,private router: Router, crudService:CrudService) {

    this.game = { mode: this.rutaActiva.snapshot.params['mode'] };
    


  }


  ngOnInit(): void {
    
    if(this.game.mode.match('-juego')){
    var player = new Player(0, 0, 6, [], 1000, true, 0, [], {
      Round: "",
      Options: [],
      Sequence: []
    });
   
  }else{
    var player = new Player(0, 0, 2, [], 1000, true, 0, [], {
      Round: "",
      Options: [],
      Sequence: []
    });
   
  }
    
  var simon = new Simon(player);
    simon.init();
      
   
  }
  
  

}





