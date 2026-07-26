import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import Calendar from "./components/Calendar/Calendar";
import { Mycontext } from "./Context/MyContext";
import dayjs from "dayjs";
import Transactions from "./components/Transactions/Transactions";
import Inventory from "./components/Inventory/Inventory";
import Reports from "./components/Reports/Reports";

export default function App() {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [sideBarCollapsed, setSideBarCollapsed] = useState(true);
  const [currentPage, SetCurrentPage] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Mycontext.Provider
        value={{
          open,
          setOpen,
          title,
          setTitle,
          date,
          setDate,
          isSidebarOpen,
          setIsSidebarOpen,
        }}
      >
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              collapsed={sideBarCollapsed}
              onToggleSidebar={setSideBarCollapsed}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header
                collapsed={sideBarCollapsed}
                onToggleSidebar={setSideBarCollapsed}
                currentPage={currentPage}
              />
              <main className="flex-1 overflow-y-auto bg-transparent">
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                  />
                  <Route
                    path="/dashboard"
                    element={
                        <Dashboard />
                    }
                  />
                  <Route
                    path="/users"
                    element={
                        <Users />
                    }
                  />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/transactions" element={<Transactions/>}/>
                  <Route path="/inventory" element={<Inventory/>}/>
                  <Route path="/reports" element={<Reports/>}/>


                </Routes>
              </main>


            </div>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}
