<<<<<<< HEAD
import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import TransactionsPerDay from "./TransactionsperDay";
import DesKTopView from "./DesKTopView";
import MobileTransactionsTable from "./MobileView";
import Scroll from "./scroll";
import Filter from "./Filter";

export default function Transactions() {
  const [dateRange, setDateRange] = useState("");
  const [method, setMethod] = useState("");
  const [status, setStatus] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilterdData] = useState([]);
  const [page, setPage] = useState(1);
  const [Name, setName] = useState("");
  const start = (page - 1) * 8;
  const end = page * 8;
  const currentData = filteredData.slice(start, end);
  const transactionsPerDayData = filteredData.reduce((acc, item) => {
    const day = dayjs(item.date).format("ddd");
    const found = acc.find((d) => d.day === day);
    if (found) {
      found.transactions += 1;
    } else {
      acc.push({ day, transactions: 1 });
    }
    return acc;
  }, []);

  useEffect(() => {
    let filtered = transactions.filter((item) => {
      if (method && item.method !== method) return false;
      if (status && item.status !== status) return false;
      if (dateRange) {
        const passDate = dayjs().subtract(Number(dateRange), "day");
        if (dayjs(item.date).isBefore(passDate)) return false;
      }
      if (Name && !item.user.toLowerCase().includes(Name.toLowerCase()))
        return false;

      return true;
    });
    setFilterdData(filtered);
    setPage(1);
  }, [transactions, method, status, dateRange, Name]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/transactions.json"
      )
      .then((res) => {
        setTransactions(res.data);
      });
  }, []);
  return (
    <div className="mt-6 px-4">
      <TransactionsPerDay data={transactionsPerDayData} />

      <Filter
        setDateRange={setDateRange}
        setMethod={setMethod}
        setStatus={setStatus}
        Name={Name}
        setName={setName}
      />

      <div className="min-w-full bg-white dark:bg-slate-900 mt-7 shadow rounded-xl p-3.5 overflow-auto">
        {/* DeskTopView */}
        <DesKTopView currentData={currentData} />
        {/*=== DeskTopView ===*/}

        {/* Mobile View */}
        <MobileTransactionsTable data={currentData} />
        {/*=== Mobile View ===*/}

        <Scroll
          start={start}
          end={end}
          filteredData={filteredData}
          currentData={currentData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
=======
import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import TransactionsPerDay from "./TransactionsperDay";
import DesKTopView from "./DesKTopView";
import MobileTransactionsTable from "./MobileView";
import Scroll from "./scroll";
import Filter from "./Filter";

export default function Transactions() {
  const [dateRange, setDateRange] = useState("");
  const [method, setMethod] = useState("");
  const [status, setStatus] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilterdData] = useState([]);
  const [page, setPage] = useState(1);
  const [Name, setName] = useState("");
  const start = (page - 1) * 8;
  const end = page * 8;
  const currentData = filteredData.slice(start, end);
  const transactionsPerDayData = filteredData.reduce((acc, item) => {
    const day = dayjs(item.date).format("ddd");
    const found = acc.find((d) => d.day === day);
    if (found) {
      found.transactions += 1;
    } else {
      acc.push({ day, transactions: 1 });
    }
    return acc;
  }, []);

  useEffect(() => {
    let filtered = transactions.filter((item) => {
      if (method && item.method !== method) return false;
      if (status && item.status !== status) return false;
      if (dateRange) {
        const passDate = dayjs().subtract(Number(dateRange), "day");
        if (dayjs(item.date).isBefore(passDate)) return false;
      }
      if (Name && !item.user.toLowerCase().includes(Name.toLowerCase()))
        return false;

      return true;
    });
    setFilterdData(filtered);
    setPage(1);
  }, [transactions, method, status, dateRange, Name]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/transactions.json"
      )
      .then((res) => {
        setTransactions(res.data);
      });
  }, []);
  return (
    <div className="mt-6 px-4">
      <TransactionsPerDay data={transactionsPerDayData} />

      <Filter
        setDateRange={setDateRange}
        setMethod={setMethod}
        setStatus={setStatus}
        Name={Name}
        setName={setName}
      />

      <div className="min-w-full bg-white dark:bg-slate-900 mt-7 shadow rounded-xl p-3.5 overflow-auto">
        {/* DeskTopView */}
        <DesKTopView currentData={currentData} />
        {/*=== DeskTopView ===*/}

        {/* Mobile View */}
        <MobileTransactionsTable data={currentData} />
        {/*=== Mobile View ===*/}

        <Scroll
          start={start}
          end={end}
          filteredData={filteredData}
          currentData={currentData}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
