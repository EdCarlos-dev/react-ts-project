import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import './index.css'


// consumir o api para fazer os graficos


function TenHighestPopulationChart () {
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
    
  ];

  const countries = tenHighestPopulation.map((data) => data.country);
  const populations = tenHighestPopulation.map((data) => data.population);

  const data = {
    labels: countries,
    datasets: [
      {
        label: 'Population',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: populations,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Defina explicitamente como 'y'
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{width: '100%', height: '400px'}} >
      <Chart type='bar' data={data} options={options} />
    </div>
  );
}

export default TenHighestPopulationChart;
