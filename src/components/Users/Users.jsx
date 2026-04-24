import { Download } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import MobileUsersTable from "./MobileUsersTable";
import DeskTopView from "./DeskTopView";
import Scroll from "./Scroll";

export default function Users() {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(0);
  const start = page * 10;
  const end = (page + 1) * 10;
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/Users.json"
      )
      .then((res) => {
        setUsersData(res.data);
      });
  }, []);
  return (
    <div className="p-6 space-y-6">
      <div className=" min-w-full">
        <div className="flex gap-1 text-slate-500 dark:text-white">
          <Download className="hover:cursor-pointer hover:text-slate-700 dark:hover:text-slate-600 ml-auto " />
          <span className="mr-3.5">Export</span>
        </div>
      </div>
      <div className="min-w-full bg-white/80 dark:bg-slate-900/80 overflow-auto rounded-xl shadow-xl mt-6">
        {/* DeskTopView */}
        <DeskTopView usersData={usersData} start={start} end={end} />

        {/* Mobile View */}
        <MobileUsersTable data={usersData.slice(start, end)} />
        {/* Mobile View */}

        <Scroll
          start={start}
          end={end}
          usersData={usersData}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}
