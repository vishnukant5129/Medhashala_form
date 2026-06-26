import React from "react";
import { surveyData } from "../../constants/surveyData";

const PersonalInformation = ({ formData, setFormData }) => {
        const section = surveyData?.[0] || { section: "Personal Info", questions: [] };

    const handleChange = (id, value) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-950">
                {section.section}
            </h2>

            <div className="grid grid-cols-2 gap-6">
                {section.questions.map((q) => (
                    <div key={q.id} className={q.grid || "col-span-2"}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {q.label}
                        </label>

                        {q.type === "select" ? (
                            <select
                                className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                                value={formData[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                required={q.required}
                            >
                                <option value="">{q.placeholder}</option>
                                {q.options?.map((opt, idx) => (
                                    <option key={idx} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={q.type}
                                placeholder={q.placeholder}
                                value={formData[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                                required={q.required}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalInformation;