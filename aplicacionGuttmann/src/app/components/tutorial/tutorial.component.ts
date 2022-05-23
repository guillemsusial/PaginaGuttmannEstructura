import { Component,  OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],

  template: "<ng-template> </ng-template>"



})

export class TutorialComponent implements OnInit {
    el_juego=['juego1',''];
    descripcion=['Observa la secuencia','2','3'];

    @Input() idd="0";

    //Datos recibidos del juego seleccionado
    juegorecibido='';




  constructor() { }

  ngOnInit(): void {


  }

  cargarJuego(id:number){

    this.el_juego[id];

  }

}
