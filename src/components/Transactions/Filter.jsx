import {
  CalendarRange,
  CreditCard,
  CheckCircle,
  Search,
} from "lucide-react";

export default function Filter({
  setDateRange,
  setMethod,
  setStatus,
  Name,
  setName,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow">
        {/* Date Range */}
        <div className="relative space-y-2">
          <label className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Date Range
          </label>
          <select
            onChange={(e) => {
              setDateRange(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200
          dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none
          focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">All Time</option>
            <option value="30">Last 30 Days</option>
            <option value="60">Last 60 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
          <CalendarRange className="absolute left-3 top-9.5 text-slate-600 dark:text-slate-300 w-5" />
        </div>

        <div className="relative space-y-2">
          <label className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Payment Method
          </label>
          <select
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200
          dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none
          focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">All Methods</option>
            <option value="mastercard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="visa">visa</option>
          </select>
          <CreditCard className="absolute left-3 top-9.5 text-slate-600 dark:text-slate-300 w-5" />
        </div>

        {/* Payment Status */}
        <div className="relative space-y-2">
          <label className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Payment Status
          </label>
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200
          dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none
          focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <CheckCircle className="absolute left-3 top-9.5 text-slate-600 dark:text-slate-300 w-5" />
        </div>

        {/* Search */}
        <div className="relative space-y-2">
          <label className="text-slate-600 dark:text-slate-300 text-sm font-medium">
            Search
          </label>
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Search transactions by Name..."
            className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200
            dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-3 top-9.5 text-slate-600 dark:text-slate-300 w-5" />
        </div>
      </div>
    </>
  );
}
