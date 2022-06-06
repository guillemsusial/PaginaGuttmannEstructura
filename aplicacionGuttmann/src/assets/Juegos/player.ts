export class Player{
    round :any;
    userPosition :any;
    totalRounds :any;
    sequence :any;
    speed :any;
    blockedButtons :any;
    buttons:any;
    fallos :any;
    laSequencia_error:any;
    userSequence:any;
    display :any;
    userObject:any;
    trial:any;
    static createUserData: any;
    constructor(round: number,userPosition: number,totalRounds: number,sequence: never[],speed: number,blockedButtons: boolean,fallos: number,userSequence: never[],userObject: { Round: string; Options: never[]; Sequence: never[]; },trial:boolean) {
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
  