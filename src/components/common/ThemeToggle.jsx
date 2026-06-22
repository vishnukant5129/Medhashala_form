import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-lg flex justify-center items-center"
        >
            {dark ? (
                <FaSun className="text-yellow-400" />
            ) : (
                <FaMoon className="text-[#0B1F3A]" />
            )}
        </button>
    );
}