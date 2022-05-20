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
    this.laSequencia_error=false;   
    this.userSequence=[];
    this.userObject=
    {
      Round:"",
      Options:[]
    };
    this.display = {
      startButton,
      round
    }

  }
  

  // Inicia el Simon
  init() {
   // this.display.startButton.onclick = () => this.startGame();

    this.startGame();    
   
  }

  // Comienza el juego
  startGame() {

    transition.innerHTML = "Tu turno";
    this.display.startButton.disabled = true;
    
    this.updateRound(1);

    this.createUserData();    
   
    this.userPosition = 1;

    this.buttons.forEach((element, i) => {
      element.onclick = () => this.buttonClick(i);
    }); 

    this.showSequence();

  }
  
  //crea el objeto dond alojaremos los datos del usuario segun la ronda
  createUserData(){    

    for(let i = 0;i<this.totalRounds;i++) {
     
      this.userSequence.push(this.userObject={"Round":i,"Options":[]});
     
    }
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
        this.userSequence[this.round].Options.push(this.userPosition);
        console.log( this.userSequence);
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
        }else {
      
         this.laSequencia_error =true

          if(0 === this.userPosition && this.laSequencia_error){ 
           
          this.gameLost();
          this.userPosition = this.round;
          this.laSequencia_error =false
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
    this.sequence=this.createSequence();
    this.blockedButtons = true;
    let sequenceIndex = 0;
    let you = 0;
    let timer = setInterval(() => {
      const button = this.buttons[this.sequence[sequenceIndex]];

      this.toggleButtonStyle(button)
      setTimeout(() => this.toggleButtonStyle(button), this.speed   )
     
      sequenceIndex++;  
      
      this.stopShowingSequence(sequenceIndex,timer,you)
     
    }, this.speed*2);

  }

  //Cuando la sequencia[i] llegue al numero de la ronda esta parara el Intervalo
  stopShowingSequence(sequenceIndex,timer,you){
    if (sequenceIndex > this.round) {
      this.blockedButtons = false;
      clearInterval(timer)
      let timer1 = setInterval(() => {

        this.toggleTurnStyle(true)
        if (you >= 1) {
          clearInterval(timer1)
        }

        you++;
      }, this.speed*2);
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
        transition.style.left = '3vw'
        transition.innerHTML = "Memoriza la siguiente secuencia"
        this.updateRound(1);
        if (this.fallos == 2) {
          setTimeout(() => this.showSequence(), this.speed * 0.5)
          transition.innerHTML = "Tu Turno"
          transition.style.left = '38vw'
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
   
    transition.classList.toggle('Active-1');
    transition.classList.toggle('Warning');
    transition.innerHTML='🏆';
  }
}


class Player{
  constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }


    
}
const player = new Player('Alice',100);
const simon = new Simon(simonButtons, startButton, round);
simon.init();
