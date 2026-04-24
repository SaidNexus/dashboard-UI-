export default function Pagination({start,end,currentData,reports,setPage,page}) {
  return (
    <>
      <div className="p-3 flex justify-between items-center mt-2">
        <p className="text-slate-600 dark:text-slate-200">
          Showing {start + 1}–{start + currentData.length} of {reports.length}
        </p>

        <div className="flex space-x-3">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`shadow rounded-xl py-2 px-4 dark:bg-white dark:text-slate-700 ${
              page === 1
                ? "text-gray-600 border-transparent bg-slate-300 cursor-not-allowed dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer hover:bg-blue-200 transition-all duration-400 hover:text-blue-600 "
            }`}
          >
            Previous
          </button>

          <button
            onClick={() =>
              setPage((prev) => (end >= reports.length ? prev : prev + 1))
            }
            disabled={end >= reports.length}
            className={` rounded-xl py-2 px-4 shadow dark:bg-white dark:text-slate-700  ${
              end >= reports.length
                ? "text-gray-600 border-transparent bg-slate-300 cursor-not-allowed dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer hover:bg-blue-200 transition-all duration-400 hover:text-blue-600 "
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
