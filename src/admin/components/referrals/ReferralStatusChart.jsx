import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const ReferralStatusChart = ({ users = [] }) => {

    const pieData = [
        {
            name: "3 Referrals",
            value: users.filter((u) => u.referralCount === 3).length,
            color: "#4ade80",
        },
        {
            name: "2 Referrals",
            value: users.filter((u) => u.referralCount === 2).length,
            color: "#1e3a8a",
        },
        {
            name: "1 Referral",
            value: users.filter((u) => u.referralCount === 1).length,
            color: "#f59e0b",
        },
        {
            name: "0 Referrals",
            value: users.filter((u) => u.referralCount === 0).length,
            color: "#cbd5e1",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">

            <h3 className="font-bold text-slate-900 text-lg">
                Referral Status
            </h3>

            <div className="flex justify-center items-center h-[180px]">

                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={75}
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {pieData.map((item, index) => (
                                <Cell
                                    key={index}
                                    fill={item.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className="space-y-2.5 pt-4">

                {pieData.map((item, index) => (

                    <div
                        key={index}
                        className="flex justify-between items-center text-sm"
                    >

                        <div className="flex items-center gap-2">

                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ background: item.color }}
                            />

                            <span className="text-slate-600 font-medium">
                                {item.name}
                            </span>

                        </div>

                        <span className="font-bold text-slate-900">
                            {item.value}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ReferralStatusChart;