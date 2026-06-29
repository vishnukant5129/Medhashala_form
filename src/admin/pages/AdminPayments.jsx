import React from 'react';
import { CreditCard, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

// --- DATA FIXTURES FROM IMAGES ---
const revenueChartData = [
    { name: 'Jan', revenue: 3000 },
    { name: 'Feb', revenue: 5000 },
    { name: 'Mar', revenue: 8000 },
    { name: 'Apr', revenue: 11000 },
    { name: 'May', revenue: 15000 },
    { name: 'Jun', revenue: 19000 },
    { name: 'Jul', revenue: 22000 },
    { name: 'Aug', revenue: 24563 },
];

const statusPieData = [
    { name: 'Successful', value: 847, color: '#4ade80' }, // Green
    { name: 'Pending', value: 312, color: '#f59e0b' },    // Amber
    { name: 'Failed', value: 88, color: '#ef4444' },      // Red
];

const recentTransactions = [
    { id: 1, name: "Priya Sharma", amount: "₹29", txId: "TXN8821A", date: "12 Jun 2025", status: "Successful" },
    { id: 2, name: "Ananya Singh", amount: "₹29", txId: "TXN8822B", date: "12 Jun 2025", status: "Successful" },
    { id: 3, name: "Neha Gupta", amount: "₹29", txId: "TXN8823C", date: "11 Jun 2025", status: "Successful" },
    { id: 4, name: "Rahul Kumar", amount: "₹29", txId: "TXN8824D", date: "11 Jun 2025", status: "Successful" },
    { id: 5, name: "Sneha Reddy", amount: "₹29", txId: "TXN8825E", date: "10 Jun 2025", status: "Successful" },
    { id: 6, name: "Vikram Patel", amount: "₹29", txId: "TXN8826F", date: "10 Jun 2025", status: "Pending" },
    { id: 7, name: "Arjun Mehta", amount: "₹29", txId: "TXN8827G", date: "09 Jun 2025", status: "Pending" },
    { id: 8, name: "Karan Joshi", amount: "₹29", txId: "TXN8828H", date: "09 Jun 2025", status: "Failed" },
];

const Payments = () => {
    // Status color mapping for dynamic badges
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Successful': return 'bg-green-50 text-green-700 border border-green-100';
            case 'Pending': return 'bg-amber-50 text-amber-700 border border-amber-100';
            case 'Failed': return 'bg-red-50 text-red-600 border border-red-100';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <div className="p-4 sm:p-6 bg-slate-50 min-h-screen space-y-6 max-w-[1600px] mx-auto">

            {/* ================= ROW 1: METRICS BOXES ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1. Total Revenue Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-emerald-900 shrink-0">
                        <CreditCard size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Total Revenue</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">₹24,563</span>
                        <span className="text-xs font-medium text-emerald-600 inline-flex items-center gap-0.5 pt-1">
                            ↑ 22% this month
                        </span>
                    </div>
                </div>

                {/* 2. Successful Payments Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-emerald-900 shrink-0">
                        <CheckCircle2 size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Successful Payments</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">847</span>
                        <span className="text-xs font-medium text-emerald-600 block pt-1">
                            67.9% of students
                        </span>
                    </div>
                </div>

                {/* 3. Pending Payments Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-900 shrink-0">
                        <Clock size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Pending Payments</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">312</span>
                        <span className="text-xs font-semibold text-amber-500 block pt-1">
                            25.0% awaiting
                        </span>
                    </div>
                </div>

                {/* 4. Failed Payments Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-900 shrink-0">
                        <AlertCircle size={24} strokeWidth={2} />
                    </div>
                    <div className="space-y-0.5">
                        <span className="text-sm font-medium text-gray-400 block">Failed Payments</span>
                        <span className="text-2xl font-bold text-slate-900 block leading-none">88</span>
                        <span className="text-xs font-semibold text-red-500 block pt-1">
                            7.1% failure rate
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= ROW 2: CHARTS PANELS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Area Chart: Revenue Over Time */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm lg:col-span-2 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Revenue Over Time</h3>
                            <p className="text-xs text-gray-400">Cumulative revenue (₹)</p>
                        </div>
                        <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                            ₹24,563 total
                        </span>
                    </div>

                    <div className="h-[280px] w-full pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.08} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis
                                    domain={[0, 26000]}
                                    ticks={[0, 7000, 13000, 20000, 26000]}
                                    tickFormatter={(val) => val === 0 ? '₹0k' : `₹${val / 1000}k`}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                                />
                                <Tooltip formatter={(value) => [`₹${value}`, 'Revenue']} />
                                <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right Donut Chart: Payment Status Breakdown */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <h3 className="font-bold text-slate-900 text-lg">Payment Status</h3>

                    <div className="flex justify-center items-center h-[170px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={statusPieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={55}
                                    outerRadius={75}
                                    paddingAngle={4}
                                    dataKey="value"
                                >
                                    {statusPieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-2.5 pt-2 border-b border-gray-50 pb-4">
                        {statusPieData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-slate-500 font-medium">
                                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: item.color }} />
                                    {item.name}
                                </div>
                                <span className="font-bold text-slate-900">{item.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Footer Metric */}
                    <div className="pt-2">
                        <span className="text-xs font-medium text-gray-400 block">Revenue per student</span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-xl font-black text-blue-950">₹29</span>
                            <span className="text-xs font-medium text-gray-400">/ student</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= ROW 3: RECENT TRANSACTIONS TABLE ================= */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-50">
                    <h3 className="font-bold text-slate-900 text-lg">Recent Transactions</h3>
                    <button className="text-xs font-bold text-blue-900 hover:underline inline-flex items-center">
                        View all →
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="text-gray-400 text-xs font-semibold bg-white border-b border-gray-50/50">
                                <th className="py-4 px-6">Student</th>
                                <th className="py-4 px-6">Amount</th>
                                <th className="py-4 px-6">Transaction ID</th>
                                <th className="py-4 px-6">Date</th>
                                <th className="py-4 px-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/60">
                            {recentTransactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-slate-50/40 transition-colors group">
                                    {/* Student Avatar + Name */}
                                    <td className="py-3.5 px-6 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-xs">
                                                {tx.name.charAt(0)}
                                            </div>
                                            <span className="font-bold text-slate-900 text-sm">{tx.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-6 font-bold text-blue-950 text-sm whitespace-nowrap">{tx.amount}</td>
                                    <td className="py-3.5 px-6 text-sm text-gray-400 font-medium whitespace-nowrap">{tx.txId}</td>
                                    <td className="py-3.5 px-6 text-sm text-gray-500 font-medium whitespace-nowrap">{tx.date}</td>
                                    {/* Badge Status */}
                                    <td className="py-3.5 px-6 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${getStatusStyle(tx.status)}`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Payments;