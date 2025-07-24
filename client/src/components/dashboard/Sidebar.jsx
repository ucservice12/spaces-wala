// components/Sidebar.jsx
import {
    User,
    LineChart,
    Settings,
    Home,
    Bookmark,
    MessageSquare,
    Building2,
    LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../machine/auth";

const navItems = [
    { to: "/dashboard/profile", label: "Profile", icon: User },
    { to: "/dashboard/my-properties", label: "My Properties", icon: Building2 },
    { to: "/dashboard/saved", label: "Saved Listings", icon: Bookmark },
    { to: "/dashboard/analytics", label: "Analytics", icon: LineChart },
    { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
    { to: "/dashboard/settings", label: "Settings", icon: Settings },
    { to: "/", label: "Back to Home", icon: Home },
    // { to: "/logout", label: "Logout", icon: LogOut },
];

export default function Sidebar() {
    const dispatch = useDispatch();

    return (
        <aside className="w-full md:w-64 bg-background border-r md:border-r-2 p-4">
            <div className="text-xl font-semibold mb-6 md:block hidden">Dashboard</div>
            <nav className="grid gap-2">
                {navItems.map(({ to, label, icon: Icon }) => (
                    <Link
                        to={to}
                        key={to}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition border border-input md:border-none"
                        )}
                    >
                        <Icon className="w-5 h-5" />
                        <span>{label}</span>
                    </Link>
                ))}
                <label
                    onClick={() => {
                        dispatch(logoutUser())

                    }}
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition border border-input md:border-none"
                    )}
                >
                    < LogOut className="w-5 h-5" />
                    <span>logout</span>
                </label>
            </nav>
        </aside>
    );
}
