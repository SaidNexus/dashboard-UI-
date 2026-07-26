<<<<<<< HEAD
export default function Scroll({ start, end, usersData, setPage, page }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-center p-2.5 mt-1.5">
          <div className="flex justify-between items-center space-x-1.5">
            <p className="text-slate-400 dark:text-white">Showing</p>
            <span className="dark:text-white">
              {start + 1} <span className="text-slate-400 ">--</span> {end}
            </span>{" "}
            <span className="text-slate-400 dark:text-slate-200">from</span>{" "}
            <span className="dark:text-white">{usersData.length}</span>
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
              onClick={() => {
                if (end != usersData.length) {
                  setPage(page + 1);
                }
              }}
              className={`transition-all duration-300 shadow p-2.5 rounded-r-xl
                ${
                  end >= usersData.length
                    ? "bg-slate-400 text-white "
                    : "bg-white/50 hover:text-blue-600 hover:bg-blue-200 dark:bg-white hover:cursor-pointer"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
=======
export default function Scroll({ start, end, usersData, setPage, page }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-center p-2.5 mt-1.5">
          <div className="flex justify-between items-center space-x-1.5">
            <p className="text-slate-400 dark:text-white">Showing</p>
            <span className="dark:text-white">
              {start + 1} <span className="text-slate-400 ">--</span> {end}
            </span>{" "}
            <span className="text-slate-400 dark:text-slate-200">from</span>{" "}
            <span className="dark:text-white">{usersData.length}</span>
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
              onClick={() => {
                if (end != usersData.length) {
                  setPage(page + 1);
                }
              }}
              className={`transition-all duration-300 shadow p-2.5 rounded-r-xl
                ${
                  end >= usersData.length
                    ? "bg-slate-400 text-white "
                    : "bg-white/50 hover:text-blue-600 hover:bg-blue-200 dark:bg-white hover:cursor-pointer"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
