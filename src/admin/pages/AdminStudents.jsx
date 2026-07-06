import React, { useState, useEffect } from 'react';
import { MoreVertical, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllUsers } from '../../services/adminService';
import { exportCSV } from "../../utils/exportCSV";

const Students = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await getAllUsers();

                setUsers(res?.users || []);
            } catch (error) {
                console.error("Failed to fetch users:", error);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const MAX_REFERRALS = 3;

    const renderDots = (count = 0) => {
        return (
            <div className="flex items-center gap-1.5">
                {Array.from({ length: MAX_REFERRALS }, (_, index) => {
                    const active = index < count;

                    return (
                        <div
                            key={index}
                            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${active
                                ? "bg-green-500 shadow-sm shadow-green-300"
                                : "bg-gray-200"
                                }`}
                        />
                    );
                })}
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
            default: return 'bg-gray-50 text-gray-600 border border-gray-100';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-slate-600 font-medium">Loading users...</div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 bg-slate-50 min-h-screen space-y-6">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-[1600px] mx-auto">
                <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">College</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Year</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Reward</button>
                    <button className="flex-1 sm:flex-none text-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:bg-gray-50">Payment</button>
                </div>
                <button
                    onClick={() => exportCSV(users)}
                    className="flex items-center gap-2 bg-blue-950 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm w-full sm:w-auto justify-center"
                >
                    <Download size={16} />
                    Export CSV
                </button>
            </div>

            {users.length === 0 ? (
                <div className="text-center py-10 text-gray-500 max-w-[1600px] mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
                    No users found.
                </div>
            ) : (
                <>

                    <div className="block md:hidden space-y-4">
                        {users.map((student) => (
                            <div key={student.id || student._id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative space-y-4">

                                <button className="absolute top-4 right-3 p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors">
                                    <MoreVertical size={16} />
                                </button>

                                <div className="flex items-start gap-3.5 pr-6">
                                    <div className="w-11 h-11 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-base">
                                        {student.name ? student.name.charAt(0).toUpperCase() : '?'}
                                    </div>
                                    <div className="space-y-0.5">
                                        <h4 className="font-bold text-slate-900 text-base leading-tight">{student.name || 'N/A'}</h4>
                                        <p className="text-xs text-gray-400 font-medium">{student.college || 'N/A'}</p>
                                    </div>
                                    <span className="ml-auto text-xs font-bold text-blue-950 bg-blue-50/50 px-2 py-1 rounded-md self-start">
                                        {student.code || 'N/A'}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-y-3 pt-1 border-t border-gray-50 text-xs">
                                    <div>
                                        <span className="text-gray-400 block mb-0.5">Email</span>
                                        <span className="text-gray-700 font-medium truncate block max-w-[140px]" title={student.email}>
                                            {student.email || 'N/A'}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400 block mb-0.5">Phone</span>
                                        <span className="text-gray-700 font-medium">{student.phone || 'N/A'}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                    <div className="flex items-center gap-2">
                                        {renderDots(student.referralCount || 0)}
                                        <span className="text-xs font-bold text-slate-600">
                                            {student.referrals || `${student.referralCount || 0}/3`} refs
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(student.rewardStatus || 'Locked')}`}>
                                            {student.rewardStatus || 'Locked'}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle(student.payment || 'Pending')}`}>
                                            {student.payment || 'Pending'}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* --- DESKTOP TABLE VIEW --- */}
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
                                    {users.map((student) => (
                                        <tr key={student.id || student._id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-sm">
                                                        {student.name ? student.name.charAt(0).toUpperCase() : '?'}
                                                    </div>
                                                    <span className="font-bold text-slate-900 text-sm">{student.name || 'N/A'}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-400 whitespace-nowrap">{student.email || 'N/A'}</td>
                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">{student.phone || 'N/A'}</td>
                                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">{student.college || 'N/A'}</td>
                                            <td className="py-4 px-6 text-sm font-bold text-blue-800 whitespace-nowrap">{student.code || 'N/A'}</td>
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {renderDots(student.referralCount || 0)}
                                                    <span className="text-xs font-bold text-slate-700">
                                                        {student.referrals || `${student.referralCount || 0}/3`}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(student.rewardStatus || 'Locked')}`}>
                                                    {student.rewardStatus || 'Locked'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-md text-xs ${getBadgeStyle(student.payment || 'Pending')}`}>
                                                    {student.payment || 'Pending'}
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
                </>
            )}
        </div>
    );
};

export default Students; 