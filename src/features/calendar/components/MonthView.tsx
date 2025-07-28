import { startOfMonth, endOfMonth, eachDayOfInterval, format, isToday, startOfWeek, endOfWeek, isSameMonth, addDays } from "date-fns";

type Props = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentView: (view: "day") => void;
};

export default function MonthView({ selectedDate, setSelectedDate, setCurrentView }: Props) {
  const start = startOfWeek(startOfMonth(selectedDate), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(selectedDate), { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  const days = eachDayOfInterval({
    start,
    end,
  });

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    setCurrentView("day");
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div key={day.toISOString()} className="text-center font-medium text-sm text-gray-600">
            {format(day, "EEEEE")}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, selectedDate);
          const today = isToday(day);
          const baseClasses = "text-center p-2 rounded-lg";
          const dayClass = today ? "bg-gray-300 text-black" : "hover:bg-gray-200";

          if (!isCurrentMonth) {
            return <div key={day.toISOString()} className="p-2" />;
          }

          return (
            <button
              key={day.toISOString()}
              onClick={() => handleDayClick(day)}
              className={`${baseClasses} ${dayClass}`}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
