import React from 'react';

const referrers = [
    { rank: 1, name: "Priya Sharma", college: "IIT Delhi", refs: "3 refs", bg: "bg-amber-500 text-white" },
    { rank: 2, name: "Ananya Singh", college: "BITS Pilani", refs: "3 refs", bg: "bg-slate-900 text-white" },
    { rank: 3, name: "Neha Gupta", college: "DTU Delhi", refs: "3 refs", bg: "bg-blue-900 text-white" },
    { rank: 4, name: "Karan Joshi", college: "SRM Chennai", refs: "3 refs", bg: "bg-indigo-950 text-white" },
];

const TopReferrers = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full min-h-[350px] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900">Top Referrers</h3>
                <a href="#viewall" className="text-sm font-semibold text-slate-900 flex items-center gap-1 hover:underline">
                    View all &rarr;
                </a>
            </div>

            <div className="space-y-4 flex-1 justify-center flex flex-col">
                {referrers.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-4">
                            {/* Rank Badge */}
                            <div className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center ${user.bg}`}>
                                {user.rank}
                            </div>
                            {/* Info */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 leading-tight">{user.name}</h4>
                                <p className="text-xs text-gray-400">{user.college}</p>
                            </div>
                        </div>
                        {/* Count Tag */}
                        <span className="bg-slate-50 border border-gray-100 text-xs px-3 py-1.5 rounded-xl font-medium text-gray-500">
                            <span className="font-bold text-slate-900">{user.refs.split(' ')[0]}</span> refs
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopReferrers;