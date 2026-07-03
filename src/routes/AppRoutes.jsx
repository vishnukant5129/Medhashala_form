import { Routes, Route } from "react-router-dom";

// import Login from "../pages/Login.jsx";
import Home from "../pages/Home";
import SurveyForm from "../pages/SurveyForm.jsx";
import Dashboard from "../pages/Dashboard";
import Payment from "../pages/payment";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../admin/layout/AdminLayout";

import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminStudents from "../admin/pages/AdminStudents";
import AdminReferrals from "../admin/pages/AdminReferrals";
import AdminPayments from "../admin/pages/AdminPayments";

// import ProtectedRoute from "./ProtectedRoute";
// import Signup from "../pages/Signup.jsx";

const AppRoutes = () => {
    return (
        <Routes>

            {/* Public Route */}
            {/* <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}

            {/* Protected User Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
                <Route element={<UserLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/survey" element={<SurveyForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/payment" element={<Payment />} />
                </Route>
            {/* </Route> */}

            {/* Protected Admin Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="student" element={<AdminStudents />} />
                    <Route path="referrals" element={<AdminReferrals />} />
                    <Route path="payments" element={<AdminPayments />} />
                </Route>
            {/* </Route> */}

        </Routes>
    );
};

export default AppRoutes;