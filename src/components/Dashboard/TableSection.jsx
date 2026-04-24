import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import MobileViewTable from "./MobileViewTable";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TableSection() {
  const [orders, setOrders] = useState([]);
  const [TopProducts,setTopProducts] = useState([])
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/orders.json"
      )
      .then((res) => {
        setOrders(res.data);
      });
    axios
      .get(
        'https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/TopProducts.json'
      )
      .then((res)=>{
        setTopProducts(res.data)
      })
  },[]);

  return (
    <div className="space-y-6 ">
      {/* Recent Order */}
      <div
        className="bg-white/50 shadow dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl
          dark:border-slate-700/50 overflow-hidden"
      >
        <div className="p-4 border-b  border-slate-200/50 dark:border-slate-700/50 rounded-xl sm:rounded-none">
          <div className="flex item-center justify-between ">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Order
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:cursor-pointer transition-all ">
              View All
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto sm:overflow-visible w-full">
          <table className="hidden sm:table w-full border-collapse">
            <thead>
              <tr>
                {[
                  "Order ID",
                  "Client Name",
                  "Product",
                  "Amount",
                  "Status",
                  "Action",
                ].map((title, i) => (
                  <th
                    key={i}
                    className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50
                hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue-600">
                      {item.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {item.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {item.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {item.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={` font-medium text-xs px-3 py-1 rounded-full 
                      ${
                        item.status == "completed"
                          ? "bg-green-200 text-green-600"
                          : item.status == "cancelled"
                          ? "bg-red-200 text-red-600"
                          : "bg-yellow-200 text-yellow-600"
                      } 
                      `}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <MoreHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-300 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <MobileViewTable orders={orders} />
        </div>
      </div>
      {/* Top Product */}
      <div
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border
      border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-slate-700/50">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              best performing producats
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        {/* Dynamic Data */}
        <div className="p-6 space-y-4">
          {TopProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl
              hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.sales}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {item.revenue}
                  </p>
                  <div className="flex items-center space-x-1">
                    {item.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        item.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
