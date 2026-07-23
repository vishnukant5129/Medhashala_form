import React, { useState } from "react";
import PersonalInformation from "../components/form/PersonalInformation.jsx";
import Stepper from "../components/common/Stepper.jsx";
import { ArrowRight } from "lucide-react";
import Submitted from "../components/form/Submitted.jsx";
import SurveyQuestions from "../components/form/SurveyQuestions.jsx";
import { registerUser } from "../services/authService.js";
import { submitSurvey } from "../services/surveyService.js"
import { getReferralDetails } from "../services/referralServices.js"

const SurveyForm = () => {
    const [personalInformation, setPersonalInformation] = useState({})
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [referralCode, setReferralcode] = useState();

    const totalSteps = 3;

    const handleSurveyFormInfo = async (e) => {

        setFormData(personalInformation)
        try {
            const res = await submitSurvey(formData);

            // console.log(res);

            // localStorage.setItem("token", res.token);
            localStorage.setItem("referralCode", res.user.referralCode);
            setReferralcode(res.user.referralCode)
            localStorage.setItem("referralCount", res.user.referralCount);
            // console.log("referralCount", res.user.referralCount)

            setCurrentStep(totalSteps);

        } catch (error) {
            console.error(error.response?.data || error.message);
            alert(error.response?.data?.message || "Registration failed");
        }
    }

    const handlePersonalInfo = async (e) => {
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
                        {currentStep === 1 && (
                            <PersonalInformation
                                formData={formData}
                                setFormData={setFormData}
                            />
                        )}

                        {currentStep === 2 && (
                            <div className="text-center py-10 text-gray-500">
                                <SurveyQuestions
                                    formData={formData}
                                    setFormData={setFormData}
                                />
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

                            {currentStep === totalSteps - 1 ? (
                                <button
                                    onClick={handleSurveyFormInfo}
                                    className="bg-green-600 text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handlePersonalInfo}
                                    className="bg-[#1e2a78] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
                                >
                                    Next
                                    <ArrowRight size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full max-w-md">
                    <Submitted
                        referralCode={referralCode}
                    />
                </div>
            )}
        </div>
    );
};

export default SurveyForm;