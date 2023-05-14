"use client";

import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

type BackgroundColors = {
  [key: string]: string;
};

type HoverBackgroundColors = {
  [key: string]: string;
};

const Donuts = () => {
  const [accidentsData, setAccidentsData] = useState<AccidentData[] | null>(
    null
  );

  useEffect(() => {
    import("../../public/accidents.json")
      .then((module) => {
        const data = module.default;
        setAccidentsData(data.accidents);
      })
      .catch((error) => {
        console.error("Failed to load accidents data:", error);
      });
  }, []);

  const countAccidentsByType = () => {
    const countMap: { [type: string]: number } = {};
    if (accidentsData) {
      accidentsData.forEach((accident) => {
        if (accident.typeAccident in countMap) {
          countMap[accident.typeAccident]++;
        } else {
          countMap[accident.typeAccident] = 1;
        }
      });
    }
    return countMap;
  };

  const accidentTypes = Object.keys(countAccidentsByType());
  const accidentCounts = Object.values(countAccidentsByType());

  // Couleurs personnalisées pour chaque type d'accident
  const backgroundColors: BackgroundColors = {
    "Presqu'accident": "rgba(239, 68, 68, 0.6)", // red-200
    "Accident Pro": "rgba(239, 68, 68, 1)", // red-500
    "Accident bagatelle Pro": "rgba(239, 68, 68, 0.8)",
    "Accident Non-Pro": "rgba(255, 193, 7, 1)", // amber-500
    "Accident bagatelle Non-Pro": "rgba(255, 193, 7, 0.6)", // amber-200
  };

  const hoverBackgroundColors: HoverBackgroundColors = {
    "Presqu'accident": "rgba(239, 68, 68, 0.6)", // red-200
    "Accident Pro": "rgba(239, 68, 68, 1)", // red-500
    "Accident bagatelle Pro": "rgba(239, 68, 68, 0.8)",
    "Accident Non-Pro": "rgba(255, 193, 7, 1)", // amber-500
    "Accident bagatelle Non-Pro": "rgba(255, 193, 7, 0.6)", // amber-200
  };

  const backgroundColorArray = accidentTypes.map(
    (type) => backgroundColors[type]
  );
  const hoverBackgroundColorArray = accidentTypes.map(
    (type) => hoverBackgroundColors[type]
  );

  const data = {
    labels: accidentTypes,
    datasets: [
      {
        data: accidentCounts,
        backgroundColor: backgroundColorArray,
        hoverBackgroundColor: hoverBackgroundColorArray,
      },
    ],
  };

  return (
    <div className="w-full lg:col-span-6 relative h-[60vh] m-auto p-4 border rounded-lg bg-white">
      {accidentsData ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            Nombre d'accidents par types
          </h2>
          <div className="h-[50vh] flex items-center justify-center">
            <Doughnut data={data} />
          </div>
        </>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};

export default Donuts;
