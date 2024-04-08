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
        "HP",
        "Attack",
        "Defense",
        "Special attack",
        "Special defense",
        "Speed",
      ],
      datasets: [
        {
          label: "Pokemon stats",
          data: props.stats,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
    return (
    <>
    <h3 style={{textDecoration:"underline"}}>Stats distribution</h3>
      <Radar data={data} />
    </>
    )
}


export default RadarChart;
