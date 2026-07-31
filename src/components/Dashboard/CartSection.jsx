import RevunChart from "./RevunChart";
import SalesChart from "./SalesChart";

export default function CartSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
            <RevunChart/>
        </div>
        <div className="space-y-6">
            <SalesChart/>
        </div>
    </div>
  )
}
