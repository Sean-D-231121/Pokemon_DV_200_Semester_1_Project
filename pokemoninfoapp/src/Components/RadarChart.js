import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const RadarChart = (props) =>{
    const data = {
      labels: [
        "Attack",
        "Defense",
        "Health",
        "Speed",
        "Sp. Defense",
        "Sp. Attack",
      ],
      datasets: [
        {
          label: "Pokemon stats",
          data: [47, 59, 37, 85, 32, 73],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
    return <Radar data={data} />;
}


export default RadarChart;
