import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeVisualization = ({ data }) => {
  // Calculate total value
  const totalValue = data.reduce((total, item) => total + item.value, 0);

  // Prepare data
  const chartData = {
    labels: data.map(item => item.name), 
    datasets: [
      {
        data: data.map(item => (item.value / totalValue) * 100), // Data as percentage
        backgroundColor: data.map(item => item.color), 
        borderWidth: 0, 
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw.toFixed(2)}%`;
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 10, // Legend box width
            padding: 15,
            generateLabels: function(chart) {
              const data = chart.data;
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
                const percentage = ((value / total) * 100).toFixed(2);
                return {
                  text: `${label} - ${percentage}%`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].backgroundColor[i],
                };
              });
            },
          },
      },
    },
    cutout: "85%", 
    rotation: 225, 
    circumference: 270,
    
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};
export default GaugeVisualization;
