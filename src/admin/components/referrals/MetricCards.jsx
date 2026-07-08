import React from "react";
import {
    Share2,
    CheckCircle2,
    TrendingUp,
    Award,
} from "lucide-react";

import MetricCard from "./MetricCard";

const MetricCards = ({ analytics }) => {
    if (!analytics) return null;

    const {
        totalUsers,
        unlockedUsers,
        totalReferrals,
    } = analytics;

    const averageReferral =
        totalUsers > 0
            ? (totalReferrals / totalUsers).toFixed(2)
            : 0;

    const conversionRate =
        totalUsers > 0
            ? ((unlockedUsers / totalUsers) * 100).toFixed(1)
            : 0;

    const cards = [
        {
            icon: Share2,
            title: "Total Referrals",
            value: totalReferrals,
            subtitle: `${totalUsers} Students`,
            subtitleColor: "text-green-500",
        },
        {
            icon: CheckCircle2,
            title: "Successful",
            value: unlockedUsers,
            subtitle: "Rewards Unlocked",
            subtitleColor: "text-green-600",
        },
        {
            icon: TrendingUp,
            title: "Avg / Student",
            value: averageReferral,
            subtitle: "Target : 3",
            subtitleColor: "text-amber-500",
        },
        {
            icon: Award,
            title: "Conversion",
            value: `${conversionRate}%`,
            subtitle: `${unlockedUsers} Complete`,
            subtitleColor: "text-green-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
                <MetricCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subtitle={card.subtitle}
                    subtitleColor={card.subtitleColor}
                />
            ))}
        </div>
    );
};

export default MetricCards;