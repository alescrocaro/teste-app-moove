import React /* { useState, useEffect } */ from 'react';
import { Chart } from 'react-google-charts';

const data = [
  [
    'Element',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify'
    }
  ],
  ['Copper', 8.94, '#b87333', null],
  ['Silver', 10.49, 'silver', null],
  ['Gold', 19.3, 'gold', null],
  ['Platinum', 21.45, 'color: #e5e4e2', null]
];

const options = {
  width: '100%',
  height: '40rem',
  bar: { groupWidth: '95%' },
  legend: { position: 'none' }
};

export default function MyChart() {
  //const [movies, setMovies] = useState([]);

  return (
    <Chart chartType="BarChart" width="100%" data={data} options={options} />
  );
}
