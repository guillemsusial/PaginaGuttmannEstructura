
  
  const data = {
   
    datasets: [{
      label: 'Numero de aciertos',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [{
        x: '2021-11-06 23:39:30',
        y: 1
    }, {
        x: '2021-11-07 01:00:28',
        y: 3
    }, {
        x: '2021-11-07 09:00:28',
        y: 8
    },{
      x: '2021-11-06 23:39:31',
      y: 1
  }, {
      x: '2021-11-07 01:00:22',
      y: 3
  }, {
      x: '2021-11-07 09:00:20',
      y: 8
  }],
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