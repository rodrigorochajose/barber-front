import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { capitalize } from "../../../utils/string";

type Props = {
  currentView: 'year' | 'month' | 'day';
  setCurrentView: (view: 'year' | 'month' | 'day') => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export default function CalendarHeader({ currentView, setCurrentView, selectedDate }: Props) {
  const handleViewChange = () => {
    if (currentView === 'day') setCurrentView('month');
    else if (currentView === 'month') setCurrentView('year');
    else if (currentView === 'year') setCurrentView('month');
  };

  const getToggleLabel = () => {
    if (currentView === 'day') return capitalize(format(selectedDate, "MMMM", { locale: ptBR }));
    if (currentView === 'month') return format(selectedDate, "yyyy", { locale: ptBR });
    return "";
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        {currentView !== 'year' && (
          <button
            onClick={handleViewChange}
            className="px-3 py-1 bg-gray-200 rounded-xl"
          >
            {getToggleLabel()}
          </button>
        )}
      </div>
    </div>
  );
}
