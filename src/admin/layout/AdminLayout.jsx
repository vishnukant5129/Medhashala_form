import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/common/AdminNavbar.jsx";
import Sidebar from "../components/common/Slidebar.jsx";

const AdminLayout = () => {
    return (
        <div className="h-screen w-full bg-gray-50 flex overflow-hidden">

            {/* SIDEBAR (fixed inside component) */}
            <Sidebar />

            {/* MAIN AREA */}
            <div className="flex flex-col flex-1  h-screen overflow-hidden">

                {/* TOP NAVBAR */}
                <div className="shrink-0 bg-white border-b border-gray-100">
                    <AdminNavbar />
                </div>

                {/* PAGE CONTENT (ONLY THIS SCROLLS) */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default AdminLayout;