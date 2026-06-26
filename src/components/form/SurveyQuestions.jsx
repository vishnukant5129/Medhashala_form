import React from 'react';
import { surveyData } from '../../constants/surveyData';
import Question from './Question.jsx'; // Path adjust kar lijiye

const SurveyQuestions = ({ formData, setFormData }) => {

    // Global Centralized onChange Handler 
    const handleValueChange = (id, incomingValue, type, option = null) => {
        setFormData((prev) => {
            const currentAnswers = prev || {};

            if (type === "checkbox") {
                // Checkbox ke liye array manage karna padega
                const currentArray = Array.isArray(currentAnswers[id]) ? currentAnswers[id] : [];
                if (currentArray.includes(option)) {
                    return {
                        ...prev,
                        [id]: currentArray.filter((item) => item !== option)
                    };
                } else {
                    return {
                        ...prev,
                        [id]: [...currentArray, option]
                    };
                }
            }

            // Normal text aur radio ke liye direct state update
            return {
                ...prev,
                [id]: incomingValue
            };
        });
    };

    // Index 0 (Personal Info) ko chhod kar baaki saare sections nikalne ke liye .slice(1) use kiya
    const activeSections = surveyData.slice(1);

    return (
        <div className="w-full space-y-10 text-left">
            {activeSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                    {/* SECTION HEADER */}
                    <div className="border-b pb-2 mb-4">
                        <h2 className="text-xl font-bold text-slate-800">
                            {section.section}
                        </h2>
                        {section.description && (
                            <p className="text-sm text-slate-500 mt-1">{section.description}</p>
                        )}
                    </div>

                    {/* LOOP ON QUESTIONS */}
                    <div className="space-y-4">
                        {section.questions.map((q) => (
                            <Question
                                key={q.id}
                                q={q}
                                value={formData?.[q.id]}
                                onChange={handleValueChange}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SurveyQuestions;