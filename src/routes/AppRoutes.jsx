import { Routes, Route } from "react-router-dom";
import SubmitPage from "../pages/SubmitPage";
import Home from "../pages/Home";
import SurveyForm from "../components/form/SurveyForm";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="/submitted" element={<SubmitPage />} />
        </Routes>
    );
};

export default AppRoutes;