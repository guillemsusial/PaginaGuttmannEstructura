import { Component,  OnInit, Input } from '@angular/core';
import { } from "src/app/components/categories/categories.component";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {
  game: { name: string };

  constructor(private rutaActiva: ActivatedRoute,public router: Router) { 

    this.game={
      name:this.rutaActiva.snapshot.params['game']
    };
  }

  ngOnInit(): void {
  }
  
  onload(): void {
  }

  cargarJuego(option:number){
    switch ( this.game.name+option) {
      case  this.game.name+1 :
        
          this.router.navigate(['/game/'+this.game.name+'/'+this.game.name+'-juego']);
        break;
        case  this.game.name+2:
         
          this.router.navigate(['/game/'+this.game.name+'/'+this.game.name+'-trial']);
        break;
    }
  }
}
