import React from "react";

const StudentTable = ({
    students,
    renderDots,
    getBadgeStyle,
}) => {
    return (
        <div className="hidden md:block bg-white rounded-3xl border border-gray-100 shadow-sm max-w-[1600px] mx-auto overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                    <thead>
                        <tr className="border-b border-gray-50 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-white">
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">Phone</th>
                            <th className="py-4 px-6">College</th>
                            <th className="py-4 px-6">Referrals</th>
                            <th className="py-4 px-6">Reward Status</th>
                            <th className="py-4 px-6">Payment</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-50">
                        {students.map((student) => (
                            <tr
                                key={student._id}
                                className="hover:bg-slate-50 transition-colors"
                            >
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold">
                                            {student.name?.charAt(0).toUpperCase()}
                                        </div>

                                        <span className="font-semibold">
                                            {student.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="py-4 px-6">
                                    {student.email}
                                </td>

                                <td className="py-4 px-6">
                                    {student.phone}
                                </td>

                                <td className="py-4 px-6">
                                    {student.college}
                                </td>

                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-2">

                                        {renderDots(student.referralCount)}

                                        <span className="text-sm">
                                            {student.referralCount}/3
                                        </span>

                                    </div>
                                </td>

                                <td className="py-4 px-6">

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(
                                            student.rewardStatus
                                        )}`}
                                    >
                                        {student.rewardStatus}
                                    </span>

                                </td>

                                <td className="py-4 px-6">

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs ${getBadgeStyle(
                                            student.payment || "Pending"
                                        )}`}
                                    >
                                        {student.payment || "Pending"}
                                    </span>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;