import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isToday,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  addDays,
} from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentView: (view: "day") => void;
};

export default function MonthView({
  selectedDate,
  setSelectedDate,
  setCurrentView,
}: Props) {
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
    <div className="space-y-2 mt-20">
      <div className="grid grid-cols-7 gap-2 border-b-2 border-accent-orange pb-2">
        {weekDays.map((day) => (
          <div
            key={day.toISOString()}
            className="text-center font-bold text-sm text-text-light font-sans"
          >
            {format(day, "EEEEEE", { locale: ptBR })}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-5">
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, selectedDate);
          const today = isToday(day);
          const baseClasses =
            "text-center p-2 rounded-lg text-white font-sans font-medium transition-colors duration-300";
          const dayClass = today
            ? "bg-accent-orange text-black font-bold"
            : "hover:bg-accent-orange/60";

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
