import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import SurveyButton from "../button/SurvayButton";
import logo from "../../assets/Medhashala.jpeg";

import { NAV_LINKS, CTA_BUTTON } from "../../constants/navLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (item) => {
    setMenuOpen(false);

    // Route Navigation
    if (item.type === "route") {
      navigate(item.path);
      return;
    }

    // Anchor Navigation
    if (item.type === "anchor") {
      if (location.pathname !== "/") {
        navigate("/", {
          state: { scrollTo: item.path },
        });
        return;
      }

      const sectionId = item.path.replace("#", "");

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCTA = () => {
    navigate(CTA_BUTTON.path);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <img src={logo} alt="MedhaShala" className="w-full h-full object-cover" />
          </div>

          {/* <div> */}
          <h2 className="text-white font-bold text-lg">MedhaShala</h2>
          {/* </div> */}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item)}
              className={`transition-all duration-300 font-medium ${location.pathname === item.path
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex">
          <SurveyButton
            onClick={() => setMenuOpen(!menuOpen)}
          ></SurveyButton>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4 bg-[#111827] border border-white/10 rounded-2xl p-5 mt-2">

          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item)}
              className="text-left text-gray-300 hover:text-yellow-400 transition"
            >
              {item.label}
            </button>
          ))}

          <SurveyButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;