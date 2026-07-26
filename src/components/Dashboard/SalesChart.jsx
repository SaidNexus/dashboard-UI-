<<<<<<< HEAD
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function SalesChart() {
  const data = [
    { name: "Electronics", value: 45, color: "#3b82f6" },
    { name: "Clothing", value: 30, color: "#8b5cf6" },
    { name: "Books", value: 15, color: "#10b981" },
    { name: "Other", value: 10, color: "#f59e0b" },
  ];
  return (
    <div
      className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 h-full"
    >
      <div className="p-5">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Sales and CAteogry
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Production Distrbution
          </p>
        </div>
        <div className="h-48 ">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={data}
                cx={"50%"}
                cy={"50%"}
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey={"value"}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3 ">
          {data.map((item, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex item-end space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.name}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
=======
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function SalesChart() {
  const data = [
    { name: "Electronics", value: 45, color: "#3b82f6" },
    { name: "Clothing", value: 30, color: "#8b5cf6" },
    { name: "Books", value: 15, color: "#10b981" },
    { name: "Other", value: 10, color: "#f59e0b" },
  ];
  return (
    <div
      className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 h-full"
    >
      <div className="p-5">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Sales and CAteogry
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Production Distrbution
          </p>
        </div>
        <div className="h-48 ">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={data}
                cx={"50%"}
                cy={"50%"}
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey={"value"}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3 ">
          {data.map((item, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex item-end space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.name}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
