import React from 'react';

const activities = [
    { id: 1, text: "New student registered — ", boldText: "Pooja Iyer", time: "2 min ago", icon: "👤", bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { id: 2, text: "Survey submitted — ", boldText: "Aditya Rao", time: "5 min ago", icon: "📄", bgColor: "bg-green-50", iconColor: "text-green-600" },
    { id: 3, text: "Payment received ₹29 — ", boldText: "Simran Kaur", time: "12 min ago", icon: "💳", bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
    { id: 4, text: "Referral completed — ", boldText: "Dev Mishra", time: "18 min ago", icon: "🔗", bgColor: "bg-orange-50", iconColor: "text-orange-600" },
    { id: 5, text: "Reward unlocked — ", boldText: "Tanvi Shah", time: "25 min ago", icon: "🏅", bgColor: "bg-amber-50", iconColor: "text-amber-600" },
];

const RecentActivity = () => {
    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full min-h-[350px] flex flex-col justify-between">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-4 flex-1 justify-center flex flex-col">
                {activities.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-4">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm ${item.bgColor} ${item.iconColor}`}>
                                {item.icon}
                            </div>
                            <p className="text-sm text-slate-600">
                                {item.text}<span className="font-bold text-slate-900">{item.boldText}</span>
                            </p>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;