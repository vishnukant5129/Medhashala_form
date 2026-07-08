import React from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
} from "recharts";

const ReferralGrowthChart = ({ analytics }) => {
    const growthData = analytics?.growthData || [];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm lg:col-span-2 space-y-4">

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                        Referral Growth
                    </h3>
                    <p className="text-xs text-gray-400">
                        Actual vs Target
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-blue-950"></span>
                        Actual
                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 border-t border-dashed border-amber-500"></span>
                        Target
                    </div>
                </div>
            </div>

            {growthData.length === 0 ? (
                <div className="h-[280px] flex items-center justify-center text-gray-400">
                    No Growth Data Available
                </div>
            ) : (
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={growthData}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.03} />
                                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                stroke="#f1f5f9"
                            />

                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                axisLine={false}
                                tickLine={false}
                            />

                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="Actual"
                                stroke="#1e3a8a"
                                fill="url(#colorActual)"
                                strokeWidth={2}
                            />

                            <Line
                                type="monotone"
                                dataKey="Target"
                                stroke="#f59e0b"
                                strokeDasharray="4 4"
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default ReferralGrowthChart;