import { format, isThisMonth, setMonth } from "date-fns";
import { ptBR } from "date-fns/locale";
import { capitalize } from "../../../utils/string";

type Props = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentView: (view: "month") => void;
};

export default function YearView({ selectedDate, setSelectedDate, setCurrentView }: Props) {
  const months = Array.from({ length: 12 }, (_, i) =>
    capitalize(format(new Date(selectedDate.getFullYear(), i, 1), "MMMM", { locale: ptBR }))
  );

  const handleMonthClick = (monthIndex: number) => {
    const newDate = setMonth(selectedDate, monthIndex);
    setSelectedDate(newDate);
    setCurrentView("month");
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {months.map((month, index) => {

        const monthDate = new Date(selectedDate.getFullYear(), index, 1);
        const thisMonth = isThisMonth(monthDate);
        
        const baseClass = "p-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-center";
        const monthClass = thisMonth ? "bg-gray-300 text-black" : "hover:bg-gray-100";

        return (
          <button
          key={month}
          onClick={() => handleMonthClick(index)}
          className={`${baseClass} ${monthClass}`}
        >
          {month}
        </button>
        )
        }
        
      )}
    </div>
  );
}
