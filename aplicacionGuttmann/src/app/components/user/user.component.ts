import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 

    _CargarScripts.Carga(["graficoLinea"]);
    _CargarScripts.Carga(["graficoHex"]);
  }

  ngOnInit(): void {
    
    
  }

}
