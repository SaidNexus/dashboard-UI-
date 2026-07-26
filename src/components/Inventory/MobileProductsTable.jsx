<<<<<<< HEAD
import { MoreHorizontal } from "lucide-react";

export default function MobileProductsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.sku}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* اسم المنتج + صورة */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-md object-cover"
                src={item.image}
                alt={item.name}
              />
              <span className="font-semibold text-slate-800 dark:text-white">
                {item.name}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded-2xl text-xs ${
                item.status === "in stock"
                  ? "bg-green-200 text-green-700"
                  : item.status === "out of stock"
                  ? "bg-red-200 text-red-600"
                  : "bg-yellow-200 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* باقي التفاصيل */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                SKU:
              </span>{" "}
              {item.sku}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Category:
              </span>{" "}
              {item.category}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Stock:
              </span>{" "}
              {item.stock}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Price:
              </span>{" "}
              ${item.price}
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

export default function MobileProductsTable({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:hidden mt-4">
      {data.map((item) => (
        <div
          key={item.sku}
          className="p-4 rounded-xl shadow border border-slate-200/50 dark:border-slate-700/50"
        >
          {/* اسم المنتج + صورة */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-md object-cover"
                src={item.image}
                alt={item.name}
              />
              <span className="font-semibold text-slate-800 dark:text-white">
                {item.name}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded-2xl text-xs ${
                item.status === "in stock"
                  ? "bg-green-200 text-green-700"
                  : item.status === "out of stock"
                  ? "bg-red-200 text-red-600"
                  : "bg-yellow-200 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* باقي التفاصيل */}
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                SKU:
              </span>{" "}
              {item.sku}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Category:
              </span>{" "}
              {item.category}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Stock:
              </span>{" "}
              {item.stock}
            </p>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Price:
              </span>{" "}
              ${item.price}
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
