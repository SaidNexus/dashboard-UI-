<<<<<<< HEAD
import { MoreHorizontal } from "lucide-react";

export default function MobileTransactionsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* User + Status */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {item.user}
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                item.status === "paid"
                  ? "bg-green-200 text-green-700"
                  : item.status === "failed" ||
                    item.status === "cancelled" ||
                    item.status === "refunded"
                  ? "bg-red-200 text-red-600"
                  : item.status === "pending"
                  ? "bg-yellow-200 text-yellow-700"
                  : ""
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Transaction Details */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Transaction ID:
              </span>{" "}
              {item.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Date & Time:
              </span>{" "}
              {item.date}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Amount:
              </span>{" "}
              <span
                className={`font-semibold ${
                  item.status === "paid"
                    ? "text-green-700"
                    : item.status === "failed" ||
                      item.status === "cancelled" ||
                      item.status === "refunded"
                    ? "text-red-500"
                    : item.status === "pending"
                    ? "text-yellow-500"
                    : ""
                }`}
              >
                ${item.amount}
              </span>
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Payment Method:
              </span>{" "}
              {item.method}
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

export default function MobileTransactionsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* User + Status */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {item.user}
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                item.status === "paid"
                  ? "bg-green-200 text-green-700"
                  : item.status === "failed" ||
                    item.status === "cancelled" ||
                    item.status === "refunded"
                  ? "bg-red-200 text-red-600"
                  : item.status === "pending"
                  ? "bg-yellow-200 text-yellow-700"
                  : ""
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Transaction Details */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Transaction ID:
              </span>{" "}
              {item.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Date & Time:
              </span>{" "}
              {item.date}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Amount:
              </span>{" "}
              <span
                className={`font-semibold ${
                  item.status === "paid"
                    ? "text-green-700"
                    : item.status === "failed" ||
                      item.status === "cancelled" ||
                      item.status === "refunded"
                    ? "text-red-500"
                    : item.status === "pending"
                    ? "text-yellow-500"
                    : ""
                }`}
              >
                ${item.amount}
              </span>
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Payment Method:
              </span>{" "}
              {item.method}
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
