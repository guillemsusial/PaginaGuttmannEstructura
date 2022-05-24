

const sequenceButtons = document.getElementsByClassName('card');
const transition = document.getElementById('transition');
const startTransition = document.getElementById('startTransition');
var startModal = new bootstrap.Modal(document.getElementById('startModalToggle'), { keyboard: false});
var modalToggle = document.getElementById('startModalToggle2') // relatedTarget




class sequence {

    constructor(){
        this.primerArray =['/','|',' &#92; ','<-','*','->',' &#92; ','|','/'];
        this.buttons = Array.from(sequenceButtons);

    }
 //inicia la Sequencia
    init() {
        this.startGame();
    }

  //Empieza el Juego

    startGame() {
      var x=["1","2","3","4"];
     this.buttons.forEach((element, i) => {

      if(this.x === 'undefined'){ this.x=0;
      }else if(i/3==0){x++; console.log(x);};


        if(element.id==i){

            element.innerHTML=this.primerArray[i]

        }else if(element.id=="answer"+i){

            element.innerHTML = x;
        };



      });

    }

    gameWon() {

    }

    gameLost(){

    }

    funcionIincognita(){


    }





}

class Player{

}

const sequence1 = new sequence();

startModal.hide()
sequence1.init();
