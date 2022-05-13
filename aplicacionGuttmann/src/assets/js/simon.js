/**https://www.lawebdelprogramador.com/foros/JavaScript/1344396-secuencia-de-imagenes.html */

const round = document.getElementById('round');
const simonButtons = document.getElementsByClassName('card');

const transition = document.getElementById('transition');

class Simon {

  constructor(simonButtons, startButton, round) {
    this.round = 0;
    this.round1 = 1;
    this.userPosition = 0;
    this.totalRounds = 6;
    this.sequence = [];
    this.speed = 1000;
    this.blockedButtons = true;
    this.buttons = Array.from(simonButtons);
    this.fallos = 0;
    this.display = {
      startButton,
      round
    }

  }

  // Inicia el Simon
  init() {
    this.display.startButton.onclick = () => this.startGame();

    this.startGame();    
   
  }

  // Comienza el juego
  startGame() {

    transition.innerHTML = "YOU";
    this.display.startButton.disabled = true;
    
    this.updateRound(1);

    this.userPosition = 1;

    this.sequence = this.createSequence();

    this.buttons.forEach((element, i) => {     
      element.classList.remove('winner');      

      element.onclick = () => this.buttonClick(i);
    }); 

    this.showSequence();

  }

  // Actualiza la ronda y el tablero
  updateRound(value) {
    this.round = value;
    this.display.round.textContent = `Round ${this.round}`;
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
    

        console.log("POSITION->"+this.userPosition)
        if (this.sequence[this.userPosition] === value) {

          if (0 === this.userPosition) {
            this.round++;
            this.updateRound(this.round);
            this.userPosition = this.round;
            this.speed /= 1.02;
            this.isGameOver();
          } else {
            this.userPosition--;
          }    
        }else {
          this.gameLost();
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
    this.sequence=this.createSequence();
    this.blockedButtons = true;
    let sequenceIndex = 0;
    let you = 0;
    let timer = setInterval(() => {
      const button = this.buttons[this.sequence[sequenceIndex]];

      this.toggleButtonStyle(button)
      setTimeout(() => this.toggleButtonStyle(button), this.speed / 2)
      console.log(this.sequence[sequenceIndex]);
      sequenceIndex++;      
      if (sequenceIndex > this.round) {
        this.blockedButtons = false;
        clearInterval(timer)
        let timer1 = setInterval(() => {

          this.toggleTurnStyle(true)
          if (you >= 1) {
            clearInterval(timer1)
          }

          you++;
        }, this.speed);
      }
    }, this.speed);

  }

  // Pinta los botones para cuando se está mostrando la secuencia

  toggleButtonStyle(button) {
    
    button.classList.toggle('Active');
  }

  toggleTurnStyle(value) {
    console.log("entra");
    if (value) {
      transition.classList.toggle('Active-1');
      transition.classList.toggle('Guess');
    }

    /**SI FALLAS TE DA 1 OPORTUNIDAD MAS */

    if (!value) {
      this.fallos++;
      if (this.fallos <= 2) {
        console.log("fallos=" + this.fallos);
        console.log("warning")
        transition.classList.toggle('Active-1');
        transition.classList.toggle('Warning');
        transition.innerHTML = "Tienes 1 intento MAS"
        this.updateRound(1);
        if (this.fallos == 2) {
          setTimeout(() => this.showSequence(), this.speed * 0.5)
          transition.innerHTML = "YOU"
        }

        /**SI FALLAS POR SEGUNDA VEZ SE ACABARA EL JUEGO */

      } else {
        console.log("end")
        transition.classList.add('Active-1');
        transition.classList.add('Error');
        transition.innerHTML = "FALLASTE";
        if (this.fallos == 4) {
          var divNota = document.createElement("button")           
          divNota.setAttribute("id","startButton")         
          divNota.setAttribute("Style", " width: 50%;margin: auto; height: 60%; font-size: 50%;border: none;font-family: 'Merriweather', serif;cursor: pointer;border-radius: 10pt; color: #fff;background-color: #587792;padding: 5px;");
          setTimeout(() => transition.appendChild(divNota), divNota.textContent = "Try Again", this.speed * 0.5);
          divNota.onclick = () => window.location.reload();        
          
        }
      }

    }
  }

  // Actualiza el simon cuando el jugador pierde
  gameLost() {
    console.log("error")
    this.display.startButton.disabled = false;
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
    this.buttons.forEach(element => {
      element.classList.add('winner');
    });
    transition.classList.toggle('Active-1');
    transition.classList.toggle('Warning');
    transition.innerHTML='🏆';
  }
}

const simon = new Simon(simonButtons, startButton, round);
simon.init();
