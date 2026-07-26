<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
import MobileReportsTable from "./MobileView";
import DeskTopView from "./DeskTopView";
import Pagination from "./Pagination";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const currentData = reports.slice(start, end);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/reports_data.json"
      )
      .then((res) => {
        setReports(res.data);
      });
  }, []);

  return (
    <div className="mt-6 px-4">
      <div className="min-w-full bg-white dark:bg-slate-900 mt-7 shadow rounded-xl p-3.5 overflow-auto">
        {/*DeskTop View  */}
        <DeskTopView currentData={currentData} />
        {/*===DeskTop View===*/}

        {/* Mobile View */}
        <MobileReportsTable data={currentData} />
        {/*===Mobile View===*/}

        {/* Pagination */}
        <Pagination
          start={start}
          end={end}
          currentData={currentData}
          reports={reports}
          setPage={setPage}
          page={page}
        />
        {/*===Pagination===*/}
      </div>
    </div>
  );
}
=======
import { useState, useEffect } from "react";
import axios from "axios";
import MobileReportsTable from "./MobileView";
import DeskTopView from "./DeskTopView";
import Pagination from "./Pagination";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const currentData = reports.slice(start, end);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/reports_data.json"
      )
      .then((res) => {
        setReports(res.data);
      });
  }, []);

  return (
    <div className="mt-6 px-4">
      <div className="min-w-full bg-white dark:bg-slate-900 mt-7 shadow rounded-xl p-3.5 overflow-auto">
        {/*DeskTop View  */}
        <DeskTopView currentData={currentData} />
        {/*===DeskTop View===*/}

        {/* Mobile View */}
        <MobileReportsTable data={currentData} />
        {/*===Mobile View===*/}

        {/* Pagination */}
        <Pagination
          start={start}
          end={end}
          currentData={currentData}
          reports={reports}
          setPage={setPage}
          page={page}
        />
        {/*===Pagination===*/}
      </div>
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
