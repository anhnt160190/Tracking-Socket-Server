new Chart(document.getElementById('type-car-chart'), {
  type: 'doughnut',
  data: {
    labels: [
      'Ô tô',
      'xe máy',
      'xe tải',
      'xe bus',
      'xe đạp',
      'người đi bộ',
      'others',
    ],
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
          '#96C0CE',
        ],
        data: [2478, 5267, 734, 784, 433, 200, 132],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Biểu đồ thống kê phần trăm các loại xe',
    },
  },
});

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
        data: [2000, 2000, 1500, 500, 1800],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Biểu đồ thống kê phần trăm màu xe',
    },
  },
});

new Chart(document.getElementById('type-traffic-density'), {
  type: 'line',
  data: {
    labels: [
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
      '24h',
    ],
    datasets: [
      {
        label: 'Series 1', // Name the series
        data: [
          10,
          10,
          10.5,
          10.5,
          10.7,
          10.9,
          20,
          30,
          50,
          10,
          10,
          12,
          10,
          9,
          20,
          20,
          40,
          50,
          40,
          20,
          20,
          15,
          10,
          10,
        ], // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

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
        data: [302, 201, 205, 148, 167, 259, 235, 222, 129, 301, 231, 333],
        label: 'Vụ tai nạn/tháng',
      },
    ],
  },
});