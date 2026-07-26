import React from "react";

export default function Scroll({ filteredData, start, end, setPage, page }) {
  return (
    <>
      <div className="flex items-center justify-between w-full p-3.5">
        <div className="flex space-x-2">
          <p className="text-slate-600 dark:text-white">Showing</p>
          <span className="dark:text-slate-200">
            {start + 1}-{end > filteredData.length ? filteredData.length : end}
          </span>
          <p className="text-slate-600 dark:text-slate-200/50">of</p>
          <span className="dark:text-slate-200">{filteredData.length}</span>
        </div>
        <div>
          <button
            onClick={() => page > 0 && setPage(page - 1)}
            disabled={page === 0}
            className={`transition-all duration-300 shadow p-2.5 rounded-l-xl
      ${
        page === 0
          ? "bg-slate-400 text-white "
          : "bg-white/50 hover:text-blue-600 hover:bg-blue-200 dark:bg-white hover:cursor-pointer"
      }`}
          >
            Previous
          </button>

          <button
            onClick={() => end < filteredData.length && setPage(page + 1)}
            disabled={end >= filteredData.length}
            className={`transition-all duration-300 shadow p-2.5 rounded-r-xl
      ${
        end >= filteredData.length
          ? "bg-slate-400 text-white "
          : "bg-white/50 hover:text-blue-600 hover:bg-blue-200 dark:bg-white hover:cursor-pointer"
      }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
