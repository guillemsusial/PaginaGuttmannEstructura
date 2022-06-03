import { Component,  OnInit, Input } from '@angular/core';
import { } from "src/app/components/categories/categories.component";
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],





})

export class TutorialComponent implements OnInit {
   /* el_juego="";
    juegos=['juego1',''];
    descripcion="";
    descripciones=['Observa la secuencia','2','3'];


    @Input() idd="0";

    //Datos recibidos del juego seleccionado
    juegorecibido='';*/
    game: {game: string

    };




  constructor(private rutaActiva: ActivatedRoute,public router: Router) { 


    this.game={
      game:this.rutaActiva.snapshot.params['game']
    };
   
    
  }

  ngOnInit(): void {
   

  
  }
  onload(): void {
   
  }

  cargarJuego(game:number){

    switch ( this.game.game+game) {
      case  this.game.game+1 :
        
          this.router.navigate(['/game/'+this.game.game+'/'+this.game.game+'-juego']);
        break;
        case  this.game.game+2:
         
          this.router.navigate(['/game/'+this.game.game+'/'+this.game.game+'-trial']);
        break;
    
     
    }
  }
  

}
