

const sequenceButtons = document.getElementsByClassName('card');

class sequence {

    constructor(){
        this.primerArray =['/','|',' &#92; ','<-','*','->',' &#92; ','|','/'];
        this.buttons = Array.from(sequenceButtons);

    }

    init() {
        this.startGame();
    }

    startGame() {
     
     this.buttons.forEach((element, i) => {  
         
        
        if(element.id==i){
           
            element.innerHTML=this.primerArray[i]
        }
        if(element.id=="answer"+i){
            
            element.innerHTML = i
        }
        
       
      });    

    }

    gameWon() {

    }

    gameLost(){

    }





}
const sequence1 = new sequence();
sequence1.init();
