import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tutorial: boolean;
    $('#tutorial').click(function () {
      tutorial = true;
      console.log(tutorial);
    })

    $('#juego').click(function () {
      tutorial = false;
      console.log(tutorial);
    })
  }

}
