import { Eye, Edit } from "lucide-react";

export default function DeskTopView({ usersData, start, end }) {
  return (
    <>
      <div className="hidden sm:block">
        <table className="min-w-full ">
          <thead>
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white">
                ID
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white">
                Name
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white">
                Email
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white w-1/3">
                Progress
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white">
                Role
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.slice(start, end).map((item) => {
              return (
                <tr
                  key={item.id}
                  className="border-b border-slate-300/50 hover:bg-slate-200/50  dark:border-slate-600/50 dark:hover:bg-slate-700/50"
                >
                  <td className="text-left p-4 text-slate-800 dark:text-white">
                    {item.id}
                  </td>
                  <td className="text-left p-4 text-slate-800 dark:text-white">
                    {item.name}
                  </td>
                  <td className="text-left p-4 text-slate-800 dark:text-white">
                    {item.email}
                  </td>
                  <td className="text-left p-4 ">
                    <div className="bg-slate-200/50 h-5 w-45 rounded-full">
                      <div
                        style={{ width: `${item.progress}%` }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-5 rounded-full"
                      ></div>
                    </div>
                  </td>
                  <td className="text-left p-4 text-slate-800 dark:text-white">
                    {item.role}
                  </td>
                  <td className="text-left p-4 text-slate-800 flex space-x-3">
                    {
                      <Eye className="text-slate-600 hover:text-slate-800 hover:cursor-pointer dark:text-white dark:hover:text-slate-200/50" />
                    }
                    {
                      <Edit className="text-slate-600 hover:text-slate-800 hover:cursor-pointer dark:text-white dark:hover:text-slate-200/50" />
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
