import React from 'react';

const RevenueCard = ({
    title,
    amount,
    percentage ,
    isPositive = true,
    Icon 
}) => {
    return (
        <div className="flex items-center gap-6 p-6 bg-white border border-gray-100 shadow-sm rounded-3xl max-w-sm">
            {/* Icon Container */}
            <div className="flex items-center justify-center w-14 h-14 bg-green-50 rounded-2xl text-slate-700">
                {Icon ? <Icon size={24} /> : <span>💳</span>}
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 font-medium text-sm md:text-base">
                    {title}
                </span>

                {/* Rupees Amount */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950 flex items-center gap-0.5">
                    ₹{amount}
                </h2>

                {/* Percentage Growth Indicator */}
                <p className={`text-sm font-semibold flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{isPositive ? '↑' : '↓'}</span>
                    {percentage} <span className="text-gray-400 font-normal text-xs">this month</span>
                </p>
            </div>
        </div>
    );
};

export default RevenueCard;