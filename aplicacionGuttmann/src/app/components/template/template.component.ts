import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  juego: boolean;

  constructor() {
    this.juego=true;
  }

  ngOnInit(): void {
    /*$('#juego').click(function (juego:boolean){
      juego=true;
      $('app-tutorial').toggle();
      console.log(juego);
      return juego;
    });*/
    
  }

}
