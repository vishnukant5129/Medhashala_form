import React from "react";

const RecentActivity = ({ users = [] }) => {
    const recentUsers = [...users]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 10);

    const getTimeAgo = (date) => {
        const diff = Date.now() - new Date(date).getTime();

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (seconds < 60) return "Just now";
        if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
        if (hours < 24) return `${hours} hr${hours > 1 ? "s" : ""} ago`;
        if (days === 1) return "Yesterday";
        if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
        if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

        return `${years} year${years > 1 ? "s" : ""} ago`;
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full min-h-[350px]">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
                Recent Activity
            </h3>

            <div className="space-y-4">
                {recentUsers.length > 0 ? (
                    recentUsers.map((user) => (
                        <div
                            key={user._id}
                            className="flex items-center justify-between py-2"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </div>

                                <div>
                                    <p className="text-sm text-slate-700">
                                        <span className="font-semibold">
                                            {user.name || "Unknown User"}
                                        </span>{" "}
                                        registered
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {user.email || "No email"}
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400 whitespace-nowrap">
                                {getTimeAgo(user.createdAt)}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-10">
                        No recent activity found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecentActivity;