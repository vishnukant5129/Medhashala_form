import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../../assets/Medhashala.jpeg";

const AdminNavbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkStyles =
        "block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100";

    const getPageInfo = () => {
        switch (location.pathname) {
            case "/admin":
                return {
                    title: "Dashboard",
                    subtitle: "Welcome back, Admin — here's what's happening today.",
                };
            case "/admin/student":
                return {
                    title: "Students",
                    subtitle: "Manage all registered students and their progress.",
                };
            case "/admin/referrals":
                return {
                    title: "Referral Analytics",
                    subtitle: "Track referral performance and student engagement.",
                };
            case "/admin/payments":
                return {
                    title: "Payment Analytics",
                    subtitle: "Track revenue, payment status and transaction history.",
                };
            default:
                return {
                    title: "Admin",
                    subtitle: "Welcome to admin panel",
                };
        }
    };

    const page = getPageInfo();

    return (
        <div className="bg-white shadow-md px-4 md:px-6 py-3">

            {/* TOP BAR */}
            <div className="flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        className="w-8 h-8 rounded-full"
                        alt="logo"
                    />
                    <div>
                        <h1 className="text-base md:text-lg font-semibold text-gray-800">
                            {page.title}
                        </h1>

                        <p className="hidden md:block text-sm text-gray-500">
                            {page.subtitle}
                        </p>
                    </div>
                </div>

                {/* DESKTOP SEARCH */}
                <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[300px]">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none ml-2 w-full text-sm"
                    />
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">

                    {/* PROFILE */}
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold cursor-pointer">
                        A
                    </div>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {mobileOpen && (
                <div className="md:hidden mt-3 bg-white border rounded-2xl p-4 space-y-2 shadow-sm">

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-1">
                        Quick Actions
                    </p>

                    <NavLink
                        to="/admin"
                        className={linkStyles}
                        onClick={() => setMobileOpen(false)}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/admin/student"
                        className={linkStyles}
                        onClick={() => setMobileOpen(false)}
                    >
                        Students
                    </NavLink>

                    <NavLink
                        to="/admin/referrals"
                        className={linkStyles}
                        onClick={() => setMobileOpen(false)}
                    >
                        Referrals
                    </NavLink>

                    <NavLink
                        to="/admin/payments"
                        className={linkStyles}
                        onClick={() => setMobileOpen(false)}
                    >
                        Payments
                    </NavLink>

                </div>
            )}
        </div>
    );
};

export default AdminNavbar;