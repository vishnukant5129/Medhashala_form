import React from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
} from "recharts";

const COLORS = [
    "#0f172a",
    "#1e293b",
    "#334155",
    "#475569",
    "#64748b",
    "#64748b",
    "#334155",
    "#0f172a",
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg px-4 py-3">
                <p className="text-sm font-semibold text-gray-700">{label}</p>
                <p className="text-lg font-bold text-slate-900">
                    {payload[0].value} Responses
                </p>
            </div>
        );
    }

    return null;
};

const SurveyResponseTrend = ({ users }) => {

    const barNames = [
        "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8",
    ];

    const barData = barNames.map(week => ({
        week,
        value: 100,
    }));

    const userList = users;

    userList.forEach((user) => {
        const createdAt = new Date(user.createdAt);

        const weekIndex = Math.floor(createdAt.getDate() / 7);

        if (weekIndex >= 0 && weekIndex < barData.length) {
            barData[weekIndex].value++;
        }
    });
    // console.log(barData)

    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 w-full">

            <div className="flex items-center justify-between mb-6">

                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Survey Response Trend
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                        Weekly survey submissions
                    </p>
                </div>

                <div className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Last 8 Weeks
                </div>

            </div>

            <div className="h-72 w-full">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={barData}
                        margin={{
                            top: 10,
                            right: 20,
                            left: -15,
                            bottom: 0,
                        }}
                        barCategoryGap="30%"
                    >

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#f1f5f9"
                        />

                        <XAxis
                            dataKey="week"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#94a3b8",
                                fontSize: 12,
                            }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 200]}
                            ticks={[0, 50, 100, 150, 200]}
                            tick={{
                                fill: "#94a3b8",
                                fontSize: 12,
                            }}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ fill: "#f8fafc" }}
                        />

                        <Bar
                            dataKey="value"
                            radius={[8, 8, 0, 0]}
                            animationDuration={1000}
                        >
                            {barData.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

            <div className="mt-6 border-t pt-4 flex justify-between text-sm">

                <div>
                    <p className="text-gray-500">Total Responses</p>
                    <h3 className="text-2xl font-bold text-slate-900">
                        {barData.reduce((sum, item) => sum + item.value, 0)}
                    </h3>
                </div>

                <div className="text-right">
                    <p className="text-gray-500">Peak Week</p>
                    <h3 className="text-2xl font-bold text-green-600">
                        W8
                    </h3>
                </div>

            </div>

        </div>
    );
};

export default SurveyResponseTrend;