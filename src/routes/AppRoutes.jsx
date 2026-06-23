import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SurveyForm from "../components/form/SurveyForm";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
        </Routes>
    );
};

export default AppRoutes;