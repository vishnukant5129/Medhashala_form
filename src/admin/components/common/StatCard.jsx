import React from "react";

const StatCard = ({
    title,
    value,
    subtitle,
    subtitleColor = "text-green-500",
    Icon,
}) => {
    return (
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">

            <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
                    <Icon size={30} className="text-indigo-700" />
                </div>

                <div>
                    <p className="text-gray-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold text-indigo-900">
                        {value}
                    </h2>

                    <p className={`text-sm font-medium mt-1 ${subtitleColor}`}>
                        {subtitle}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StatCard;