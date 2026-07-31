import { Eye, Edit } from "lucide-react";

export default function MobileUsersTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((user) => (
        <div
          key={user.id}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* Name + Role */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-800 dark:text-white">
              {user.name}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-200 text-blue-600">
              {user.role}
            </span>
          </div>

          {/* Details */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                ID:
              </span>{" "}
              {user.id}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Email:
              </span>{" "}
              {user.email}
            </p>
            <div>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Progress:
              </span>
              <div className="bg-slate-200/50 h-4 w-full rounded-full mt-1">
                <div
                  style={{ width: `${user.progress}%` }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
                ></div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-3 flex justify-end space-x-2">
            <Eye className="w-4 h-4 text-slate-500 dark:text-slate-300 cursor-pointer" />
            <Edit className="w-4 h-4 text-slate-500 dark:text-slate-300 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
