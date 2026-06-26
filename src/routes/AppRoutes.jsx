import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SurveyForm from "../components/form/SurveyForm";
import Dashboard from "../pages/Dashboard.jsx"
import Payment from "../pages/payment.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    );
};

export default AppRoutes;