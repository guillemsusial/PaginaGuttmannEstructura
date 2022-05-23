import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/components/service/cargar-scripts.service';
@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {

    _CargarScripts.Carga(["sequence"])
  }

  ngOnInit(): void {
  }

}
