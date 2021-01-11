function renderChartCarPercent(data) {
  if (data.length == 0) return;
  new Chart(document.getElementById('type-car-chart'), {
    type: 'doughnut',
    data: {
      labels: ['Ô tô', 'xe máy', 'xe bus', 'xe đạp', 'người đi bộ', 'others'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850',
            '#74828F',
          ],
          data,
        },
      ],
    },
  });
}

function renderChartCarColor(data) {
  if (data.length == 0) return;
  new Chart(document.getElementById('type-car-color-chart'), {
    type: 'doughnut',
    data: {
      labels: ['đen', 'trắng', 'xanh đen', 'đỏ', 'others'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            '#000',
            '#99ccff',
            '#000033',
            '#FF0000',
            '#FFFFFFFF00',
          ],
          data,
        },
      ],
    },
  });
}

function renderChartCarDestiny(data) {
  if (data.length == 0) return;
  new Chart(document.getElementById('type-traffic-density'), {
    type: 'line',
    data: {
      labels: [
        '0h',
        '1h',
        '2h',
        '3h',
        '4h',
        '5h',
        '6h',
        '7h',
        '8h',
        '9h',
        '10h',
        '11h',
        '12h',
        '13h',
        '14h',
        '15h',
        '16h',
        '17h',
        '18h',
        '19h',
        '20h',
        '21h',
        '22h',
        '22h',
        '23h',
      ],
      datasets: [
        {
          label: 'mật độ xe / giờ',
          data,
          fill: false,
          borderColor: '#2196f3',
          backgroundColor: '#2196f3',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function renderChartCarAccident(data) {
  if (data.length == 0) return;
  new Chart(document.getElementById('type-bar-chart'), {
    type: 'bar',
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          data,
          label: 'Vụ tai nạn/tháng',
        },
      ],
    },
  });
}

async function Init() {
  const [carPercent, carColor, carDestiny, accident] = await Promise.all([
    axios.get('/api/chart/car_percent'),
    axios.get('/api/chart/car_color'),
    axios.get('/api/chart/car_destiny'),
    axios.get('/api/chart/accident'),
  ]);

  renderChartCarPercent(carPercent.data);
  renderChartCarColor(carColor.data);
  renderChartCarDestiny(carDestiny.data);
  renderChartCarAccident(accident.data);
}

Init();
