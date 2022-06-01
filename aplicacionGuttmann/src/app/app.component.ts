import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './services/crud.service';
import { CargarScriptsService } from './cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'aplicacionGuttmann';

  constructor(private crudService: CrudService, private router:Router, private _cargarScripts:CargarScriptsService) {}

  ngOnInit(){
    setInterval(()=>
    {
      this.crudService.checkToken();
    },5000);
  }

  

}

