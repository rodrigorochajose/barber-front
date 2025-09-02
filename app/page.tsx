"use client";

import { useState } from "react";
import { Header } from "./components/header";
import CalendarHeader from "./components/calendar/CalendarHeader";
import YearView from "./components/calendar/YearView";
import MonthView from "./components/calendar/MonthView";
import DayView from "./components/calendar/DayView";

export default function Home() {
  const [currentView, setCurrentView] = useState<"day" | "month" | "year">(
    "day"
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="relative">
      <Header />
      <div className="w-full h-screen flex justify-center bg-black">
        <div className="w-lg h-lg mt-10 mb-10 p-4 bg-secondary-dark rounded-2xl">
          <CalendarHeader
            currentView={currentView}
            setCurrentView={setCurrentView}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          {currentView === "year" && (
            <YearView
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setCurrentView={setCurrentView}
            />
          )}
          {currentView === "month" && (
            <MonthView
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setCurrentView={setCurrentView}
            />
          )}
          {currentView === "day" && (
            <DayView
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
