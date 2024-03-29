import { CrudService } from 'src/app/services/crud.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { serieLuces } from 'src/app/services/serieLuces';
import { resultadosLuces } from 'src/app/services/resultadosLuces';
import { Player } from './player';
import { Router } from '@angular/router';

export class Simon {
  round: any;
  userPosition: any;
  totalRounds: any;
  sequence: any;
  speed: any;
  blockedButtons: any;
  buttons: any;
  fallos: any;
  laSequencia_error: any;
  userSequence: any;
  display: any;
  userObject: any;
  roundHTML: any;
  simonButtons: any;
  transition: any;
  coordUser: any;
  trial:any;
  crudService: CrudService;
  router: Router;

  pruebaUser:any;
  pruebaSecuence:any;

  sesionID:any;

  constructor(player: Player,crudservice:CrudService,routing: Router) {
    this.roundHTML = document.getElementById('round');
    this.simonButtons = document.getElementsByClassName('card');
    this.transition = document.getElementById('transition');
    this.round = player.round;
    this.userPosition = player.userPosition;
    this.totalRounds = player.totalRounds;
    this.sequence = player.sequence;
    this.speed = player.speed;
    this.blockedButtons = player.blockedButtons;
    this.buttons = Array.from(this.simonButtons);
    this.fallos = player.fallos;
    this.laSequencia_error = player.laSequencia_error;
    this.userSequence = player.userSequence;
    this.userObject = player.userObject;
    this.pruebaUser = "";
    this.pruebaSecuence = "";
    this.crudService = crudservice;
    this.router = routing;
    this.trial = player.trial;
    player.createUserData();
  }

  // Inicia el Simon
  init() {
    this.roundHTML.innerHTML = '0/' + this.totalRounds;
    this.countDown();
    console.log(this.trial)
  }
  /*Obtener id de la sesion para BBDD*/
  getSesionId(sesionID:any){
    this.sesionID = sesionID;
  }

  //Contador
  countDown() {
    let sequenceIndex = 3;

    let timer = setInterval(() => {
      this.transition.classList.add('Active-1');
      if (sequenceIndex != 0) this.transition.innerHTML = sequenceIndex;

      if (sequenceIndex == 0) {
        this.transition.innerHTML = 'Memoriza la siguiente secuencia';
      }
      if (sequenceIndex == -1) {
        this.transition.classList.remove('Active-1');
        this.startGame();
        clearInterval(timer);
      }
      sequenceIndex--;
    }, this.speed * 1.2);
  }

  // Comienza el juego
  startGame() {
    this.transition.innerHTML = 'Tu turno';

    this.updateRound(1);

    this.userPosition = 1;

    this.buttons.forEach((element: any, i: any) => {
      element.onclick = () => this.buttonClick(i);      
    });

    this.showSequence();
  }

  // Actualiza la ronda y el tablero
  updateRound(value: number) {
    this.round = value;
    this.roundHTML.textContent = `${this.round}/${this.totalRounds}`;
  }

  // Crea el array aleatorio de botones
  createSequence() {
    return Array.from(
      {
        length: this.totalRounds,
      },
      () => this.getRandomColor()
    );
  }

  // Devuelve un número al azar entre 0 y 11
  getRandomColor() {
    return Math.floor(Math.random() * 11);
  }

  // Ejecuta una función cuando se hace click en un botón
  buttonClick(value: any) {
    !this.blockedButtons && this.validateChosenColor(value);
  }

  // Valida si el boton que toca el usuario corresponde a al valor de la secuencia
  validateChosenColor(value: any) {
      //console.log(this.userSequence);
     /*userSconsole.log("POSITION->"+this.userPosition)
      console.log("VALUE->"+value);
      console.log(this.laSequencia_error);*/

    this.userSequence[this.round].Options.push(value);
    this.userSequence[this.round].Sequence.push(
      this.sequence[this.userPosition]
    );

      this.pruebaUser += ("-"+this.userSequence[this.round].Options.pop());
      this.pruebaSecuence += ("-"+this.userSequence[this.round].Sequence.pop());

    if (this.sequence[this.userPosition] === value && !this.laSequencia_error) {
     
      if (0 === this.userPosition) {

        if (this.trial==false){
          let objetoLuces = new serieLuces();
          objetoLuces.idSesion = this.sesionID;
          objetoLuces.ronda = this.round;
          objetoLuces.coordenadasPresentadas = this.pruebaSecuence.slice(1);
          objetoLuces.coordenadasUsuario = this.pruebaUser.slice(1);
          objetoLuces=JSON.parse(JSON.stringify(objetoLuces));

          //console.log(objetoLuces);

          this.crudService.AddSerieLuces(objetoLuces).subscribe((data) => {
            //console.log(data);
          });
        }

        this.pruebaUser="";
        this.pruebaSecuence="";

        this.round++;
        this.updateRound(this.round);
        this.userPosition = this.round;
        this.speed /= 1.02;
        this.isGameOver();
      } else {
        this.userPosition--;
      }
    } else {
      
      this.laSequencia_error = true;
      if (0 === this.userPosition && this.laSequencia_error) {

        if (this.trial==false){
          let objetoLuces = new serieLuces();
          objetoLuces.idSesion = this.sesionID;
          objetoLuces.ronda = this.round;
          objetoLuces.coordenadasPresentadas = this.pruebaSecuence.slice(1);
          objetoLuces.coordenadasUsuario = this.pruebaUser.slice(1);
          objetoLuces=JSON.parse(JSON.stringify(objetoLuces));

          //console.log(objetoLuces);

          this.crudService.AddSerieLuces(objetoLuces).subscribe((data) => {
            //console.log(data);
          });
        }

        this.pruebaUser="";
        this.pruebaSecuence="";

        //crud
        this.gameLost();
        this.userPosition = this.round;
        this.laSequencia_error = false; 
        
        
        this.userPosition++;
      }
      this.userPosition--;
    }
  }
//////////////////////////////////////////////////////////////////////////////
  
//////////////////////////////////////////////////////////////////////////////

  // Verifica que no haya acabado el juego
  isGameOver() {
    if (this.round === this.totalRounds) {
      this.gameWon();
    } else {
      this.showSequence();
    }
  }

  // Muestra la secuencia de botones que va a tener que tocar el usuario
  showSequence() {
    this.sequence = this.createSequence();
    this.blockedButtons = true;
    let sequenceIndex = 0;
    let you = 0;
    let timer = setInterval(() => {
      let button = this.buttons[this.sequence[sequenceIndex]];

      this.toggleButtonStyle(button);

      setTimeout(() => this.toggleButtonStyle(button), this.speed);

      sequenceIndex++;

      this.stopShowingSequence(sequenceIndex, timer, you);
    }, this.speed * 2);
  }

  //Cuando la sequencia[i] llegue al numero de la ronda esta parara el Intervalo
  stopShowingSequence(sequenceIndex: any, timer: any, you: any) {
    if (sequenceIndex > this.round) {
      this.blockedButtons = false;
      clearInterval(timer);
      let timer1 = setInterval(() => {
        this.toggleTurnStyle(true);
        if (you >= 1) {
          clearInterval(timer1);
        }

        you++;
      }, this.speed * 1.2);
    }
  }

  // Pinta los botones para cuando se está mostrando la secuencia
  toggleButtonStyle(button: any) {
    //console.log(button);
    button.classList.toggle('Active');
  }

  //Añade y quita classes segun el resultado del usuario
  toggleTurnStyle(value: any) {
    /*ACIERTAS */
    if (value) {
      this.transition.classList.toggle('Active-1');
      this.transition.classList.toggle('Guess');
    }

    /*SI FALLAS TE DA 1 OPORTUNIDAD MAS */

    if (!value) {
      this.fallos++;
      if (this.fallos <= 2) {
        this.transition.classList.toggle('Active-1');
        this.transition.classList.toggle('Warning');
        this.transition.innerHTML = 'Memoriza la siguiente secuencia';
        this.updateRound(this.round);
        if (this.fallos == 2) {
          setTimeout(() => this.showSequence(), this.speed * 0.5);
          this.transition.innerHTML = 'Tu Turno';
        }

        /*SI FALLAS POR SEGUNDA VEZ SE ACABARA EL JUEGO */
      } else {
        this.transition.classList.add('Active-1');
        this.transition.classList.add('Error');
        this.transition.innerHTML = 'FALLASTE';
        if (this.fallos == 4) {
          //console.log(this.round);

          if (this.trial==false){
            let objetoResultadosLuces = new resultadosLuces();
            objetoResultadosLuces.idSesion = this.sesionID;
            objetoResultadosLuces.trialSuperado = "1";
            objetoResultadosLuces.rondaMaxima = this.round;
            objetoResultadosLuces=JSON.parse(JSON.stringify(objetoResultadosLuces));
            //console.log(objetoResultadosLuces);

            this.crudService.AddResultadosLuces(objetoResultadosLuces).subscribe((data) => {
              console.log(data);
            });
          }

          this.router.navigateByUrl('game/simon');
        }
      }
    }
  }

  // Actualiza el simon cuando el jugador pierde
  gameLost() {
    console.log("Has perdido");
    this.blockedButtons = true;
    let you = 0;
    let timer1 = setInterval(() => {
      this.toggleTurnStyle(false);
      if (you >= 1) {
        clearInterval(timer1);
      }

      you++;
    }, this.speed * 1.5);
  }

  // Muestra la animacón de triunfo y actualiza el simon cuando el jugador gana
  gameWon() {
    this.blockedButtons = true;

    if (this.trial==false){
      let objetoResultadosLuces = new resultadosLuces();
      objetoResultadosLuces.idSesion = this.sesionID;
      objetoResultadosLuces.trialSuperado = "1";
      objetoResultadosLuces.rondaMaxima = this.round;
      objetoResultadosLuces=JSON.parse(JSON.stringify(objetoResultadosLuces));
      console.log(objetoResultadosLuces);

      this.crudService.AddResultadosLuces(objetoResultadosLuces).subscribe((data) => {
        console.log(data);
      });
    }

    this.transition.classList.toggle('Active-1');
    this.transition.classList.toggle('Warning');
    this.transition.innerHTML = '🏆';

    setTimeout(() => {
      this.router.navigateByUrl('game/simon');
    }, 2000);
  }
}
