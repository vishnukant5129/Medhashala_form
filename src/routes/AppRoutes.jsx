import { Routes, Route } from "react-router-dom";
import SubmitPage from "../pages/SubmitPage";
import Home from "../pages/Home";
import SurveyForm from "../components/form/SurveyForm";
import Dashboard from "../pages/Dashboard.jsx"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="/submitted" element={<SubmitPage />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    );
};

export default AppRoutes;