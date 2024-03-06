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
        label: "Stocks per month",
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
        max: 100,
      },
    },
  };

  return (
    <>
      <h2>Stocks for GoodToGo</h2>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
