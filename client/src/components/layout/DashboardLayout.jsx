import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen pt-24">
            {/* Mobile View */}
            <div className="block md:hidden ">
                {/* <Sidebar /> */}
                <main className="p-2">
                    <Outlet />
                </main>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
