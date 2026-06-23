import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { NAV_LINKS, CTA_BUTTON } from "../../constants/navLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    } else {
      const sectionId = item.path.replace("#", "");

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const handleCTA = () => {
    navigate(CTA_BUTTON.path);
    setMenuOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between shadow-sm backdrop-blur-lg"
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer tracking-wide"
        style={{ color: COLORS.primary }}
      >
        MedhaShala
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(item)}
            className="font-medium hover:text-[#F4B400] transition duration-300"
            style={{ color: COLORS.text }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleCTA}
          className="hidden md:block px-5 py-2 rounded-xl font-semibold hover:scale-105 active:scale-95 transition"
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.primary,
          }}
        >
          {CTA_BUTTON.label}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          style={{ color: COLORS.primary }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full p-6 shadow-lg md:hidden flex flex-col gap-5"
          style={{
            backgroundColor: COLORS.white,
            borderBottom: `1px solid ${COLORS.border}`,
          }}
        >
          {NAV_LINKS.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item)}
              className="text-left py-2 border-b hover:text-[#F4B400] transition"
              style={{
                color: COLORS.text,
                borderColor: COLORS.border,
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={handleCTA}
            className="mt-3 py-3 rounded-xl font-semibold"
            style={{
              backgroundColor: COLORS.accent,
              color: COLORS.primary,
            }}
          >
            {CTA_BUTTON.label}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;