import React, { useState } from "react";
import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TopCards from "@/components/TopCards";
import Donuts from "@/components/Donuts";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-gray-100 min-h-screen ml-20 w-full px-4">
        <Header />
        <TopCards />
        <div className=" p-4 grid lg:grid-cols-12 grid-cols-1 gap-4">
          <BarChart />
          <Donuts />
        </div>
      </main>
    </div>
  );
}
