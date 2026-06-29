import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 160 },
    { month: 'Apr', value: 240 },
    { month: 'May', value: 330 },
    { month: 'Jun', value: 390 },
    { month: 'Jul', value: 450 },
    { month: 'Aug', value: 520 },
];

const ReferralGrowth = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Referral Growth</h3>
                    <p className="text-sm text-gray-400">Monthly referral submissions</p>
                </div>
                <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-semibold">2025</span>
            </div>

            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1e293b" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#1e293b" stopOpacity={0.01} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 600]} ticks={[0, 150, 300, 450, 600]} />
                        <Area type="monotone" dataKey="value" stroke="#1e293b" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#growthGradient)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ReferralGrowth;