import {
  Menu,
  Plus,
  Search,
  Filter,
  Sun,
  Bell,
  Settings,
  ChevronDown,
  Moon,
} from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { Mycontext } from "../../Context/MyContext";

export default function Header({ onToggleSidebar, currentPage, collapsed }) {
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark");
    return dark ? JSON.parse(dark) : false;
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const { setIsSidebarOpen } = useContext(Mycontext);

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              onToggleSidebar(!collapsed);
            }}
            className=" hidden md:block p-2 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5 " />
          </button>

          <button
            onClick={() => {
              onToggleSidebar(false);
              setIsSidebarOpen(true);
            }}
            className="md:hidden block p-2 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5 " />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">
              {currentPage}
            </h1>
            <p className="dark:text-white">
              Welcome back , Said! here's what's happening today
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 " />
            <input
              type="text"
              placeholder="Search Anything "
              className="w-full pl-10 pr-4
                py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200
                 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white 
                 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />

            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
                 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <Filter className="hidden xl:block" />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          {/* Quic Action */}
          <button
            className="hidden lg:flex items-center space-x-2 px-4 py-1.5 bg bg-gradient-to-r
             from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl hover:cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4 " />
            <span className="text-sm font-medium">New</span>
          </button>
          {/* Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          {/* Notification*/}
          <button
            className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 w-5 h-5 text-white bg-red-500 text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          {/* Setting */}
          <button
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-5 h-5 " />
          </button>
          {/* user profile */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-300 dark:border-slate-700 hidden md:block">
            <img
              src="https://res.cloudinary.com/dkgnssc6l/image/upload/v1762644466/IMG_20240702_205648_157_g1cyju.jpg"
              alt="userPhoto"
              className="ring-blue-500 ring-2 w-8 h-8 rounded-full "
            />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Said Ahmed
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
