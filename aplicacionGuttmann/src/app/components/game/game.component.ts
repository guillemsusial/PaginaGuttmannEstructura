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
  sesionID:any;
  game: {
    mode: string
  };
  token:any;
  decodedToken:any;
 
  constructor(private _CargarScripts: CargarScriptsService, private rutaActiva: ActivatedRoute,public router: Router, public crudService:CrudService) {
    this.game = { mode: this.rutaActiva.snapshot.params['mode'] };
  }

  ngOnInit(): void {
    
    if(this.game.mode.match('-juego')){
    var player = new Player(0, 0, 6, [], 1000, true, 0, [], {
      Round: "",
      Options: [],
      Sequence: []
    },false);
   
  }else{
    var player = new Player(0, 0, 2, [], 1000, true, 0, [], {
      Round: "",
      Options: [],
      Sequence: []
    },true);
   
  }
  var simon = new Simon(player,this.crudService,this.router);

  this.token = this.crudService.readToken();
  this.decodeToken(this.token);

  this.crudService.GetSesionId(this.decodedToken.data.id).subscribe((data) => {
    this.sesionID = JSON.parse(data);
    //console.log(this.sesionID[0]["id"]);

    simon.getSesionId(this.sesionID[0]["id"]);
    simon.init();
    
  });
  }

  decodeToken(token:string){
    this.decodedToken = this.crudService.decodeToken(token);
  };

}





