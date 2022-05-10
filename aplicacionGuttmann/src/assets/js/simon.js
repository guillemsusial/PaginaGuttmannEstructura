const round = document.getElementById('round');
const simonButtons = document.getElementsByClassName('card');
const startButton = document.getElementById('startButton');

class Simon {
    constructor(simonButtons, startButton, round) {
        this.round = 0;
        this.userPosition = 0;
        this.totalRounds = 6;
        this.sequence = [];
        this.speed = 1000;
        this.blockedButtons = true;
        this.buttons = Array.from(simonButtons);
       
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
        this.display.startButton.disabled = true;         
        this.updateRound(0);
        this.userPosition = 0;
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
        return Array.from({length: this.totalRounds}, () =>  this.getRandomColor());
    }

    // Devuelve un número al azar entre 0 y 11
    getRandomColor() {
        
        return Math.floor(Math.random() * 11);
    }

    // Ejecuta una función cuando se hace click en un botón
    buttonClick(value) {
        console.log(value);
        !this.blockedButtons && this.validateChosenColor(value);
    }

    // Valida si el boton que toca el usuario corresponde a al valor de la secuencia
    validateChosenColor(value) {
        if(this.sequence[this.userPosition] === value) {
           
            if(this.round === this.userPosition) {
                this.updateRound(this.round + 1);
                this.speed /= 1.02;
                this.isGameOver();
            } else {
                this.userPosition++;
            }
        } else {
            this.gameLost();
        }
    }

    // Verifica que no haya acabado el juego
    isGameOver() {
        if (this.round === this.totalRounds) {
            this.gameWon();
        } else {
            this.userPosition = 0;
            this.showSequence();
        };
    }

    // Muestra la secuencia de botones que va a tener que tocar el usuario
    showSequence() {
        this.blockedButtons = true;
        let sequenceIndex = 0;
        let timer = setInterval(() => {
            const button = this.buttons[this.sequence[sequenceIndex]];
          
            this.toggleButtonStyle(button)
            setTimeout( () => this.toggleButtonStyle(button), this.speed / 2)
            
            sequenceIndex++;
            if (sequenceIndex > this.round) {
                this.blockedButtons = false;
                clearInterval(timer);
            }
        }, this.speed);
    }

    // Pinta los botones para cuando se está mostrando la secuencia
    toggleButtonStyle(button) {
        button.classList.toggle('Active');
    }

    // Actualiza el simon cuando el jugador pierde
    gameLost() {
    
        this.display.startButton.disabled = false; 
        this.blockedButtons = true;
    }

    // Muestra la animacón de triunfo y actualiza el simon cuando el jugador gana
    gameWon() {
        this.display.startButton.disabled = false; 
        this.blockedButtons = true;
        this.buttons.forEach(element =>{
            element.classList.add('winner');
        });
        this.updateRound('🏆');
    }
}

const simon = new Simon(simonButtons, startButton, round);
simon.init();