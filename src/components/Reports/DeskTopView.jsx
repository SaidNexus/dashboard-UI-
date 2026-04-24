import { MoreHorizontal } from "lucide-react";

export default function DeskTopView({currentData}) {
  return (
    <>
      <table className="min-w-full text-sm hidden sm:table">
        <thead>
          <tr>
            <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
              Report ID
            </th>
            <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
              Report Title
            </th>
            <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
              Date Generated
            </th>
            <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
              Total Amount
            </th>
            <th className="text-left p-4 font-semibold text-slate-600 dark:text-slate-300">
              Category
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
              <td className="p-4 text-slate-800 dark:text-white">{item.id}</td>
              <td className="p-4 text-slate-800 dark:text-white">
                {item.title}
              </td>
              <td className="p-4 text-slate-800 dark:text-white">
                {item.date}
              </td>
              <td className="p-4 text-slate-800 dark:text-white">
                ${item.total_amount.toLocaleString()}
              </td>
              <td className="p-4 text-slate-800 dark:text-white">
                {item.category}
              </td>

              <td className="p-4">
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
              </td>

              <td className="px-6 py-4 flex items-center dark:text-white">
                <MoreHorizontal className="w-4 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
