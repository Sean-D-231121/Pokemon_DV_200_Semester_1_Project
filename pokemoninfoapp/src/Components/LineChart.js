import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
const LineChart = (props) => {
  const data = {
    labels: props.getLabels,
    datasets: [
      {
        label: "Pokemon experience",
        data: props.getData,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 1,
        max: 1500000
      },
    },
  };

  return (
    <>
      <h2>Pokemon experience needed per level</h2>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
