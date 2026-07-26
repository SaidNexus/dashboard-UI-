export default function InventoryData({ productData }) {
  return (
    <>
      <div className=" min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 ">
        {productData.map((item, index) => (
          <div
            key={index}
            className="flex-1 p-10.5 space-y-3.5 bg-white/50 shadow rounded-xl text-center dark:bg-slate-900/80 dark:border-slate-700"
          >
            <p className="text-xl font-semibold text-slate-600 dark:text-slate-200">
              {item.title}
            </p>
            <h1 className="text-4xl text-slate-800 dark:text-white">
              {item.title === "Total Inventory Value" ? "$" : ""}
              {item.value}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
