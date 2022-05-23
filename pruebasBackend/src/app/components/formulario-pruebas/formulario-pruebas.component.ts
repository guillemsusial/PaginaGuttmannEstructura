import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-formulario-pruebas',
  templateUrl: './formulario-pruebas.component.html',
  styleUrls: ['./formulario-pruebas.component.css']
})
export class FormularioPruebasComponent implements OnInit {
  Users: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.ShowAllUsers().subscribe(result => {
      console.log(result);
      this.Users = result;
    });
  }

  deleteUser(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Quieres borrar el usuario?")) {
      this.crudService.DeleteUser(id).subscribe((result) => {
        this.Users.splice(iControl, 1);
      });
    }
  }

}
