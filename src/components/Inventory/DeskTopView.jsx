import { MoreHorizontal } from "lucide-react";

export default function DeskTopView({ currentData }) {
  return (
    <>
      <div className="sm:block hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-sm font-semibold text-slate-600 dark:text-slate-200">
              {[
                { name: "PRODUCT", w: "w-[25%]" },
                { name: "SKU", w: "w-[15%]" },
                { name: "CATEGORY", w: "w-[15%]" },
                { name: "STOCK", w: "w-[10%]" },
                { name: "STATUS", w: "w-[10%]" },
                { name: "PRICE", w: "w-[15%]" },
                { name: "ACTIONS", w: "w-[10%]" },
              ].map((item, index) => (
                <th key={index} className={`p-4 ${item.w}`}>
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.sku}
                className="text-sm text-slate-700 dark:text-slate-300 border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="flex items-center gap-3 p-4">
                  <img
                    className="w-8 h-8 rounded-md object-cover"
                    src={item.image}
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-4">{item.sku}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.stock}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-2xl text-nowrap ${
                      item.status == "in stock"
                        ? "bg-green-200 text-green-700"
                        : item.status == "out of stock"
                        ? "bg-red-200 text-red-600"
                        : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <MoreHorizontal className="w-4 h-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
