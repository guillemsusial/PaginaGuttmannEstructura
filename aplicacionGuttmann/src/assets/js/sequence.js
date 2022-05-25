/*const { default: _default } = require("@popperjs/core/lib/modifiers/popperOffsets");*/


const sequenceButtons = document.getElementsByClassName('card');
const transition = document.getElementById('transition');
const startTransition = document.getElementById('startTransition');
var startModal = new bootstrap.Modal(document.getElementById('startModalToggle'), { keyboard: false});
var modalToggle = document.getElementById('startModalToggle2'); // relatedTarget



class test {

    constructor(){
        this.preguntas = ['/','|',' &#92; ','<-','*','->',' &#92; ','|','/'];
        this.respuestas = ['/','|',' &#92; ','<-','*','->',' &#92; ','|','/'];
        this.primerArray =['/','|',' &#92; ','<-','*','->',' &#92; ','|','/'];
        this.buttons = Array.from(sequenceButtons);

    }
 //inicia la Sequencia
    init() {
        this.startGame2();
    }

  //Empieza el Juego

    startGame() {
      var x=["1","2","3","4"];
      var y=0;
      //inserta los datos en las cartas
     this.buttons.forEach((element, i) => {
        if(element.id==i){
            element.innerHTML=this.primerArray[i]
        }else if(element.id=="answer"+i){
          //restamos las 9 cartas de la izquierda
            y=i-9;
            element.innerHTML = x[y];
        };
      });

    }
    startGame2() {

      let vRamPreg=[,,,];
      const probabilidadPreg=[0.25,0.25,0.25,0.25];
      var y=0;
      var z=0
      var v=0;
      var w=0;
      let pregsOrder=[,,,];
      var Incognito=Math.floor(Math.random(0,9)*10);
      console.log('Id incognito ', Incognito);
      //orden de las respuestas


      const order = randomOrder();

      //inserta los datos en las cartas

     this.buttons.forEach((element, i) => {
        if(element.id==i && i!=Incognito && element.id!='answer'+i){
            element.innerHTML=this.preguntas[i];
            //console.log('###########',i,'#############');
        }else if(element.id==i && element.id==Incognito){
          //console.log('Incognito: ', Incognito);
          element.innerHTML=this.preguntas[Incognito];
        }else if(element.id=="answer"+i){
          //restamos las 9 cartas de la izquierda


            /* Random del 1-4*/
            v= order[z];
            console.log('Numero1: ',v, ' -- ', order[z] );

            if(vRamPreg[v]==Incognito && w==0){
              vRamPreg[v]=Incognito;
              w++;

            }else{
              y=Math.floor(Math.random(0,9)*10);
              vRamPreg[v]=y;}


            element.innerHTML = this.respuestas[y];
            z++
            console.log(z)
        };



      });

    }

    gameWon() {

    }

    gameLost(){

    }

    funcionIincognita(){


    }





};
function randomOrder(inc){
  var n = 0;
  var numero;
  let uno = 0;
  let dos = 0;
  let tres = 0;
  let cuatro =0
  do {
      numero = Math.floor(Math.random() * (4 - 1)) + 1;

      if (((numero != uno) && (numero != dos) && (numero != tres) && (numero !=inc)) ) {
        console.log('Order N: ', n, ' numero', numero)
          n++;
          if (n == 1) {
              uno = numero;
          }
          if (n == 2) {
              dos = numero;
          }
          if (n == 3) {
              tres = numero;
          }
          if (n == 4) {
            cuatro = numero;
        }

      }
  }

while (n < 3);
//devuelve 4 valores aleatorios no repetidos del 1-4
console.log('Orden preguntas: ',uno, ', ', dos ,', ', tres,' ', cuatro );
  return [uno, dos,tres,cuatro];

};

class Player{
  constructor(round,userPosition,totalRounds,){}
};


const sequence1 = new test();

startModal.hide()
sequence1.init();
