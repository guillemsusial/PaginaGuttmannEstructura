import { Injectable } from '@angular/core';
import { CargarScriptsService } from './components/service/cargar-scripts.service';

@Injectable({
  providedIn: 'root'
})
export class BooleanSelectorService {

  constructor( ) {

  }
  trialOrGame:any;
  trialorGame=false;
  setGame(buleano:boolean){
    this.trialOrGame = buleano;
  }

  getGame() {

    return this.trialOrGame;
  }


}
