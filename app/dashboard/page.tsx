"use client";
import React, { useEffect, useRef, useState } from "react";
import { BarChartComponent } from "../components/charts/BarChartComponent";
import { AreaChartComponent } from "../components/charts/AreaChartCompoent";
import { PieChartComponent } from "../components/charts/PieChartComponent";
import CardList from "../components/CardList";
import TodoList from "../components/TodoList";
import BreadcrubNav from "../components/BreadcrubNav";

// vreadcrub
const breadcrubNavItems = [{ label: "Dashboard" }];

export default function DashboardPage() {
  const barChartRef = useRef<HTMLDivElement>(null);
  const [barChartHeight, setBarChartHeight] = useState<number>(0);

  const areaChartRef = useRef<HTMLDivElement>(null);
  const [areaChartHeight, setAreaChartHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeights = () => {
      if (barChartRef.current) {
        setBarChartHeight(barChartRef.current.offsetHeight);
      }
      if (areaChartRef.current) {
        setAreaChartHeight(areaChartRef.current.offsetHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div className="flex-col space-y-3 gap-y-4">
      <BreadcrubNav items={breadcrubNavItems} />

      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {/* div1 */}
        <div
          className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"
          ref={barChartRef}
        >
          <BarChartComponent />
        </div>

        {/* div2 */}
        <div
          className="bg-primary-foreground p-4 rounded-lg overflow-y-auto"
          style={{ height: barChartHeight }}
        >
          <CardList title="latestTranscitions" />
        </div>

        {/* div3 */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <PieChartComponent />
        </div>

        {/* div4 */}
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          <TodoList />
        </div>

        {/* div5 */}
        <div
          className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"
          ref={areaChartRef}
        >
          <AreaChartComponent />
        </div>

        {/* div6 */}
        <div
          className="bg-primary-foreground p-4 rounded-lg overflow-y-auto"
          style={{ height: areaChartHeight }}
        >
          <CardList title="popularContent" />
        </div>
      </div>
    </div>
  );
}
