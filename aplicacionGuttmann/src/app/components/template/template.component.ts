import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#juego').click(function (){
      $('app-game').toggle();
      $('app-tutorial').toggle();
    });
  }

}
