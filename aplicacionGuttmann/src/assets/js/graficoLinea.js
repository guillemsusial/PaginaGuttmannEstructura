const labels = [
    'Sesion 1',
    'Sesion 2',
    'Sesion 3',
    'Sesion 4',
    'Sesion 5',
    'Sesion 6',
    'Sesion 7',
    'Sesion 8',
    'Sesion 9'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Numero de aciertos',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [1, 4, 10, 6, 15, 9, 11, 16],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const lineChart = new Chart(
    document.getElementById('lineChart'),
    config
  );