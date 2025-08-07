import {
  ChevronRight,
  ChevronLeft,
  Home,
  FileText,
  Star,
  Edit,
  LogOut,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../machine/auth";
import { useState } from "react";
import avtar1 from "../../assets/navbar/profileimage.webp";

const navItems = [
  { to: "/dashboard/my-activity", label: "Activity", icon: Home, hasArrow: true, isActive: true },
  { to: "/dashboard/my-properties", label: "Properties", icon: FileText, hasArrow: false },
  { to: "/dashboard/saved", label: "Saved", icon: Bookmark, hasArrow: false },
  { to: "/dashboard/my-reviews", label: "Reviews", icon: Star, hasArrow: false, hasNewBadge: true },
  { to: "/dashboard/profile", label: "Profile", icon: Edit, hasArrow: false },
];

export default function Sidebar({ mobileView = false }) {
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (mobileView) {
    return (
      <div className="w-full bg-white p-2 shadow-md">
        <nav className="flex justify-around">
          {navItems.slice(0, 4).map(({ to, label, icon: Icon, isActive }) => (
            <Link
              to={to}
              key={to}
              className={cn(
                "flex flex-col items-center p-2 text-xs",
                isActive ? "text-purple-600" : "text-gray-600"
              )}
            >
              {Icon && <Icon className="w-5 h-5 mb-1" />}
              <span>{label.split(" ")[0]}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  return (
    <aside
      className={cn(
        "relative bg-gradient-to-b from-purple-50 to-white min-h-screen border-r p-6 flex flex-col transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-full md:w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 z-10 bg-white rounded-full p-1 shadow-md border border-gray-200 hover:bg-purple-50 transition"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Avatar Section */}
      <div className="relative flex flex-col items-center mb-12 mt-4">
        {!isCollapsed && (
          <>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-32 h-32 rounded-full bg-purple-100 opacity-30"></div>
              <div className="absolute w-24 h-24 rounded-full bg-purple-200 opacity-40"></div>
            </div>
            <div className="absolute top-0 left-8 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-8 left-4 w-1 h-1 bg-green-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-2 right-8 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60"></div>
          </>
        )}

        <div
          className={cn(
            "relative rounded-full bg-gradient-to-br from-purple-50 to-purple-50 flex items-center justify-center shadow-lg border-4 border-white z-9 overflow-hidden transition-all",
            isCollapsed ? "w-10 h-10" : "w-24 h-24"
          )}
        >
          <img
            src={avtar1}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {!isCollapsed && (
          <div className="absolute w-25 h-25 rounded-full border-4 border-purple-200 opacity-50"></div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ to, label, icon: Icon, hasArrow, isActive, hasNewBadge }) => (
          <Link
            to={to}
            key={to}
            className={cn(
              "flex items-center justify-between px-4 py-4 rounded-lg text-sm font-medium transition-all group overflow-hidden",
              isActive
                ? "bg-white text-purple-700 font-semibold shadow-sm border-l-4 border-purple-600"
                : "hover:bg-purple-50 text-gray-600 hover:text-gray-800",
              isCollapsed ? "justify-center px-2" : ""
            )}
            title={isCollapsed ? label : undefined}
          >
            <div className="flex items-center gap-3">
              {Icon && (
                <Icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0",
                    isActive ? "text-purple-600" : "text-gray-400"
                  )}
                />
              )}
              {!isCollapsed && (
                <span className="flex items-center gap-2 truncate">
                  {label}
                  {hasNewBadge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </span>
              )}
            </div>
            {hasArrow && !isCollapsed && (
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            )}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <button
          onClick={() => dispatch(logoutUser())}
          className={cn(
            "w-full flex items-center justify-between px-4 py-4 rounded-lg text-sm font-medium hover:bg-purple-50 text-gray-600 hover:text-gray-800 transition group",
            isCollapsed ? "justify-center px-2" : ""
          )}
          title={isCollapsed ? "Log Out" : undefined}
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-gray-400" />
            {!isCollapsed && <span>Log Out</span>}
          </div>
          {!isCollapsed && (
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          )}
        </button>
      </div>
    </aside>
  );
}
