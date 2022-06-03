/*const { default: _default } = require("@popperjs/core/lib/modifiers/popperOffsets");*/




const sequenceButtons = document.getElementsByClassName('card');
const answerButtons =document.getElementsByClassName('r');
const acerts = document.getElementById('tAcertsN');
const round = document.getElementById('round');
const transition = document.getElementById('transition');
const startTransition = document.getElementById('startTransition');
const startModal = new bootstrap.Modal(document.getElementById('startModalToggle'), { keyboard: false});
const finishModal = new bootstrap.Modal(document.getElementById('finishModal'),{keyboard: false});



class test {

    constructor( sequenceButtons, round){
        this.preguntas = ['/','T',' &#92; ','<-','*','->',' &#92;_ ','_|_','_/'];
        this.respuestas = ['/','T',' &#92; ','<-','*','->',' &#92;_ ','_|_','_/'];
        this.primerArray =['/','_|_',' &#92; ','<-','*','->',' &#92; ','_|_','_/'];
        this.resultados= [0,0,0,0,0,0];
        //this.order = randomOrder();
        this.buttons = Array.from(sequenceButtons);
        this.ansButtons = Array.from(answerButtons);

        this.totalRounds = player.totalRounds;
        this.round= player.round;


        this.userSequence= player.userSequence;
        this.userObject= player.userObject;
        this.userPosition= player.userPosition;
        this.display = {
          round

        }





    }
  //inicia la Sequencia
    init() {
        this.startGame();
    }

  //##Empieza el Juego
    startGame() {
      let aciertos=this.aciertos;
      this.updateRound(this.round);
      player.createUserData();
      this.userPosition = 1;
      this.cargarCartas();

    };
  //##Cargar Preguntas
    cargarCartas(){
       //## VARIABLES DE RECORRIDO

       var y=0, z=0, w=0, x=0;
       var v=0;
       let pregsOrder=[,,,];
       //## VALOR INCOGNITO
       var Incognito=Math.floor(Math.random(0,8)*8);
       console.log('Id incognito ', Incognito);
       //## GUARDA las respuestas "VACIAS"
       let vRamPreg=[,,,];
       //## POSICION RANDOM PARA MEZCLAR LAS RESPUESTAS
       const order = randomOrder();
       this.updateRound(this.round);
       this.userPosition ++;


      //## Incrementa una ronda
      this.round++;
      this.updateRound(this.round);
      this.userPosition = this.round;

       //## inserta los datos en las cartas
      this.buttons.forEach((element, i) => {
       //## MUESTRA LA SECUENCIA INCOMPLETA MENOS EL NUMERO INCOGNITO NI LAS CARTAS DE RESPUESTA
         if(element.id==i && i!=Incognito && element.id!='answer'+i){
           element.classList.remove('invisible');
           element.classList.add('visible');
           element.innerHTML=this.preguntas[i];

       //## SEPARA EL ELEMENTO SELECCIONADO COMO INCOGNITO LO ESCONDE
         }else if(element.id==i && element.id==Incognito){
           element.classList.remove('visible');
           element.classList.add('invisible');


         }else if(element.id=="answer"+i){
             //## INSERTA EL INCOGNITO EN UNA POSICION ALEATORIA DEL 1-4
             if(w==0){
               v= (order[z]-1);
               vRamPreg[v]=Incognito;
               console.log('vRamPreg Posicion: ', vRamPreg[v],' ',v);
               w++;
             }
             //## Si EL VALOR DE LA POSICION ESTA VACIA(0) INSERTA UN RNG DEL 1-9
             if(vRamPreg[z]==null){
               x=0;
               do{
                 y=Math.floor(Math.random(0,8)*8);
                 if ( (y!= Incognito) && (y!=vRamPreg[z-1]) && (y!= vRamPreg[z-2]) && (y!= vRamPreg[z-3]) ){x++;};
               }while(x<1);
               vRamPreg[z]=y;
             };
             //Recorre array de respuestas y verifica la correcta
             if(vRamPreg[z]===Incognito){
               y=vRamPreg[z];
             };
                //sacamos la respuesta por html
               element.innerHTML = this.respuestas[y]+' '+y;
             z++;
         };
       });


       //## RESPUESTAS A LAS PREGUNTAS INSERTAMOS LA POSICION EN LA QUE SE ENCUENTRA LA INCOGNITA(V)
       this.ansButtons.forEach((element,i)=>{
         element.onclick = () => this.buttonClickValidate(i,v);

       });


    }

    resultadosAciertos(){
      //filas de la tabla respuestas
      var aciertos=0;

      for(var i=0; i<=this.totalRounds;i++){
        if(this.userSequence[i].Respuesta[0]==1){
          aciertos++;
        }


        // for(var x=0; x<=2; x++){
        //   console.log(this.userSequence.)

        // }

      };
      acerts.innerHTML+=aciertos;
      console.log("Aciertos totales: ", aciertos,'| Aciertos de Ronda: ',  this.userSequence[i].Respuesta[0]);



  }

      // Ejecuta una función cuando se hace click en un botón
    buttonClickValidate(value,ref) {

      //## CREAMOS BOOLEANA PARA RECOGER EL ACIERTO O FALLO DE LA RESPUESTA
      var acierto= 0 ;
      var es='';
      //## SI EL VALOR SELECCIONADO ES EL CORRECTO VERIFICALO
      if(value == ref){

        es='acierto';


        acierto =1;


        console.log(this.aciertos);

      }else{
        es='fallo';
        acierto=0;}


      //## AÑADIR DATOS AL OBJETO PLAYER
      this.userSequence[this.round].Respuesta.push(acierto);
      this.userSequence[this.round].Incognito.push(ref);
      console.log( this.userSequence);
      console.log('pulsed: '+es);

        if(this.round<6){
        this.cargarCartas();


        }else{

          this.gameFinish();}

    }


    //Actualiza la Ronda
    updateRound(value){

      this.round = value;
      this.display.round.textContent = `${this.round}/${this.totalRounds}`;
    }

    //PoPup Conforme juego Finalizado
    gameFinish(){
      finishModal.show();
      this.resultadosAciertos();


      console.log(this.userSequence[this.round].Respuesta[0], this.userSequence[this.round]);

    }




    funcionIincognita(){


    }





};

//### devuelve 4 valores aleatorios no repetidos del 1-4
function randomOrder(){
  var n = 0;
  var numero;
  let uno = 0;
  let dos = 0;
  let tres = 0;
  let cuatro =0
  do {
      numero = Math.floor(Math.random() * (5 - 1)) + 1;

      if (((numero != uno) && (numero != dos) && (numero != tres)) ) {

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

while (n <= 3);


  return [uno, dos,tres,cuatro];

};


class Player{
  constructor(round,userPosition,totalRounds,fallos,userSequence,userObject,Incognito){
    this.round=round;

    this.userPosition=userPosition;
    this.totalRounds=totalRounds;
    this.userObject=userObject;
    this.userSequence= userSequence;
    this.fallos = fallos;
    this.Incognito = Incognito;
    this.display = {
      round

    }

  };
   //crea el objeto dond alojaremos los datos del usuario segun la ronda
   createUserData(){

    for(let i = 0;i<=this.totalRounds;i++) {

      this.userSequence.push(this.userObject={"Round":i,"Respuesta":[],"Incognito":[]});

    };
  }
}



const player = new Player(0,0,6,0,[],{  Round:"",  Respuesta:[],  Incognito:[]});
const sequence1 = new test(sequenceButtons,round);


/*
const simon = new Simon(simonButtons, startButton, round);*/

startModal.hide()
sequence1.init();
