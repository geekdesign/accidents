import React from "react";

function TopCards() {
  return (
    <div className="grid lg:grid-cols-9 gap-4 p-4">
      <div className="lg:col-span-3 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">6'000 CHF</p>
          <p className="text-gray-600">Chiffre d'affaire quotidien</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg h-6">
          <span className="text-green-700 text-xs font-semibold">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-3 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">50'950 CHF</p>
          <p className="text-gray-600">Chiffre d'affaire mensuel</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg h-6">
          <span className="text-green-700 text-xs font-semibold">+14%</span>
        </p>
      </div>
      <div className="lg:col-span-3 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">219'597 CHF</p>
          <p className="text-gray-600">Chiffre d'affaire annuel</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg h-6">
          <span className="text-green-700 text-xs font-semibold">+11%</span>
        </p>
      </div>
    </div>
  );
}

export default TopCards;
