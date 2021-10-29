import React, { Component, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            " Thursday",
            "Friday ",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "No of patients visited",
              data: [32, 39, 23, 35, 20, 44],
              // backgroundColor: ["#f50057"],
              backgroundColor: ["#0077b6"],
            },
            {
              label: "No of patients per month",
              labels: [
                "Janu",
                "Tuesday",
                "Wednesday",
                " Thursday",
                "Friday ",
                "Saturday",
                "Sunday",
              ],
              data: [102, 109, 130, 105, 210, 40],
              backgroundColor: "#9480c9",
            },
          ],
          borderWidth: 1,
        }}
        height={300}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
