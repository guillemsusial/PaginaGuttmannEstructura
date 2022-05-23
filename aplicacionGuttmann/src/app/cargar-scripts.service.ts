import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {
//creamos un array donde alojaremos todas las referencias a Js
  use : string [] = [];

  constructor() {}

    
    Carga(archivos:string[])
    {
      console.log(archivos);
      
      
      for(let archivo of archivos)
      {
        let contador = 0;
        let repeated= true;
        
        if(this.use.length == 0){
          repeated = false;
        }
        
        //si el Js a insertar ya existe , no lo insertara
        for(let i = 0; i < this.use.length; i++){
          if(this.use[i] != archivo){
            contador++;
          }
        }

       
        if(contador!=this.use.length-1){
          
          repeated=false;
        }

        if(!repeated){
          console.log("!repeated->"+contador);
         // console.log(archivo);
          let script = document.createElement("script");
          script.src = "./../assets/js/" + archivo + ".js";
          this.use.push(archivo);            
         
          let body = document.getElementsByTagName("body")[0];
          body.appendChild(script);
        }else{
          console.log("repeated->"+contador);
         console.log(this.use[contador]);

        }
       
        //console.log("Array->"+this.use);
      }
      
  }

 



}



