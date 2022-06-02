/**https://www.lawebdelprogramador.com/foros/JavaScript/1344396-secuencia-de-imagenes.html */

let round = document.getElementById('round');
let simonButtons = document.getElementsByClassName('card');
let transition = document.getElementById('transition');


class Simon {

  constructor(simonButtons, startButton, round) {


    this.round = player.round;
    this.userPosition = player.userPosition;
    this.totalRounds = player.totalRounds;
    this.sequence = player.sequence;
    this.speed = player.speed;
    this.blockedButtons = player.blockedButtons;
    this.buttons = Array.from(simonButtons);
    this.fallos = player.fallos;
    this.laSequencia_error= player.laSequencia_error;
    this.userSequence= player.userSequence;
    this.userObject= player.userObject;
    this.display = {
      round
    }


  }


  // Inicia el Simon
  init() {


    
  round.innerHTML='1/6';
   this.countDown();


  }

  //Contador
  countDown(){
   let sequenceIndex=3;

    let timer = setInterval(() => {
      transition.classList.add('Active-1');
     // transition.style.left = '48.5vw'
     if(sequenceIndex != 0)
      transition.innerHTML=sequenceIndex;


      if(sequenceIndex == 0){
        transition.innerHTML="Memoriza la siguiente secuencia";

      }
      if (sequenceIndex == -1) {

        transition.classList.remove('Active-1');
        this.startGame();
        clearInterval(timer)
      }
      sequenceIndex--;

    }, this.speed*1.2);



  }

  // Comienza el juego
  startGame() {

    transition.innerHTML = "Tu turno";

    this.updateRound(1);

    player.createUserData();

    this.userPosition = 1;

    this.buttons.forEach((element, i) => {
      element.onclick = () => this.buttonClick(i);
    });

    this.showSequence();

  }



  // Actualiza la ronda y el tablero
  updateRound(value) {
    this.round = value;
    this.display.round.textContent = `${this.round}/${this.totalRounds}`;
  }

  // Crea el array aleatorio de botones
  createSequence() {
    return Array.from({
      length: this.totalRounds
    }, () => this.getRandomColor());
  }

  // Devuelve un número al azar entre 0 y 11
  getRandomColor() {

    return Math.floor(Math.random() * 11);
  }

  // Ejecuta una función cuando se hace click en un botón
  buttonClick(value) {

    !this.blockedButtons && this.validateChosenColor(value);

  }

  // Valida si el boton que toca el usuario corresponde a al valor de la secuencia

  validateChosenColor(value) {

    /*console.log(this.sequence);
    console.log("POSITION->"+this.userPosition)
    console.log("VALUE->"+value);*/
    this.userSequence[this.round].Options.push(value);
    this.userSequence[this.round].Sequence.push(this.sequence[this.userPosition]);
    console.log(this.userSequence);
    if (this.sequence[this.userPosition] === value && !this.laSequencia_error) {

      if (0 === this.userPosition) {
        this.round++;
        this.updateRound(this.round);
        this.userPosition = this.round;
        this.speed /= 1.02;
        this.isGameOver();
      } else {

        this.userPosition--
      }
    } else {

      this.laSequencia_error = true

      if (0 === this.userPosition && this.laSequencia_error) {

        this.gameLost();
        this.userPosition = this.round;
        this.laSequencia_error = false
      }
      this.userPosition--
    }
    }


  // Verifica que no haya acabado el juego
  isGameOver() {
    if (this.round === this.totalRounds) {
      this.gameWon();
    } else {
      this.showSequence();
    };
  }

  // Muestra la secuencia de botones que va a tener que tocar el usuario
  showSequence() {
    this.sequence = this.createSequence();
    this.blockedButtons = true;
    let sequenceIndex = 0;
    let you = 0;
    let timer = setInterval(() => {
      let button = this.buttons[this.sequence[sequenceIndex]];

      this.toggleButtonStyle(button)


      setTimeout(() => this.toggleButtonStyle(button), this.speed  )

      sequenceIndex++;

      this.stopShowingSequence(sequenceIndex,timer,you)

    }, this.speed*2);


  }

  //Cuando la sequencia[i] llegue al numero de la ronda esta parara el Intervalo
  stopShowingSequence(sequenceIndex, timer, you) {
    if (sequenceIndex > this.round) {
      this.blockedButtons = false;
      clearInterval(timer)
      let timer1 = setInterval(() => {

        this.toggleTurnStyle(true)
        if (you >= 1) {
          clearInterval(timer1)
        }

        you++;

      }, this.speed*1.2);

    }
  }

  // Pinta los botones para cuando se está mostrando la secuencia

  toggleButtonStyle(button) {

    button.classList.toggle('Active');
  }

  //Añade y quita classes segun el resultado del usuario
  toggleTurnStyle(value) {

    /*ACIERTAS */
    if (value) {
      transition.classList.toggle('Active-1');
      transition.classList.toggle('Guess');
    }

    /*SI FALLAS TE DA 1 OPORTUNIDAD MAS */

    if (!value) {
      this.fallos++;
      if (this.fallos <= 2) {

        transition.classList.toggle('Active-1');
        transition.classList.toggle('Warning');
       // transition.style.left = '3vw'
        transition.innerHTML = "Memoriza la siguiente secuencia"
        this.updateRound(this.round);
        if (this.fallos == 2) {
          setTimeout(() => this.showSequence(), this.speed * 0.5)
          transition.innerHTML = "Tu Turno"
        //  transition.style.left = '38vw'
        }

        /*SI FALLAS POR SEGUNDA VEZ SE ACABARA EL JUEGO */

      } else {

        transition.classList.add('Active-1');
        transition.classList.add('Error');
        transition.innerHTML = "FALLASTE";
        if (this.fallos == 4) {
          var divNota = document.createElement("button")

          divNota.setAttribute("id","startButton")

          divNota.setAttribute("Style", " width: 50%;margin: auto; height: 100%; font-size: 50%;border: none;font-family: 'Merriweather', serif;cursor: pointer;border-radius: 10pt; color:rgb(92, 0, 76);border:solid rgb(92, 0, 76) ;padding: 5px;");
          setTimeout(() => transition.appendChild(divNota), divNota.textContent = "Try Again", this.speed * 0.5);
          divNota.onclick = () => window.location.reload();

        }
      }

    }
  }

  // Actualiza el simon cuando el jugador pierde
  gameLost() {


    this.blockedButtons = true;
    let you = 0;
    let timer1 = setInterval(() => {

      this.toggleTurnStyle(false)
      if (you >= 1) {
        clearInterval(timer1)
      }

      you++;
    }, this.speed * 1.5);
  }

  // Muestra la animacón de triunfo y actualiza el simon cuando el jugador gana
  gameWon() {
    this.display.startButton.disabled = false;
    this.blockedButtons = true;

    transition.classList.toggle('Active-1');
    transition.classList.toggle('Warning');
    transition.innerHTML = '🏆';
  }

  /* $('#send').click( function() {
     alert('Enviando!');
         $.ajax(
                 {
                     url: 'get_var.php?var=<?php echo $var; ?>',
                     success: function( data ) {
                         alert( 'El servidor devolvio "' + data + '"' );
                     }
                 }
             )
         }*/

}



class Player{
  constructor(round,userPosition,totalRounds,sequence,speed,blockedButtons,fallos,userSequence,userObject) {
      this.round = round;
      this.userPosition = userPosition;
      this.totalRounds = totalRounds;
      this.sequence = sequence;
      this.speed = speed;
      this.blockedButtons = blockedButtons;
      this.fallos = fallos;
      //this.laSequencia_error=false;
      this.userSequence= userSequence;
      this.userObject= userObject;
      this.display = {
        round
      }

    }


  //crea el objeto dond alojaremos los datos del usuario segun la ronda

  createUserData(){

    for(let i = 0;i<this.totalRounds;i++) {

      this.userSequence.push(this.userObject={"Round":i,"Options":[],"Sequence":[]});

    }
  }
}






let player = new Player(0, 0, 6, [], 1000, true, 0, [], {
  Round: "",
  Options: [],
  Sequence: []
});
let simon = new Simon(simonButtons, startButton, round);
simon.init();
