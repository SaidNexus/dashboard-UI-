import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const margin = { top: 20, right: 30, left: 20, bottom: 25 };

export default function TransactionsPerDay({ data }) {
  return (
    <div className="w-full h-80 mb-6 bg-white rounded-xl shadow-md p-4 dark:bg-slate-900">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={margin}>
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />

          {/* X & Y Axes */}
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />

          {/* Tooltip */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            formatter={(value) => [`${value}`, "Transactions"]}
          />

          {/* Bars with gradient */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#006B90" />
            </linearGradient>
          </defs>
          <Bar dataKey="transactions" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
