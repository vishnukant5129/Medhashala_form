import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/common/AdminNavbar.jsx";

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            <AdminNavbar />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;