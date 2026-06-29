import React from 'react';
import { Share2, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Line, PieChart, Pie, Cell } from 'recharts';

// --- DATA FIXTURES FROM IMAGES ---
const growthData = [
    { name: 'Jan', Actual: 45, Target: 45 },
    { name: 'Feb', Actual: 90, Target: 95 },
    { name: 'Mar', Actual: 150, Target: 155 },
    { name: 'Apr', Actual: 220, Target: 225 },
    { name: 'May', Actual: 290, Target: 295 },
    { name: 'Jun', Actual: 350, Target: 345 },
    { name: 'Jul', Actual: 420, Target: 415 },
    { name: 'Aug', Actual: 495, Target: 495 },
];

const pieData = [
    { name: '3 Referrals', value: 423, color: '#4ade80' },
    { name: '2 Referrals', value: 267, color: '#1e3a8a' },
    { name: '1 Referral', value: 312, color: '#f59e0b' },
    { name: '0 Referrals', value: 245, color: '#cbd5e1' },
];

const leaderboardData = [
    { rank: 1, name: "Priya Sharma", college: "IIT Delhi", code: "MS001", referrals: "3 / 3" },
    { rank: 2, name: "Ananya Singh", college: "BITS Pilani", code: "MS003", referrals: "3 / 3" },
    { rank: 3, name: "Neha Gupta", college: "DTU Delhi", code: "MS005", referrals: "3 / 3" },
    { rank: 4, name: "Karan Joshi", college: "SRM Chennai", code: "MS008", referrals: "3 / 3" },
];

const progressData = [
    { label: "3 Referrals Completed", count: "423 students", percent: "34% of total", width: "34%", color: "bg-green-500" },
    { label: "2 Referrals", count: "267 students", percent: "21% of total", width: "21%", color: "bg-blue-950" },
    { label: "1 Referral", count: "312 students", percent: "25% of total", width: "25%", color: "bg-amber-500" },
    { label: "No Referrals", count: "245 students", percent: "20% of total", width: "20%", color: "bg-slate-300" },
];

const Referrals = () => {
    return (
        <div className="p-4 sm:p-6 bg-slate-50 min-h-screen space-y-6 max-w-[1600px] mx-auto">

            {/* ================= ROW 1: METRICS BOXES ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* 1. Total Referrals Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50/70 flex items-center justify-center text-blue-900 shrink-0">
                        <Share2 size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Total Referrals</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">2,341</span>
                        <span className="text-xs font-bold text-green-500 inline-flex items-center gap-0.5 pt-1">
                            ↑ 18%
                        </span>
                    </div>
                </div>

                {/* 2. Successful Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50/70 flex items-center justify-center text-blue-900 shrink-0">
                        <CheckCircle2 size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Successful</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">1,269</span>
                        <span className="text-xs font-semibold text-green-600 block pt-1">
                            54.2% rate
                        </span>
                    </div>
                </div>

                {/* 3. Avg / Student Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50/70 flex items-center justify-center text-blue-900 shrink-0">
                        <TrendingUp size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Avg / Student</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">1.88</span>
                        <span className="text-xs font-bold text-amber-500 block pt-1">
                            Target: 3.0
                        </span>
                    </div>
                </div>

                {/* 4. Conversion Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50/70 flex items-center justify-center text-blue-900 shrink-0">
                        <Award size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Conversion</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">34%</span>
                        <span className="text-xs font-semibold text-green-600 block pt-1">
                            423 complete
                        </span>
                    </div>
                </div>

            </div>

            {/* ================= ROW 2: GROWTH CHART & DONUT CHART ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left: Referral Growth Chart Container */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm lg:col-span-2 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Referral Growth</h3>
                            <p className="text-xs text-gray-400">Actual vs Target</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-0.5 bg-blue-950 inline-block"></span> Actual
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-0.5 border-t border-dashed border-amber-500 inline-block"></span> Target
                            </div>
                        </div>
                    </div>

                    <div className="h-[280px] w-full pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.03} />
                                        <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis domain={[0, 600]} ticks={[0, 150, 300, 450, 600]} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="Actual" stroke="#1e3a8a" strokeWidth={2} fillOpacity={1} fill="url(#colorActual)" />
                                <Line type="monotone" dataKey="Target" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right: Donut Chart Status Panel */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <h3 className="font-bold text-slate-900 text-lg">Referral Status</h3>

                    <div className="flex justify-center items-center h-[180px] relative">
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
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-2.5 pt-4">
                        {pieData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-slate-600 font-medium">
                                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: item.color }} />
                                    {item.name}
                                </div>
                                <span className="font-bold text-slate-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= ROW 3: LEADERBOARD & BREAKDOWN ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Leaderboard Section */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 overflow-hidden">
                    <h3 className="font-bold text-slate-900 text-lg">Top Referrers Leaderboard</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="text-gray-400 text-xs font-medium border-b border-gray-50">
                                    <th className="pb-3 font-semibold">Rank</th>
                                    <th className="pb-3 font-semibold">Name</th>
                                    <th className="pb-3 font-semibold">College</th>
                                    <th className="pb-3 font-semibold">Code</th>
                                    <th className="pb-3 font-semibold">Referrals</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50/50">
                                {leaderboardData.map((row) => (
                                    <tr key={row.rank}>
                                        <td className="py-3.5">
                                            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white ${row.rank === 1 ? 'bg-amber-500' : 'bg-blue-950'
                                                }`}>
                                                {row.rank}
                                            </span>
                                        </td>
                                        <td className="py-3.5 font-bold text-slate-900 text-sm">{row.name}</td>
                                        <td className="py-3.5 text-sm text-gray-400 font-medium">{row.college}</td>
                                        <td className="py-3.5 font-bold text-blue-900 text-sm">{row.code}</td>
                                        <td className="py-3.5 font-bold text-green-600 text-sm">{row.referrals}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Progress Tracking Section */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-5">
                    <h3 className="font-bold text-slate-900 text-lg">Referral Progress Breakdown</h3>
                    <div className="space-y-4">
                        {progressData.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex justify-between items-baseline text-sm">
                                    <span className="font-medium text-slate-700">{item.label}</span>
                                    <span className="font-bold text-slate-900">{item.count}</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                                </div>
                                <span className="text-xs text-gray-400 block font-medium">{item.percent}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Referrals;