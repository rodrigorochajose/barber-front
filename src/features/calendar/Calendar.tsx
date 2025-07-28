import { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import YearView from './components/YearView';
import MonthView from './components/MonthView';
import DayView from './components/DayView';

export default function Calendar() {
  const [currentView, setCurrentView] = useState<'day' | 'month' | 'year'>('day');
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <CalendarHeader
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {currentView === 'year' && (
        <YearView
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'month' && (
        <MonthView
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'day' && (
        <DayView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      )}
    </div>
  );
}
