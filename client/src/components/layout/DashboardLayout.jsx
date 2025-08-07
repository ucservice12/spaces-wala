import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen pt-24">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="pb-16"> {/* Padding to account for bottom navbar */}
          <Outlet />
        </div>
        <Sidebar mobileView />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}