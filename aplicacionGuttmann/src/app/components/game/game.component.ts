import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 numbers:any;
 game: Array<any> = [];
 sequence:any;

  constructor() {
    this.numbers = Array(5).fill(4).map((x,i)=>i); // [0,1,2,3,4]
    
   this.numbers = Array(12); // [4,4,4,4,4]
   
   this.ye()
   
  


   //console.log(this.game);
   }
   

  ngOnInit(): void {

    
  }
  
  ye(){
    setTimeout(() => {

      for(let i=0;i<2;i++){     
        this.game[i] = Math.ceil(Math.random() *12); // []
        this.sequence= document.getElementById(this.game[i]); //
      
        this.sequence.classList.add("Active");
        }
    },200);

    
     
    
  }
}
