import { Box } from "lucide-react";

export default function Filter({
  setCategory,
  categories,
  filterBtn,
  setFilterStock,
  filterStock,
}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative w-full sm:w-56">
          <Box className="absolute top-1/2 left-3 -translate-y-1/2 dark:text-white text-slate-500 w-5 h-5 pointer-events-none" />
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white/70 border border-slate-300 rounded-xl py-2.5 pl-10 pr-8 text-slate-700 text-lg appearance-none shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all dark:bg-slate-900/80 dark:border-slate-700 dark:text-white"
          >
            <option value="">All Categories</option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end">
          {filterBtn.map((item, index) => (
            <button
              key={index}
              onClick={() => setFilterStock(item.value)}
              className={`px-5 py-1.5 rounded-xl transition-all duration-300 border 
                        ${
                          filterStock === item.value
                            ? "bg-blue-200 text-blue-600 border-transparent shadow-sm"
                            : "bg-white/50 hover:cursor-pointer hover:bg-blue-100 text-slate-700 border border-slate-200 shadow-sm dark:bg-slate-900/80 dark:border-slate-700 dark:text-white dark:hover:text-blue-500"
                        }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
