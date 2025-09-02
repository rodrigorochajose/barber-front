import { startOfWeek, addDays, isSameDay, format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function DayView({ selectedDate, setSelectedDate }: Props) {
  const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(start, i));

  const startHour = 8;
  const endHour = 20;

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2 mb-4">
        {weekDays.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const baseClasses = "px-3 py-1 rounded-xl";
          const selectedClasses = isSelected
            ? "bg-accent-orange text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200";

          return (
            <div className="flex flex-col">
              <div className="text-sm font-medium text-center">
                {format(day, "EEEEEE", { locale: ptBR })}
              </div>
              <button
                key={day.toISOString()}
                onClick={() => setSelectedDate(day)}
                className={`${baseClasses} ${selectedClasses}`}
              >
                <div className="text-lg font-bold">{format(day, "d")}</div>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <h1>
          {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })}
        </h1>
      </div>

      <div className="border-t pt-2">
        {Array.from({ length: endHour - startHour + 1 }, (_, i) => {
          const hour = startHour + i;

          return (
            <div
              key={hour}
              className="py-1 border-b text-sm text-gray-600 text-center"
            >
              {hour.toString().padStart(2, "0")}:00
            </div>
          );
        })}
      </div>
    </div>
  );
}
