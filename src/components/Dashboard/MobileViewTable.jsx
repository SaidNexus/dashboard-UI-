import { MoreHorizontal } from "lucide-react";

export default function MobileViewTable({ orders }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {orders.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {item.customer}
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full
               ${
              item.status == "completed"
                ? "bg-green-200 text-green-600"
                : item.status == "cancelled"
                ? "bg-red-200 text-red-600"
                : 'bg-yellow-200 text-yellow-600'
            } `}
            >
              {item.status}
            </span>
          </div>

          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Order ID:
              </span>{" "}
              {item.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Product:
              </span>{" "}
              {item.product}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Amount:
              </span>{" "}
              <span className="text-blue-600 font-semibold">{item.amount}</span>
            </p>
          </div>

          <div className="mt-3 flex justify-end">
            <MoreHorizontal className="w-4 h-4 text-slate-500 dark:text-slate-300 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
