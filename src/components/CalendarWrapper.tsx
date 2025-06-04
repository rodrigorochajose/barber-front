import { useState } from "react";
import YearView from "./YearView";
import MonthView from "./MonthView";
import DayView from "./DayView";
import CalendarHeader from "./CalendarHeader";

export default function CalendarWrapper() {
  const [currentView, setCurrentView] = useState<"day" | "month" | "year">("day");
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-4 max-w-5xl mx-auto">
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
      {currentView === "day" && <DayView setSelectedDate={setSelectedDate} selectedDate={selectedDate} />}
    </div>
  );
}
