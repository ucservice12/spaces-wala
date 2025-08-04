import {
    ChevronRight,
    Settings,
    Home,
    Bookmark,
    MessageSquare,
    Building2,
    LogOut,
    User,
    FileText,
    Star,
    Edit,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../machine/auth";

const navItems = [
    { to: "/dashboard/my-activity", label: "My Activity", icon: null, hasArrow: true, isActive: true },
    { to: "/dashboard/my-properties", label: "My Properties", icon: FileText, hasArrow: false },
    { to: "/dashboard/saved", label: "Saved List", icon: Home, hasArrow: false },
    { to: "/dashboard/my-reviews", label: "My Reviews", icon: Star, hasArrow: false, hasNewBadge: true },
    { to: "/dashboard/profile", label: "Edit Profile", icon: Edit, hasArrow: false },
];

export default function Sidebar() {
    const dispatch = useDispatch();

    return (
        <aside className="w-full md:w-64 bg-gradient-to-b from-purple-50 to-white min-h-screen border-r p-6 flex flex-col">
            {/* Avatar Section */}
            <div className="relative flex flex-col items-center mb-12 mt-4">
                {/* Decorative background elements */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-32 h-32 rounded-full bg-purple-100 opacity-30"></div>
                    <div className="absolute w-24 h-24 rounded-full bg-purple-200 opacity-40"></div>
                </div>

                {/* Floating decorative dots */}
                <div className="absolute top-0 left-8 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
                <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-green-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-8 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60"></div>

                {/* Main avatar */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-50 to-purple-50 flex items-center justify-center shadow-lg border-4 border-white z-9 overflow-hidden">
                    <img
                        src="https://c.SpacesWalacdn.com/demand/s/client/common/assets/tenant-avatar.cedc2f44.png"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Outer ring */}
                <div className="absolute w-25 h-25 rounded-full border-4 border-purple-200 opacity-50"></div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 space-y-1">
                {navItems.map(({ to, label, icon: Icon, hasArrow, isActive, hasNewBadge }) => (
                    <Link
                        to={to}
                        key={to}
                        className={cn(
                            "flex items-center justify-between px-4 py-4 rounded-lg text-sm font-medium transition-all group",
                            isActive
                                ? "bg-white text-purple-700 font-semibold shadow-sm border-l-4 border-purple-600"
                                : "hover:bg-purple-50 text-gray-600 hover:text-gray-800"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            {Icon && (
                                <Icon
                                    className={cn(
                                        "w-5 h-5",
                                        isActive ? "text-purple-600" : "text-gray-400"
                                    )}
                                />
                            )}
                            <span className="flex items-center gap-2">
                                {label}
                                {hasNewBadge && (
                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                                        NEW
                                    </span>
                                )}
                            </span>
                        </div>
                        {hasArrow && (
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        )}
                    </Link>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="mt-8 pt-4 border-t border-gray-200">
                <button
                    onClick={() => dispatch(logoutUser())}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-lg text-sm font-medium hover:bg-purple-50 text-gray-600 hover:text-gray-800 transition group"
                >
                    <div className="flex items-center gap-3">
                        <LogOut className="w-5 h-5 text-gray-400" />
                        <span>Log Out</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </button>
            </div>
        </aside>
    );
}
