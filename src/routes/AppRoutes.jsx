import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import SurveyForm from "../pages/SurveyForm.jsx";
import Dashboard from "../pages/Dashboard";
import Payment from "../pages/payment";

// layouts
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../admin/layout/AdminLayout";

// admin pages (abhi simple example)
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminStudents from "../admin/pages/AdminStudents";
import AdminReferrals from "../admin/pages/AdminReferrals";
import AdminPayments from "../admin/pages/AdminPayments";
import Login from "../pages/login.jsx";

const AppRoutes = () => {
    return (
        <Routes>

            {/* <Route path="/login" element={<Login/>}/> */}

            {/* ================= USER SIDE ================= */}
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<SurveyForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/payment" element={<Payment />} />
            </Route>

            {/* ================= ADMIN SIDE ================= */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="student" element={< AdminStudents />} />
                <Route path="referrals" element={<AdminReferrals />} />
                <Route path="payments" element={< AdminPayments />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;