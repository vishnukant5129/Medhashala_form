import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";
import { NAV_LINKS, CTA_BUTTON } from "../../constants/navLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    } else {
      window.location.hash = item.path;
    }
    setMenuOpen(false);
  };

  const handleCTA = () => {
    navigate(CTA_BUTTON.path);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: COLORS.white,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
      className="w-full px-6 py-4 flex items-center justify-between shadow-sm relative"
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="font-bold text-xl cursor-pointer tracking-wide"
        style={{ color: COLORS.primary }}
      >
        MedhaShala
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center font-medium">
        {NAV_LINKS.map((item, index) =>
          item.type === "route" ? (
            <Link
              key={index}
              to={item.path}
              style={{ color: COLORS.text }}
              className="hover:text-[#F4B400] transition"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={index}
              href={item.path}
              style={{ color: COLORS.text }}
              className="hover:text-[#F4B400] transition"
            >
              {item.label}
            </a>
          )
        )}
      </div>

      {/* Right CTA */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleCTA}
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.primary,
          }}
          className="px-4 py-2 rounded-lg font-semibold hover:scale-105 active:scale-95 transition"
        >
          {CTA_BUTTON.label}
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: COLORS.primary }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full md:hidden flex flex-col gap-4 p-6 shadow-md"
          style={{ backgroundColor: COLORS.white }}
        >
          {NAV_LINKS.map((item, index) =>
            item.type === "route" ? (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b"
                style={{ color: COLORS.text }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b"
                style={{ color: COLORS.text }}
              >
                {item.label}
              </a>
            )
          )}

          <button
            onClick={handleCTA}
            style={{
              backgroundColor: COLORS.accent,
              color: COLORS.primary,
            }}
            className="mt-2 py-3 rounded-lg font-semibold"
          >
            {CTA_BUTTON.label}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;