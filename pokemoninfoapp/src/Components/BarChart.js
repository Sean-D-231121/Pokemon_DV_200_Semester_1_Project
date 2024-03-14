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
const BarChart = (props) =>{
    const options = {
      Scales: {
        y: {
          min: 1,
          max: 200,
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
      "HP",
      "Attack",
      "Defense",
      "Special attack",
      "Special defense",
      "Speed",
    ];
const data = {
  labels,
  datasets: [
    {
      label: "Stats",
      data:props.stats,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
return <Bar options={options} data={data} />;
}
export default BarChart






  