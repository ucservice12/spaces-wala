import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer"
        >
            {isDark ? <FiSun className="w-5 h-5 text-white" /> : <IoMoonOutline className="w-5 h-5 text-white dark:text-gray-300" />}
            <span className="sr-only">{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
        </button>
    );
}