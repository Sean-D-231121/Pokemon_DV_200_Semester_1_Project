import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () =>{
    const options = {
      Scales: {
        x: {
          min: 1,
          max: 100,
        },
      },
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: true,
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    };
    const labels = [
      "Attack",
      "Defense",
      "Health",
      "Speed",
      "SP. Defense",
      "SP.Attack",
    ];
const data = {
  labels,
  datasets: [
    {
      label: "Stats",
      data:[50,123,122,55,23,34],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
return <Bar options={options} data={data} />;
}
export default BarChart






  