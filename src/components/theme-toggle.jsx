import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "./theme-provider";

export default function ThemeToggle({ lastScrollY }) {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`cursor-pointer sm:bg-transparent bg-blue-400 rounded-sm flex justify-center text-white sm:text-black items-center p-2 ${lastScrollY > 700 ? "sm:text-black" : 'sm:text-white'}`}
        >
            {isDark ? <FiSun size={16} /> : <IoMoonOutline size={16} />}
            <span className="sr-only">{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
        </button>
    );
}