import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {
  //creamos un array donde alojaremos todas las referencias a Js
  use: string[] = [];

  constructor() { }

  Carga(archivos: string[]) {
    for (let i = 0; i < archivos.length; i++) {

      if (!this.use.includes(archivos[i])) {
        this.use.push(archivos[i]);
        let script = document.createElement("script");
        script.src = "./../assets/js/" + archivos[i] + ".js";
        script.id = archivos[i]
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(script);
      
      } else {
      
        setTimeout(() =>{window.location.reload();},100);
      }
    }
  }

  removeScript(id: string) {
    let script = document.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}



