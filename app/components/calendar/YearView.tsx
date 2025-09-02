import { capitalize } from "@/app/utils/string";
import { format, isThisMonth, setMonth } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentView: (view: "month") => void;
};

export default function YearView({
  selectedDate,
  setSelectedDate,
  setCurrentView,
}: Props) {
  const months = Array.from({ length: 12 }, (_, i) =>
    capitalize(
      format(new Date(selectedDate.getFullYear(), i, 1), "MMMM", {
        locale: ptBR,
      })
    )
  );

  const handleMonthClick = (monthIndex: number) => {
    const newDate = setMonth(selectedDate, monthIndex);
    setSelectedDate(newDate);
    setCurrentView("month");
  };

  return (
    <div className="grid grid-cols-3 gap-6 h-full p-2">
      {months.map((month, index) => {
        const monthDate = new Date(selectedDate.getFullYear(), index, 1);
        const thisMonth = isThisMonth(monthDate);

        const baseClass =
          "p-2 h-20 flex items-center justify-center font-bebas text-2xl rounded-2xl transition-all duration-300 focus:outline-none shadow-md shadow-black hover:shadow-xl hover:scale-105";

        const monthClass = thisMonth
          ? "bg-accent-orange text-text-light"
          : "bg-primary-dark text-white hover:bg-accent-orange";

        return (
          <button
            key={month}
            onClick={() => handleMonthClick(index)}
            className={`${baseClass} ${monthClass}`}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
}
