import React from "react";

const LeaderboardTable = ({ users = [] }) => {
    const leaderboard = [...users]
        .sort((a, b) => b.referralCount - a.referralCount)
        .slice(0, 10);

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-slate-900">
                    Top Referrers
                </h3>

                <span className="text-xs text-slate-400">
                    Top {leaderboard.length} Students
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">

                    <thead>
                        <tr className="text-left text-xs uppercase text-gray-400 border-b">
                            <th className="pb-3">Rank</th>
                            <th className="pb-3">Student</th>
                            <th className="pb-3">College</th>
                            <th className="pb-3">Code</th>
                            <th className="pb-3 text-center">Referrals</th>
                        </tr>
                    </thead>

                    <tbody>

                        {leaderboard.map((user, index) => (

                            <tr
                                key={user._id}
                                className="border-b last:border-none hover:bg-slate-50"
                            >
                                <td className="py-4">

                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${index === 0
                                                ? "bg-yellow-500"
                                                : index === 1
                                                    ? "bg-gray-500"
                                                    : index === 2
                                                        ? "bg-orange-500"
                                                        : "bg-blue-900"
                                            }`}
                                    >
                                        {index + 1}
                                    </div>

                                </td>

                                <td className="py-4">
                                    <h4 className="font-semibold">{user.name}</h4>
                                    <p className="text-xs text-gray-400">
                                        {user.email}
                                    </p>
                                </td>

                                <td className="py-4">
                                    {user.college}
                                </td>

                                <td className="py-4 font-semibold text-blue-900">
                                    {user.referralCode}
                                </td>

                                <td className="py-4 text-center">

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${user.referralCount === 3
                                                ? "bg-green-100 text-green-700"
                                                : user.referralCount >= 1
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {user.referralCount}/3
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

export default LeaderboardTable;