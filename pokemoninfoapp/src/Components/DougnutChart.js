import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {
  const data = {
    labels: [
      "Normal",
      "Fighting",
      "Flying",
      "Poison",
      "Ground",
      "Rock",
      "Bug",
      "Ghost",
      "Steel",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Psychic",
      "Ice",
      "Dragon",
      "Dark",
      "Fairy",
    ],
    datasets: [
      {
        label: "Pokemon Types",
        data: [
          158, 100, 149, 102, 93, 102, 104, 92, 91, 103, 186, 152, 110, 136, 66,
          107, 94, 83,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 100, 132, 0.2)",
          "rgba(54, 20, 255, 0.2)",
          "rgba(255, 222, 210, 0.2)",
          "rgba(59, 121, 255, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 100, 132, 1)",
          "rgba(54, 20, 255, 1)",
          "rgba(255, 222, 210, 1)",
          "rgba(59, 121, 255, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data}/>;
};
export default DoughnutChart;
