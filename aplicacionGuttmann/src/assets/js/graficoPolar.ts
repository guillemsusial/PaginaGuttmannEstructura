import { Chart } from "chart.js";
export class graficoPolar{


    constructor(){

    }
    init(): Chart{
const polarData = {
    labels: [
      'LLums Inverses',
      'Memoria Curt Termini',
      'Reconeixament',
      'Series Logiques',
      'Matriu de Figures',
      'Inhibicio',
      'Velocitat Visuomotora',
      'Figures Rotades',
      'Memoria a llarg termini'
    ],
    datasets: [{
      label: 'YOUR DATA',
      data: [80, 70, 65, 50, 90, 70,50,70,90],
      fill: true,
      backgroundColor: 'rgba(0, 142, 115, 0.2)',
      borderColor: 'rgb(99, 255, 222)',   
      pointBackgroundColor: 'rgb(0, 116, 91)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(0, 142, 115)'
    }]
  };
  
  const polarConfig:Chart = new Chart('', {
    type: 'radar',
    data: 
      polarData
    ,
    options: {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
  });
console.log(polarConfig.config);
  return polarConfig;
}
}


 
  