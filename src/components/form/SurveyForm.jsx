import { useMemo, useState } from "react";
import { surveyData } from "../../constants/surveyData";
import Question from "./Question";

export default function SurveyForm() {
    const [formData, setFormData] = useState({});

    // 🔥 Handle both radio/text AND checkbox
    const handleChange = (id, value, type, option) => {
        setFormData((prev) => {
            const current = prev[id];

            // ✅ Checkbox logic
            if (type === "checkbox") {
                const arr = current || [];

                if (arr.includes(option)) {
                    return {
                        ...prev,
                        [id]: arr.filter((item) => item !== option),
                    };
                }

                return {
                    ...prev,
                    [id]: [...arr, option],
                };
            }

            // ✅ Radio / Text logic
            return {
                ...prev,
                [id]: value,
            };
        });
    };

    // 🔥 Validation
    const handleSubmit = (e) => {
        e.preventDefault();

        const allQuestions = surveyData.flatMap(
            (section) => section.questions
        );

        const missingRequired = allQuestions.filter(
            (q) => q.required && !formData[q.id]
        );

        if (missingRequired.length > 0) {
            alert("⚠️ Please fill all required fields before submitting.");
            return;
        }

        console.log("Survey Data:", formData);
        alert("🚀 Survey Submitted Successfully!");
    };

    // 🔥 Progress calculation
    const progress = useMemo(() => {
        const totalQuestions = surveyData.flatMap(
            (s) => s.questions
        ).length;

        const answered = Object.keys(formData).length;

        return Math.round((answered / totalQuestions) * 100);
    }, [formData]);

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-[#0B1F3A] mb-6">
                Medhashala Survey
            </h1>

            {/* Progress Bar */}
            <div className="mb-10 text-center">
                <p className="text-sm text-gray-600 mb-2">
                    Progress: {progress}%
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="h-2 bg-[#F4B400] rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {surveyData.map((section, i) => (
                    <div key={i} className="mb-16">

                        {/* Section Title */}
                        <h2 className="text-2xl font-bold mb-6 text-[#F4B400]">
                            {section.section}
                        </h2>

                        {/* Questions */}
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

                {/* Submit Button */}
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