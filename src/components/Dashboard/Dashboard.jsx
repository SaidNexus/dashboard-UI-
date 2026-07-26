<<<<<<< HEAD
import StatsGrid from "./StatsGrid";
import CartSection from "./CartSection";
import TableSection from "./TableSection";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Stats Grid */}
      <StatsGrid />

      {/* Chart Sections*/}
      <CartSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
      </div>
    </div>
  );
}
=======
import StatsGrid from "./StatsGrid";
import CartSection from "./CartSection";
import TableSection from "./TableSection";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Stats Grid */}
      <StatsGrid />

      {/* Chart Sections*/}
      <CartSection />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
      </div>
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
