import {
  Zap,
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Mycontext } from "../../Context/MyContext";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Users,
    label: "Users",
  },
  {
    icon: Package,
    label: "Inventory",
  },
  {
    icon: CreditCard,
    label: "Transactions",
  },
  {
    icon: FileText,
    label: "Reports",
  },
  {
    icon: Calendar,
    label: "Calendar",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar({ collapsed, onToggleSidebar }) {
  const { setIsSidebarOpen, isSidebarOpen } = useContext(Mycontext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!collapsed) {
        onToggleSidebar(!collapsed);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`
        ${
          isMobile
            ? isSidebarOpen
              ? "fixed inset-0 w-full z-50"
              : "hidden"
            : collapsed
            ? "w-20"
            : "w-72"
        }
        transtion-all duration-500 ease-in-out bg-white/80 dark:bg-slate-900/80 
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl 
                flex items-center justify-center shadow-lg "
          >
            <Zap className="w-6 h-6 text-white " />
          </div>
          {/* Conditional Rendering */}
          {!collapsed && (
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              <h1>Nexus</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panal
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scroll ">
        {menuItems.map((item, index) => {
          return (
            <div
              onClick={() => {
                if(isMobile){

                  setIsSidebarOpen(false);
                  onToggleSidebar(true);
                }
                }}
              key={index}
            >
              <NavLink
                to={`/${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `
    flex items-center justify-between p-3 rounded-xl transition-all duration-200 w-full
    ${
      isActive
        ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 text-slate-50"
        : "text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
    }
    `
                }
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 ml-0.5" />
                  {!collapsed && (
                    <span className="font-medium ml-2">{item.label}</span>
                  )}
                </div>
              </NavLink>
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <img
          className="w-10 h-10 rounded-full ring-1 ring-blue-500"
          src="https://res.cloudinary.com/dkgnssc6l/image/upload/v1762644466/IMG_20240702_205648_157_g1cyju.jpg"
          alt="user"
        />
        <div className="flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Said Ahmed
            </p>
            <p className="text-xs text-slate-500 darktext-slate-400 truncate">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
