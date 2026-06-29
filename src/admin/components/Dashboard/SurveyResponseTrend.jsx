import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const barData = [
    { week: 'W1', value: 25 },
    { week: 'W2', value: 45 },
    { week: 'W3', value: 70 },
    { week: 'W4', value: 90 },
    { week: 'W5', value: 115 },
    { week: 'W6', value: 135 },
    { week: 'W7', value: 160 },
    { week: 'W8', value: 190 },
];

const SurveyResponseTrend = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Survey Response Trend</h3>
                    <p className="text-sm text-gray-400">Weekly survey submissions</p>
                </div>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">8 weeks</span>
            </div>

            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={16}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} />
                        <Bar dataKey="value" fill="#1e293b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SurveyResponseTrend;