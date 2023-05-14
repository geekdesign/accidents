"use client";

import React, { useEffect, useState } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

type AccidentData = {
  id: number;
  victime: number;
  dateHeureAccident: number;
  departement: string;
  service: string;
  description: string;
  site: string;
  emplacement: string;
  etatAnalyse: string;
  responsable: number;
  typeAccident: string;
};

const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const BarChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  function sortMonthsByCurrentYear(months: string[]) {
    const currentYear = new Date().getFullYear();
    return months.sort((a, b) => {
      const monthIndexA = monthNames.indexOf(a);
      const monthIndexB = monthNames.indexOf(b);
      return monthIndexA - monthIndexB;
    });
  }

  useEffect(() => {
    // Charger les données à partir du fichier accidents.json
    import("../../public/accidents.json")
      .then((module) => {
        const data = module.default;
        const accidentsData: {
          accidents: AccidentData[];
        } = data;
        const currentYear = new Date().getFullYear().toString();
        const groupedData: { [month: string]: { [type: string]: number } } = {};

        accidentsData.accidents.forEach((accident: AccidentData) => {
          const date = new Date(accident.dateHeureAccident);
          const year = date.getFullYear().toString();
          const month = date.toLocaleString("default", { month: "long" });

          if (year === currentYear) {
            if (!(month in groupedData)) {
              groupedData[month] = {
                "Presqu'accident": 0,
                "Accident Pro": 0,
                "Accident Non-Pro": 0,
                "Accident bagatelle Non-Pro": 0,
              };
            }

            groupedData[month][accident.typeAccident]++;
          }
        });

        const backgroundColors: { [type: string]: string } = {
          "Presqu'accident": "rgba(239, 68, 68, 0.6)", // red-200
          "Accident Pro": "rgba(239, 68, 68, 1)", // red-500
          "Accident bagatelle Pro": "rgba(239, 68, 68, 0.8)",
          "Accident Non-Pro": "rgba(255, 193, 7, 1)", // amber-500
          "Accident bagatelle Non-Pro": "rgba(255, 193, 7, 0.6)", // amber-200
        };

        const hoverBackgroundColors: { [type: string]: string } = {
          "Presqu'accident": "rgba(239, 68, 68, 0.6)", // red-200
          "Accident Pro": "rgba(239, 68, 68, 1)", // red-500
          "Accident bagatelle Pro": "rgba(239, 68, 68, 0.8)",
          "Accident Non-Pro": "rgba(255, 193, 7, 1)", // amber-500
          "Accident bagatelle Non-Pro": "rgba(255, 193, 7, 0.6)", // amber-200
        };
        const months = sortMonthsByCurrentYear(Object.keys(groupedData));

        const datasets = Object.keys(backgroundColors).map((type) => ({
          label: type,
          data: months.map((month) => groupedData[month][type]),
          backgroundColor: backgroundColors[type],
          hoverBackgroundColor: hoverBackgroundColors[type],
        }));

        setChartData({
          labels: months,
          datasets: datasets,
        });
      })
      .catch((error) => {
        console.error("Failed to load accidents data:", error);
      });
  }, []);

  const chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Mois",
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Nombre d'accidents",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full lg:col-span-6 relative h-[60vh] m-auto p-4 border rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">
        Accidents par mois de l'année courante
      </h2>
      <div className="h-[50vh] flex items-center justify-center">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
