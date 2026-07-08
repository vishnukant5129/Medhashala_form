import React from "react";

const ProgressBreakdown = ({ users = [] }) => {

    const total = users.length || 1;

    const createItem = (count, color, label) => {

        const students = users.filter(
            (u) => u.referralCount === count
        ).length;

        const percent = (
            (students / total) *
            100
        ).toFixed(0);

        return {
            label,
            students,
            percent,
            color,
        };
    };

    const progress = [
        createItem(3, "bg-green-500", "Completed (3 Referrals)"),
        createItem(2, "bg-blue-900", "2 Referrals"),
        createItem(1, "bg-yellow-500", "1 Referral"),
        createItem(0, "bg-red-400", "No Referrals"),
    ];

    return (
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <h3 className="font-bold text-lg mb-6">
                Referral Progress
            </h3>

            <div className="space-y-6">

                {progress.map((item) => (

                    <div key={item.label}>

                        <div className="flex justify-between mb-2">

                            <span className="font-medium">
                                {item.label}
                            </span>

                            <span className="text-sm text-gray-500">
                                {item.students} Students
                            </span>

                        </div>

                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

                            <div
                                className={`${item.color} h-full rounded-full`}
                                style={{
                                    width: `${item.percent}%`,
                                }}
                            />

                        </div>

                        <p className="text-xs text-gray-400 mt-1">
                            {item.percent}% of total students
                        </p>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default ProgressBreakdown;