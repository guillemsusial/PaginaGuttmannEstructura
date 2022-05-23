import { Component,  OnInit, Input } from '@angular/core';
import { } from "src/app/components/categories/categories.component";



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],





})

export class TutorialComponent implements OnInit {
    el_juego="";
    juegos=['juego1',''];
    descripcion="";
    descripciones=['Observa la secuencia','2','3'];


    @Input() idd="0";

    //Datos recibidos del juego seleccionado
    juegorecibido='';




  constructor() { }

  ngOnInit(): void {
    this.cargarJuego(0);

  }

  cargarJuego(id:number){

    this.el_juego=this.juegos[id];
    this.descripcion=this.descripciones[id]

  }

}
