<<<<<<< HEAD
import { MoreHorizontal } from "lucide-react";
export default function DesKTopView({ currentData }) {
  return (
    <>
      <div className="hidden sm:block">
        <table className="min-w-full text-sm ">
          <thead>
            <tr>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Transaction ID
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                User
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Date & Time
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Amount
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Payment Method
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Status
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition"
              >
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.id}
                </td>
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.user}
                </td>
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.date}
                </td>
                <td
                  className={`p-4 text-green-600 font-semibold
                  ${
                    item.status == "paid"
                      ? " text-green-700"
                      : item.status == "failed" ||
                        item.status == "cancelled" ||
                        item.status == "refunded"
                      ? " text-red-500"
                      : item.status == "pending"
                      ? " text-yellow-500"
                      : ""
                  }`}
                >
                  ${item.amount}
                </td>
                <td className="p-4 flex text-slate-800 dark:text-white">
                  {item.method}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1.5 rounded-full ${
                      item.status == "paid"
                        ? "bg-green-200 text-green-700"
                        : item.status == "failed" ||
                          item.status == "cancelled" ||
                          item.status == "refunded"
                        ? "bg-red-200 text-red-600"
                        : item.status == "pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : ""
                    } text-xs font-semibold`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6.5 py-4 flex dark:text-white">
                  <MoreHorizontal className="w-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
=======
import { MoreHorizontal } from "lucide-react";
export default function DesKTopView({ currentData }) {
  return (
    <>
      <div className="hidden sm:block">
        <table className="min-w-full text-sm ">
          <thead>
            <tr>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Transaction ID
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                User
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Date & Time
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Amount
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Payment Method
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Status
              </th>
              <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition"
              >
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.id}
                </td>
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.user}
                </td>
                <td className="p-4 text-slate-800 dark:text-white">
                  {item.date}
                </td>
                <td
                  className={`p-4 text-green-600 font-semibold
                  ${
                    item.status == "paid"
                      ? " text-green-700"
                      : item.status == "failed" ||
                        item.status == "cancelled" ||
                        item.status == "refunded"
                      ? " text-red-500"
                      : item.status == "pending"
                      ? " text-yellow-500"
                      : ""
                  }`}
                >
                  ${item.amount}
                </td>
                <td className="p-4 flex text-slate-800 dark:text-white">
                  {item.method}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1.5 rounded-full ${
                      item.status == "paid"
                        ? "bg-green-200 text-green-700"
                        : item.status == "failed" ||
                          item.status == "cancelled" ||
                          item.status == "refunded"
                        ? "bg-red-200 text-red-600"
                        : item.status == "pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : ""
                    } text-xs font-semibold`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6.5 py-4 flex dark:text-white">
                  <MoreHorizontal className="w-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
