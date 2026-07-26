<<<<<<< HEAD
export default function Scroll({start,end,filteredData,currentData,page,setPage}) {
  return (
    <>
      <div className="p-3 flex justify-between items-center min-w-full mt-2">
        <p className="text-slate-600 dark:text-slate-200">
          Showing From {start + 1} - {start + currentData.length} of{" "}
          {filteredData.length}
        </p>
        <div className="flex space-x-3.5 xl:space-x-10 xl:mr-2.5 dark:text-white mr-0">
          <button
            onClick={() => {
              if (start != 0) {
                const nextPage = page - 1;
                setPage(nextPage);
              }
            }}
            className={`border rounded-xl py-2 px-4 ${
              start == 0
                ? "text-gray-600 border-transparent bg-slate-300 hover:cursor-default dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer dark:border-slate-400"
            } `}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (end != filteredData.length) {
                const nextPage = page + 1;
                setPage(nextPage);
              }
            }}
            className={`border rounded-xl py-2 px-4 ${
              end >= filteredData.length
                ? "text-gray-600 border-transparent bg-slate-300 hover:cursor-default  dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer dark:border-slate-400"
            } `}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
=======
export default function Scroll({start,end,filteredData,currentData,page,setPage}) {
  return (
    <>
      <div className="p-3 flex justify-between items-center min-w-full mt-2">
        <p className="text-slate-600 dark:text-slate-200">
          Showing From {start + 1} - {start + currentData.length} of{" "}
          {filteredData.length}
        </p>
        <div className="flex space-x-3.5 xl:space-x-10 xl:mr-2.5 dark:text-white mr-0">
          <button
            onClick={() => {
              if (start != 0) {
                const nextPage = page - 1;
                setPage(nextPage);
              }
            }}
            className={`border rounded-xl py-2 px-4 ${
              start == 0
                ? "text-gray-600 border-transparent bg-slate-300 hover:cursor-default dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer dark:border-slate-400"
            } `}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (end != filteredData.length) {
                const nextPage = page + 1;
                setPage(nextPage);
              }
            }}
            className={`border rounded-xl py-2 px-4 ${
              end >= filteredData.length
                ? "text-gray-600 border-transparent bg-slate-300 hover:cursor-default  dark:bg-slate-700 dark:text-white"
                : "hover:cursor-pointer dark:border-slate-400"
            } `}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
