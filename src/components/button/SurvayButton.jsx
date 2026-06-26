import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SurveyButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/survey")}
            className="bg-[#1e2a78] text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition"
        >
            Start Survey
            <ArrowRight size={18} />
        </button>
    );
};

export default SurveyButton;