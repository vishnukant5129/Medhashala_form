import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  FileText,
  Share2,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: LayoutGrid, to: "/admin" },
    { id: "Students", label: "Students", icon: Users, to: "/admin/student" },
    // { id: "Responses", label: "Responses", icon: FileText, to: "/admin/responses" },
    { id: "Referrals", label: "Referrals", icon: Share2, to: "/admin/referrals" },
    { id: "Payments", label: "Payments", icon: CreditCard, to: "/admin/payments" },
    // { id: "Analytics", label: "Analytics", icon: BarChart3, to: "/admin/analytics" },
    // { id: "Settings", label: "Settings", icon: Settings, to: "/admin/settings" },
  ];

  const mobileItems = [
    { id: "Dashboard", label: "Overview", icon: LayoutGrid, to: "/admin" },
    { id: "Students", label: "Students", icon: Users, to: "/admin/student" },
    { id: "Referrals", label: "Referrals", icon: Share2, to: "/admin/referrals" },
    { id: "Payments", label: "Payments", icon: CreditCard, to: "/admin/payments" },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-100 p-4 fixed left-0 top-0 select-none">

        {/* BRAND */}
        <div className="flex items-center gap-3 px-2 py-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#131d4a] flex items-center justify-center text-amber-400 font-bold text-xs">
            M
          </div>
          <div>
            <span className="font-extrabold text-[#0e1d54] text-lg">
              MedhaShala
            </span>
            <span className="block text-xs text-amber-500 font-bold">
              Admin Panel
            </span>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 font-bold text-sm
                  ${isActive
                    ? "bg-orange-50 text-[#0e1d54]"
                    : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3.5">
                      <Icon
                        size={20}
                        strokeWidth={isActive ? 2.5 : 2}
                        className={isActive ? "text-amber-500" : "text-slate-400"}
                      />
                      <span>{item.label}</span>
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-between z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] rounded-t-3xl">
        {mobileItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.to}
              className="flex flex-col items-center justify-center flex-1 py-1 gap-1"
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={isActive ? "text-[#0e1d54]" : "text-slate-400"}
                  />
                  <span
                    className={`text-[10px] font-bold tracking-wide ${
                      isActive ? "text-[#0e1d54]" : "text-slate-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* CONTENT SPACER */}
      <div className="md:pl-64 pb-20 md:pb-0 min-h-screen bg-slate-50/50"></div>
    </>
  );
};

export default Sidebar;