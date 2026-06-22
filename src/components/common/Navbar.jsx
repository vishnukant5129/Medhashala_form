import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle.jsx";
import { useNavigate } from "react-router-dom";

const navLinks = [
  "Home",
  "Features",
  "Why Medhashala",
  "Survey",
  "FAQ",
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/10 dark:bg-slate-900/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-[#F4B400] flex items-center justify-center text-[#0B1F3A] font-bold text-xl">
            M
          </div>

          <div>
            <h1 className="font-bold text-xl text-[#0B1F3A] dark:text-white">
              Medhashala
            </h1>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-slate-700 dark:text-slate-200">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#F4B400] duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <button className="bg-[#F4B400] px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
            Fill Survey
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 p-6 flex flex-col gap-5">

          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="dark:text-white"
            >
              {item}
            </a>
          ))}

          <ThemeToggle />

          <button
            onClick={() => navigate("/survey")}
            className="bg-[#F4B400] py-3 px-5 rounded-xl font-semibold"
          >
            Fill Survey
          </button>
        </div>
      )}
    </nav>
  );
}