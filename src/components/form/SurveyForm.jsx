import { useState } from "react";
import { surveyData } from "../../constants/surveyData";
import Question from "./Question";

export default function SurveyForm() {
    const [formData, setFormData] = useState({});

    const handleChange = (id, value) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Survey Data:", formData);
        alert("Survey Submitted Successfully 🚀");
    };

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">

            <h1 className="text-4xl font-bold text-center text-[#0B1F3A] mb-10">
                Medhashala Survey
            </h1>

            <form onSubmit={handleSubmit}>

                {surveyData.map((section, i) => (
                    <div key={i} className="mb-16">

                        <h2 className="text-2xl font-bold mb-6 text-[#F4B400]">
                            {section.section}
                        </h2>

                        {section.questions.map((q) => (
                            <Question
                                key={q.id}
                                q={q}
                                value={formData[q.id]}
                                onChange={handleChange}
                            />
                        ))}

                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full py-4 bg-[#F4B400] text-[#0B1F3A] font-bold rounded-xl hover:scale-105 transition"
                >
                    Submit Survey
                </button>

            </form>
        </div>
    );
}