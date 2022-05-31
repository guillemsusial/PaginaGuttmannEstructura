import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'aplicacionGuttmann';

  constructor(private crudService: CrudService) {}

  ngOnInit(){
    setInterval(()=>
    {
      this.crudService.checkToken()
    },5000);
  }
}

