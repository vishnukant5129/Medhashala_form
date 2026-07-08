import React from "react";

const MetricCard = ({ icon: Icon, title, value, subtitle, subtitleColor }) => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50/70 flex items-center justify-center text-blue-900 shrink-0">
                <Icon size={24} strokeWidth={2} />
            </div>

            <div className="space-y-0.5">
                <span className="text-sm font-medium text-gray-400 block">
                    {title}
                </span>

                <span className="text-2xl font-bold text-slate-900 block leading-none">
                    {value}
                </span>

                <span
                    className={`text-xs font-semibold block pt-1 ${subtitleColor}`}
                >
                    {subtitle}
                </span>
            </div>
        </div>
    );
};

export default MetricCard;