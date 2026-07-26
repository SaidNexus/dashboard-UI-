<<<<<<< HEAD
import dayjs from "dayjs";
import { useEffect, useState, useContext } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Mycontext } from "../../Context/MyContext";

export default function MainCalender() {
  const { setDate } = useContext(Mycontext);
  const [calendar, setCalendar] = useState([]);
  const [choosedDay, setChooseDay] = useState(0);
  const [month, setMonth] = useState("");
  const [indexMonth, setIndexMonth] = useState(0);
  const [displayedDays, setDisplayedDays] = useState([]); 
  const [year, setYear] = useState(0);
  const [indexYear, setIndexYear] = useState(0);

  useEffect(() => {
    const updateCalendar = (monthOffset = 0, yearOffset = 0) => {
      const refDate = dayjs().add(yearOffset, "year").add(monthOffset, "month");
      const daysnum = refDate.daysInMonth();
      const firstDay = refDate.startOf("month").day();
      const currentDays = Array.from({ length: daysnum }, (_, i) => i + 1);
      setDisplayedDays(Array.from({ length: firstDay }, () => null)); 
      setCalendar(currentDays);
      setMonth(refDate.format("MMMM"));
      setYear(refDate.year());
    };

    const today = dayjs();
    setChooseDay(today.date());
    updateCalendar(0, 0);
  }, []);

  function nextDay() {
    if (choosedDay === calendar[calendar.length - 1]) {
      setIndexMonth((index) => {
        const nextIndex = index + 1;
        const refDate = dayjs().add(nextIndex, "month");
        const daysnum = refDate.daysInMonth();
        const firstDay = refDate.startOf("month").day();
        setDisplayedDays(Array.from({ length: firstDay }, () => null));
        setCalendar(Array.from({ length: daysnum }, (_, i) => i + 1));
        setMonth(refDate.format("MMMM"));
        setChooseDay(1);

        if (month === "December") {
          setIndexYear((y) => {
            const newY = y + 1;
            setYear(dayjs().add(newY, "year").year());
            return newY;
          });
        }
        return nextIndex;
      });
    } else {
      setChooseDay((d) => d + 1);
    }
  }

  function dayBefore() {
    if (choosedDay === calendar[0]) {
      if (month === "January") {
        setIndexYear((item) => {
          const nextYear = item - 1;
          setYear(dayjs().add(nextYear, "year").year());
          return nextYear;
        });
      }
      setIndexMonth((index) => {
        const nextIndex = index - 1;
        const refDate = dayjs().add(nextIndex, "month");
        const daysnum = refDate.daysInMonth();
        const firstDay = refDate.startOf("month").day();
        setDisplayedDays(Array.from({ length: firstDay }, () => null));
        setCalendar(Array.from({ length: daysnum }, (_, i) => i + 1));
        setMonth(refDate.format("MMMM"));
        setChooseDay(daysnum);
        return nextIndex;
      });
    } else {
      setChooseDay((d) => d - 1);
    }
  }

  function handleToDay() {
    const today = dayjs();
    setChooseDay(today.date());
    setMonth(today.format("MMMM"));
    setIndexMonth(0);
    setIndexYear(0);
    setYear(today.year());
    const firstDay = today.startOf("month").day();
    setDisplayedDays(Array.from({ length: firstDay }, () => null));
  }
  const fullCalendar = [...displayedDays, ...calendar];
  const rows = Math.ceil(fullCalendar.length / 7);

  return (
    <div className="p-12 bg-white/50 min-w-full dark:bg-slate-900/80 shadow rounded-xl overflow-auto">
      {/* رأس التقويم */}
      <div className="flex justify-between flex-wrap sm:space-y-0 space-y-10">
        <h1 className="text-2xl text-nowrap font-semibold text-slate-700 dark:text-white">
          {month} {year}
        </h1>

        <div className="flex space-x-10">
          <div className="space-x-4 flex flex-nowrap">
            <button
              onClick={dayBefore}
              className="hover:bg-slate-300 hover:shadow-xl cursor-pointer p-3 rounded transition-all group"
            >
              <ArrowLeft className="text-slate-600 group-hover:text-slate-800 transition-all" />
            </button>
            <button
              onClick={nextDay}
              className="hover:bg-slate-300 hover:shadow-xl cursor-pointer p-3 rounded transition-all group"
            >
              <ArrowRight className="text-slate-600 group-hover:text-slate-800 transition-all" />
            </button>
          </div>
          <button
            onClick={handleToDay}
            className={`${
              choosedDay === dayjs().date() &&
              month === dayjs().format("MMMM") &&
              year === dayjs().year()
                ? "text-white bg-gradient-to-r shadow from-blue-500 to-purple-600 border-white/50 dark:border-slate-800"
                : ""
            } text-xl font-semibold transition-all duration-600 text-slate-400 rounded-xl border border-slate-400 p-2.5 hover:cursor-pointer`}
          >
            Today
          </button>
        </div>
      </div>

      {/* جدول التقويم */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse text-center text-slate-600 dark:text-white">
          <thead>
            <tr className="font-medium text-slate-500">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <th key={day} className="py-2 sm:py-3">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex} className="h-12 sm:h-14">
                {fullCalendar
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((item, colIndex) => (
                    <td key={colIndex} className="py-3.5">
                      {item ? (
                        <span
                          onClick={() => {
                            setChooseDay(item);
                            const selectedDate = dayjs(
                              `${year}-${month}-${item}`,
                              "YYYY-MMMM-D"
                            ).format("YYYY-MM-DD");
                            setDate(selectedDate);
                          }}
                          className={`inline-flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-mono transition-all duration-300 cursor-pointer 
                            ${
                              choosedDay === item
                                ? "bg-purple-600 text-white shadow"
                                : "hover:bg-purple-300/30"
                            }`}
                        >
                          {item}
                        </span>
                      ) : (
                        <span className="inline-block w-8 h-8 sm:w-10 sm:h-10"></span>
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
=======
import dayjs from "dayjs";
import { useEffect, useState, useContext } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Mycontext } from "../../Context/MyContext";

export default function MainCalender() {
  const { setDate } = useContext(Mycontext);
  const [calendar, setCalendar] = useState([]);
  const [choosedDay, setChooseDay] = useState(0);
  const [month, setMonth] = useState("");
  const [indexMonth, setIndexMonth] = useState(0);
  const [displayedDays, setDisplayedDays] = useState([]); 
  const [year, setYear] = useState(0);
  const [indexYear, setIndexYear] = useState(0);

  useEffect(() => {
    const updateCalendar = (monthOffset = 0, yearOffset = 0) => {
      const refDate = dayjs().add(yearOffset, "year").add(monthOffset, "month");
      const daysnum = refDate.daysInMonth();
      const firstDay = refDate.startOf("month").day();
      const currentDays = Array.from({ length: daysnum }, (_, i) => i + 1);
      setDisplayedDays(Array.from({ length: firstDay }, () => null)); 
      setCalendar(currentDays);
      setMonth(refDate.format("MMMM"));
      setYear(refDate.year());
    };

    const today = dayjs();
    setChooseDay(today.date());
    updateCalendar(0, 0);
  }, []);

  function nextDay() {
    if (choosedDay === calendar[calendar.length - 1]) {
      setIndexMonth((index) => {
        const nextIndex = index + 1;
        const refDate = dayjs().add(nextIndex, "month");
        const daysnum = refDate.daysInMonth();
        const firstDay = refDate.startOf("month").day();
        setDisplayedDays(Array.from({ length: firstDay }, () => null));
        setCalendar(Array.from({ length: daysnum }, (_, i) => i + 1));
        setMonth(refDate.format("MMMM"));
        setChooseDay(1);

        if (month === "December") {
          setIndexYear((y) => {
            const newY = y + 1;
            setYear(dayjs().add(newY, "year").year());
            return newY;
          });
        }
        return nextIndex;
      });
    } else {
      setChooseDay((d) => d + 1);
    }
  }

  function dayBefore() {
    if (choosedDay === calendar[0]) {
      if (month === "January") {
        setIndexYear((item) => {
          const nextYear = item - 1;
          setYear(dayjs().add(nextYear, "year").year());
          return nextYear;
        });
      }
      setIndexMonth((index) => {
        const nextIndex = index - 1;
        const refDate = dayjs().add(nextIndex, "month");
        const daysnum = refDate.daysInMonth();
        const firstDay = refDate.startOf("month").day();
        setDisplayedDays(Array.from({ length: firstDay }, () => null));
        setCalendar(Array.from({ length: daysnum }, (_, i) => i + 1));
        setMonth(refDate.format("MMMM"));
        setChooseDay(daysnum);
        return nextIndex;
      });
    } else {
      setChooseDay((d) => d - 1);
    }
  }

  function handleToDay() {
    const today = dayjs();
    setChooseDay(today.date());
    setMonth(today.format("MMMM"));
    setIndexMonth(0);
    setIndexYear(0);
    setYear(today.year());
    const firstDay = today.startOf("month").day();
    setDisplayedDays(Array.from({ length: firstDay }, () => null));
  }
  const fullCalendar = [...displayedDays, ...calendar];
  const rows = Math.ceil(fullCalendar.length / 7);

  return (
    <div className="p-12 bg-white/50 min-w-full dark:bg-slate-900/80 shadow rounded-xl overflow-auto">
      {/* رأس التقويم */}
      <div className="flex justify-between flex-wrap sm:space-y-0 space-y-10">
        <h1 className="text-2xl text-nowrap font-semibold text-slate-700 dark:text-white">
          {month} {year}
        </h1>

        <div className="flex space-x-10">
          <div className="space-x-4 flex flex-nowrap">
            <button
              onClick={dayBefore}
              className="hover:bg-slate-300 hover:shadow-xl cursor-pointer p-3 rounded transition-all group"
            >
              <ArrowLeft className="text-slate-600 group-hover:text-slate-800 transition-all" />
            </button>
            <button
              onClick={nextDay}
              className="hover:bg-slate-300 hover:shadow-xl cursor-pointer p-3 rounded transition-all group"
            >
              <ArrowRight className="text-slate-600 group-hover:text-slate-800 transition-all" />
            </button>
          </div>
          <button
            onClick={handleToDay}
            className={`${
              choosedDay === dayjs().date() &&
              month === dayjs().format("MMMM") &&
              year === dayjs().year()
                ? "text-white bg-gradient-to-r shadow from-blue-500 to-purple-600 border-white/50 dark:border-slate-800"
                : ""
            } text-xl font-semibold transition-all duration-600 text-slate-400 rounded-xl border border-slate-400 p-2.5 hover:cursor-pointer`}
          >
            Today
          </button>
        </div>
      </div>

      {/* جدول التقويم */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse text-center text-slate-600 dark:text-white">
          <thead>
            <tr className="font-medium text-slate-500">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <th key={day} className="py-2 sm:py-3">
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <tr key={rowIndex} className="h-12 sm:h-14">
                {fullCalendar
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((item, colIndex) => (
                    <td key={colIndex} className="py-3.5">
                      {item ? (
                        <span
                          onClick={() => {
                            setChooseDay(item);
                            const selectedDate = dayjs(
                              `${year}-${month}-${item}`,
                              "YYYY-MMMM-D"
                            ).format("YYYY-MM-DD");
                            setDate(selectedDate);
                          }}
                          className={`inline-flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-mono transition-all duration-300 cursor-pointer 
                            ${
                              choosedDay === item
                                ? "bg-purple-600 text-white shadow"
                                : "hover:bg-purple-300/30"
                            }`}
                        >
                          {item}
                        </span>
                      ) : (
                        <span className="inline-block w-8 h-8 sm:w-10 sm:h-10"></span>
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
