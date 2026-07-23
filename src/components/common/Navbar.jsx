import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import SurveyButton from "../button/SurvayButton";
import logo from "../../assets/Medhashala.jpeg";

import { NAV_LINKS, CTA_BUTTON } from "../../constants/navLinks";
import { COLORS } from "../../constants/colors.js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  // Check whether user is logged in
  const isLoggedIn = Boolean(localStorage.getItem("token"));

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b px-6 py-4 backdrop-blur-xl lg:px-12"
      style={{
        backgroundColor: `${COLORS.white}E6`,
        borderColor: COLORS.border,
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer select-none items-center gap-3"
        >
          <div
            className="h-12 w-12 overflow-hidden rounded-xl shadow-lg"
            style={{
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <img
              src={logo}
              alt="MedhaShala"
              className="h-full w-full object-cover"
            />
          </div>

          <h2
            className="text-lg font-bold"
            style={{ color: COLORS.primary }}
          >
            MedhaShala
          </h2>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item)}
              className="font-medium transition-all duration-300"
              style={{
                color:
                  location.pathname === item.path
                    ? COLORS.accent
                    : COLORS.text,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">

          {!isLoggedIn ? (
            <>
              {/* LOGIN */}
              <button
                onClick={() => navigate("/login")}
                className="rounded-xl px-4 py-2 text-sm font-semibold transition-all hover:bg-slate-100"
                style={{
                  color: COLORS.primary,
                }}
              >
                Login
              </button>

              {/* SIGN UP */}
              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.primary,
                  boxShadow: `0 6px 16px ${COLORS.primary}25`,
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              {/* SURVEY */}
              <SurveyButton onClick={handleCTA} />

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="rounded-xl border px-4 py-2 text-sm font-semibold transition-all hover:bg-red-50"
                style={{
                  borderColor: "#FECACA",
                  color: "#DC2626",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          style={{ color: COLORS.primary }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen
          ? "mt-5 max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <div
          className="mt-2 flex flex-col gap-4 rounded-2xl border p-5"
          style={{
            backgroundColor: COLORS.white,
            borderColor: COLORS.border,
            boxShadow:
              "0 12px 30px rgba(11, 31, 58, 0.08)",
          }}
        >
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item)}
              className="text-left font-medium transition"
              style={{
                color:
                  location.pathname === item.path
                    ? COLORS.accent
                    : COLORS.text,
              }}
            >
              {item.label}
            </button>
          ))}

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="rounded-xl border py-2.5 text-sm font-semibold"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.primary,
                }}
              >
                Login
              </button>

              <button
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
                className="rounded-xl py-2.5 text-sm font-semibold text-white"
                style={{
                  backgroundColor: COLORS.primary,
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <SurveyButton onClick={handleCTA} />

              <button
                onClick={handleLogout}
                className="rounded-xl border py-2.5 text-sm font-semibold"
                style={{
                  borderColor: "#FECACA",
                  color: "#DC2626",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;