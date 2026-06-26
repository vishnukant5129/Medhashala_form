import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation.jsx";
import Stepper from "../common/Stepper.jsx";
import { ArrowRight } from "lucide-react";
import Submitted from "./Submitted.jsx";
import SurveyQuestions from "./SurveyQuestions.jsx";

const SurveyForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});

    const totalSteps = 3;

    const handleNext = (e) => {
        e.preventDefault();

        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100 p-6 flex-col">
            {currentStep !== totalSteps ? (
                <>
                    <h1 className="text-4xl font-bold mb-6">Survey Form</h1>

                    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">

                        <Stepper currentStep={currentStep} />

                        <form onSubmit={handleNext} className="mt-12">


                            {currentStep === 1 && (
                                <PersonalInformation
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            )}

                            {currentStep === 2 && (
                                <div className="text-center py-10 text-gray-500">
                                    <SurveyQuestions />
                                </div>
                            )}

                            <div className="mt-8 flex justify-between items-center border-t pt-4">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    disabled={currentStep === 1}
                                    className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    className="bg-[#1e2a78] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
                                >
                                    {currentStep === totalSteps - 1 ? "Submit" : "Next"}
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <div className="w-full max-w-md">
                    <Submitted />
                </div>
            )}
        </div>
    );
};

export default SurveyForm;