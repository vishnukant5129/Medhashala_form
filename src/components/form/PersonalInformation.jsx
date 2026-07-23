import React from "react";
import { surveyData } from "../../constants/surveyData";

const PersonalInformation = ({ formData, setFormData }) => {
    const section = surveyData?.[0];


    const handleFieldChange = (fieldId, value) => {
        setFormData((previousData) => ({
            ...previousData,
            [fieldId]: value,
        }));
    };

    if (!section) {
        return null;
    }

    const inputStyles =
        "w-full min-w-0 rounded-xl border border-gray-200 bg-white px-3.5 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 sm:px-4 sm:py-3.5";

    return (
        <section className="w-full min-w-0">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-xl font-bold tracking-tight text-blue-950 sm:text-2xl">
                    {section.section}
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Please provide your personal information to continue.
                </p>
            </div>

            {/* Form Fields */}
            <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {section.questions?.map((question) => {
                    const {
                        id,
                        label,
                        type,
                        placeholder,
                        options = [],
                        required = false,
                        grid,
                    } = question;

                    return (
                        <div
                            key={id}
                            className={`
    min - w - 0 w - full
                            ${grid === "full"
                                    ? "md:col-span-2"
                                    : "col-span-1"
                                }
    `}
                        >
                            {/* Label */}
                            <label
                                htmlFor={id}
                                className="mb-1.5 block text-xs font-semibold text-gray-700 sm:mb-2 sm:text-sm"
                            >
                                {label}

                                {required && (
                                    <span className="ml-1 text-red-500">
                                        *
                                    </span>
                                )}
                            </label>

                            {/* Select Input */}
                            {type === "select" ? (
                                <select
                                    id={id}
                                    name={id}
                                    value={formData?.[id] || ""}
                                    onChange={(event) =>
                                        handleFieldChange(
                                            id,
                                            event.target.value
                                        )
                                    }
                                    required={required}
                                    className={inputStyles}
                                >
                                    <option value="">
                                        {placeholder || "Select an option"}
                                    </option>

                                    {options.map((option) => (
                                        <option
                                            key={option}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                /* Text / Email / Number Input */
                                <input
                                    id={id}
                                    name={id}
                                    type={type}
                                    placeholder={placeholder}
                                    value={formData?.[id] || ""}
                                    onChange={(event) =>
                                        handleFieldChange(
                                            id,
                                            event.target.value
                                        )
                                    }
                                    required={required}
                                    className={inputStyles}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );


};

export default PersonalInformation;
