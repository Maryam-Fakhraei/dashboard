"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

export default function LineChart() {
  const chartRef = useRef(null);
  const [range, setRange] = useState("day"); // day | week
  const [filteredData, setFilteredData] = useState([]);

  const data = {
    day: {
      labels: [
        "00:00",
        "03:00",
        "06:00",
        "09:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00",
      ],
      values: [22, 20, 18, 25, 27, 30, 26, 24],
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [25, 27, 26, 28, 29, 30, 24],
    },
  };

  useEffect(() => {
    setFilteredData(data[range]);
  }, [range]);

  useEffect(() => {
    if (chartRef.current && filteredData.labels) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, "rgba(5, 31, 100, 0.4)");
      gradient.addColorStop(1, "rgba(4, 178, 164, 0)");

      const newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: filteredData.labels,
          datasets: [
            {
              label: "Temperature",
              data: filteredData.values,
              borderColor: "rgb(4, 178, 164)",
              backgroundColor: gradient,
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: "rgb(5, 31, 100)",
              pointBorderColor: "rgb(4, 178, 164)",
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                font: { size: 14 },
              },
            },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [filteredData]);

  return (
    <div className="w-[90vw] h-[80vh]">
      <div className="mb-4 flex items-center gap-2">
        <label className="font-medium">Time Range:</label>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="border rounded px-2 py-1 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="day">Today (hours)</option>
          <option value="week">This Week (days)</option>
        </select>
      </div>

      <canvas ref={chartRef} />
    </div>
  );
}
