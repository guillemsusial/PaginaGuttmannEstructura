import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from 'src/app/cargar-scripts.service';
declare var $: any;

@Component({
  selector: 'app-welcome-comp',
  templateUrl: './welcome-comp.component.html',
  styleUrls: ['./welcome-comp.component.css']
})
export class WelcomeCompComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(["animations"])

   }

  ngOnInit(): void {
  }
}
