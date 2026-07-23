import React from "react";
import { Bell } from "lucide-react";

import ReferralCard from "../components/dashboard/ReferralCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import Rewards from "../components/dashboard/Rewards";
import RewardStatus from "../components/dashboard/RewardStatus";

const Dashboard = () => {
    const progress =
        Number(localStorage.getItem("referralCount")) || 0;

    const referralCode =
        localStorage.getItem("referralCode");

    const paymentStatus =
        localStorage.getItem("paymentStatus");

    // 3 referrals OR ₹69 payment
    const allRewardsUnlocked =
        progress >= 3 || paymentStatus === "paid";

    const rewards = [
        {
            id: 1,
            text: "AI Prompt Template Pack",
        },
        {
            id: 2,
            text: "AI Tools Resource PDF",
        },
        {
            id: 3,
            text: "Special Access to MedhaShala AI Workshop",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F4F6F9] p-6">

            <div className="max-w-6xl mx-auto">

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-4xl font-black text-[#14306D]">
                        My Dashboard
                    </h1>

                    <Bell />

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <ReferralCard
                        referralCode={referralCode}
                    />

                    <ProgressCard
                        progress={progress}
                    />

                </div>

                <Rewards
                    rewards={rewards}
                    allRewardsUnlocked={allRewardsUnlocked}
                />

                <RewardStatus
                    progress={progress}
                    allRewardsUnlocked={allRewardsUnlocked}
                />

            </div>

        </div>
    );
};

export default Dashboard;