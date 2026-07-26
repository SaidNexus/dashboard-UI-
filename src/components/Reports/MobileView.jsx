<<<<<<< HEAD
import { MoreHorizontal } from "lucide-react";

export default function MobileReportsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* Title + Status */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {item.title}
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                item.status === "Completed"
                  ? "bg-green-200 text-green-700"
                  : item.status === "Draft"
                  ? "bg-red-200 text-red-600"
                  : item.status === "In Review"
                  ? "bg-yellow-200 text-yellow-700"
                  : item.status === "Archived"
                  ? "bg-gray-200 text-gray-700"
                  : ""
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Details */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Report ID:
              </span>{" "}
              {item.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Date Generated:
              </span>{" "}
              {item.date}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Total Amount:
              </span>{" "}
              ${item.total_amount.toLocaleString()}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Category:
              </span>{" "}
              {item.category}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-3 flex justify-end">
            <MoreHorizontal className="w-4 h-4 text-slate-500 dark:text-slate-300 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
=======
import { MoreHorizontal } from "lucide-react";

export default function MobileReportsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* Title + Status */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {item.title}
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                item.status === "Completed"
                  ? "bg-green-200 text-green-700"
                  : item.status === "Draft"
                  ? "bg-red-200 text-red-600"
                  : item.status === "In Review"
                  ? "bg-yellow-200 text-yellow-700"
                  : item.status === "Archived"
                  ? "bg-gray-200 text-gray-700"
                  : ""
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Details */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Report ID:
              </span>{" "}
              {item.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Date Generated:
              </span>{" "}
              {item.date}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Total Amount:
              </span>{" "}
              ${item.total_amount.toLocaleString()}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Category:
              </span>{" "}
              {item.category}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-3 flex justify-end">
            <MoreHorizontal className="w-4 h-4 text-slate-500 dark:text-slate-300 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
