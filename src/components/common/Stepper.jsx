import React from 'react';

const Stepper = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Personal Info' },
        { id: 2, label: 'Survey' },
        { id: 3, label: 'Referral' }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto p-4 bg-white mb-6">

            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1 last:flex-none">


                        <div className="flex flex-col items-center relative">
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-medium transition-all duration-300 ${currentStep >= step.id
                                    ? 'bg-blue-950 border-blue-950 text-white'
                                    : 'bg-gray-100 border-gray-200 text-gray-400'
                                    }`}
                            >
                                {step.id}
                            </div>
                            <span
                                className={`absolute top-12 whitespace-nowrap text-sm font-medium transition-colors duration-300 ${currentStep >= step.id ? 'text-blue-950' : 'text-gray-400'
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>


                        {index < steps.length - 1 && (
                            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
                                <div
                                    className={`h-full bg-blue-950 transition-all duration-300 ${currentStep > step.id ? 'w-full' : 'w-0'
                                        }`}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;