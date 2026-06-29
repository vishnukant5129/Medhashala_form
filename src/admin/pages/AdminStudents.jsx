import React from 'react';
import { MoreVertical, Download, ChevronLeft, ChevronRight } from 'lucide-react';

// Demo Data
const studentsData = [
    { id: 1, name: "Priya Sharma", email: "priya.sharma@example.com", phone: "98765 43210", college: "IIT Delhi", code: "MS001", referrals: "3/3", refCount: 3, rewardStatus: "Unlocked", payment: "Paid" },
    { id: 2, name: "Rahul Kumar", email: "rahul.k@example.com", phone: "91234 56789", college: "NIT Trichy", code: "MS002", referrals: "2/3", refCount: 2, rewardStatus: "Pending", payment: "Paid" },
    { id: 3, name: "Ananya Singh", email: "ananya.s@example.com", phone: "99887 76655", college: "BITS Pilani", code: "MS003", referrals: "3/3", refCount: 3, rewardStatus: "Unlocked", payment: "Paid" },
    { id: 4, name: "Vikram Patel", email: "vikram.p@example.com", phone: "88776 65544", college: "VIT Vellore", code: "MS004", referrals: "1/3", refCount: 1, rewardStatus: "Locked", payment: "Pending" },
    { id: 5, name: "Neha Gupta", email: "neha.g@example.com", phone: "77665 54433", college: "DTU Delhi", code: "MS005", referrals: "3/3", refCount: 3, rewardStatus: "Unlocked", payment: "Paid" },
    { id: 6, name: "Arjun Mehta", email: "arjun.m@example.com", phone: "66554 43322", college: "IIIT Hyderabad", code: "MS006", referrals: "0/3", refCount: 0, rewardStatus: "Locked", payment: "Pending" },
    { id: 7, name: "Sneha Reddy", email: "sneha.r@example.com", phone: "55443 32211", college: "Manipal University", code: "MS007", referrals: "2/3", refCount: 2, rewardStatus: "Pending", payment: "Paid" },
    { id: 8, name: "Karan Joshi", email: "karan.j@example.com", phone: "44332 21100", college: "SRM Chennai", code: "MS008", referrals: "3/3", refCount: 3, rewardStatus: "Unlocked", payment: "Failed" },
];

const Students = () => {
    // Helper function for Referral Dots
    const renderDots = (count) => {
        return (
            <div className="flex gap-1 items-center justify-start">
                {[...Array(3)].map((_, i) => (
                    <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < count ? 'bg-green-500' : 'bg-gray-200'}`}
                    />
                ))}
            </div>
        );
    };

    // Status Styles Generator
    const getBadgeStyle = (status) => {
        switch (status) {
            case 'Unlocked': return 'bg-green-50 text-green-700 border border-green-100';
            case 'Pending': return 'bg-amber-50 text-amber-700 border border-amber-100';
            case 'Locked': return 'bg-red-50 text-red-600 border border-red-100';
            case 'Paid': return 'bg-green-50 text-green-700 font-semibold';
            case 'Failed': return 'bg-red-50 text-red-600 font-semibold';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <div className="p-4 sm:p-6 bg-slate-50 min-h-screen space-y-6">

            {/* Top Bar: Filters and Export Action */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-[1600px] mx-auto">
                <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">College</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Year</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Reward</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Payment</button>
                </div>
                <button className="flex items-center gap-2 bg-blue-950 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm w-full sm:w-auto justify-center">
                    <Download size={16} /> Export CSV
                </button>
            </div>

            {/* --- MOBILE CARDS VIEW (Visible only on Mobile) --- */}
            <div className="block md:hidden space-y-4">
                {studentsData.map((student) => (
                    <div key={student.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative space-y-4">

                        {/* Context Actions Menu Top Right */}
                        <button className="absolute top-4 right-3 p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors">
                            <MoreVertical size={16} />
                        </button>

                        {/* Top Profile Header Section */}
                        <div className="flex items-start gap-3.5 pr-6">
                            <div className="w-11 h-11 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-base">
                                {student.name.charAt(0)}
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-slate-900 text-base leading-tight">{student.name}</h4>
                                <p className="text-xs text-gray-400 font-medium">{student.college}</p>
                            </div>
                            <span className="ml-auto text-xs font-bold text-blue-950 bg-blue-50/50 px-2 py-1 rounded-md self-start">
                                {student.code}
                            </span>
                        </div>

                        {/* Middle Info Details (Collapsible style structure) */}
                        <div className="grid grid-cols-2 gap-y-3 pt-1 border-t border-gray-50 text-xs">
                            <div>
                                <span className="text-gray-400 block mb-0.5">Email</span>
                                <span className="text-gray-700 font-medium truncate block max-w-[140px]">{student.email}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 block mb-0.5">Phone</span>
                                <span className="text-gray-700 font-medium">{student.phone}</span>
                            </div>
                        </div>

                        {/* Bottom Status Row (Matching your Image design exactly) */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                            {/* Referrals with Dots */}
                            <div className="flex items-center gap-2">
                                {renderDots(student.refCount)}
                                <span className="text-xs font-bold text-slate-600">{student.referrals} refs</span>
                            </div>

                            {/* Badges Layout */}
                            <div className="flex items-center gap-1.5">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(student.rewardStatus)}`}>
                                    {student.rewardStatus}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle(student.payment)}`}>
                                    {student.payment}
                                </span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* --- DESKTOP TABLE VIEW (Hidden on Mobile) --- */}
            <div className="hidden md:block bg-white rounded-3xl border border-gray-100 shadow-sm max-w-[1600px] mx-auto overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="border-b border-gray-50 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-white">
                                <th className="py-4 px-6">Name</th>
                                <th className="py-4 px-6">Email</th>
                                <th className="py-4 px-6">Phone</th>
                                <th className="py-4 px-6">College</th>
                                <th className="py-4 px-6">Code</th>
                                <th className="py-4 px-6">Referrals</th>
                                <th className="py-4 px-6">Reward Status</th>
                                <th className="py-4 px-6">Payment</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {studentsData.map((student) => (
                                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-sm">
                                                {student.name.charAt(0)}
                                            </div>
                                            <span className="font-bold text-slate-900 text-sm">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-400 whitespace-nowrap">{student.email}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">{student.phone}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">{student.college}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-blue-800 whitespace-nowrap">{student.code}</td>
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {renderDots(student.refCount)}
                                            <span className="text-xs font-bold text-slate-700">{student.referrals}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(student.rewardStatus)}`}>
                                            {student.rewardStatus}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-md text-xs ${getBadgeStyle(student.payment)}`}>
                                            {student.payment}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-center whitespace-nowrap">
                                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
                                            <MoreVertical size={16} className="mx-auto" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Pagination Footer */}
            {/* <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-5 border border-gray-100 rounded-3xl sm:border-none bg-white gap-4 max-w-[1600px] mx-auto shadow-sm sm:shadow-none">
                <p className="text-sm text-gray-400 order-2 sm:order-1">
                    Showing <span className="font-medium text-slate-700">1–8</span> of <span className="font-bold text-slate-900">1,247</span>
                </p>

                <div className="flex items-center gap-1.5 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">
                    <button className="p-2 text-gray-400 hover:text-slate-700 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                        <ChevronLeft size={16} />
                    </button>
                    <div className="flex gap-1.5 items-center">
                        <button className="w-8 h-8 rounded-full text-sm font-bold bg-blue-950 text-white flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 flex items-center justify-center">2</button>
                        <button className="w-8 h-8 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 flex items-center justify-center hidden sm:flex">3</button>
                        <span className="text-gray-400 px-1 text-sm hidden sm:inline">...</span>
                        <button className="w-8 h-8 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 flex items-center justify-center">156</button>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-slate-700 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Students;