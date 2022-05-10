const polarData = {
  labels: [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
    'Categoria 5'
  ],
  datasets: [{
    label: 'Pruebas jugadas de cada categoria',
    data: [7, 5, 3, 1, 13],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};

const polarConfig = {
  type: 'polarArea',
  data: polarData,
  options: {}
};

const polarChart = new Chart(
  document.getElementById('polarChart'),
  polarConfig
);
