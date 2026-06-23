import React from "react";
import { COLORS } from "../../constants/colors";

const RewardSection = ({
    referrals = 0,
    referralCode = "",
}) => {
    const isUnlocked = referrals >= 3;

    return (
        <div
            style={{ background: COLORS.white, borderColor: COLORS.border }}
            className="border rounded-2xl p-6 shadow-sm mt-8"
        >
            {/* TITLE */}
            <h2
                style={{ color: COLORS.primary }}
                className="text-2xl font-bold mb-2"
            >
                🎁 Your Rewards
            </h2>

            <p className="text-sm text-slate-500 mb-6">
                Invite 3 friends to unlock your rewards
            </p>

            {/* REFERRAL INFO */}
            <div className="space-y-3 mb-6">
                {/* <p style={{ color: COLORS.text }}>
                    <span className="font-semibold">Referral Code:</span>{" "}
                    <span style={{ color: COLORS.accent, fontWeight: "bold" }}>
                        {referralCode || "Generating..."}
                    </span>
                </p> */}

                <p style={{ color: COLORS.text }}>
                    <span className="font-semibold">Progress:</span>{" "}
                    {referrals} / 3 friends invited
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                        className="h-2 transition-all duration-300"
                        style={{
                            width: `${(referrals / 3) * 100}%`,
                            backgroundColor: COLORS.accent,
                        }}
                    />
                </div>

                {/* STATUS */}
                <p
                    className="font-semibold text-lg"
                    style={{
                        color: isUnlocked ? "green" : COLORS.primary,
                    }}
                >
                    {isUnlocked
                        ? "🎉 Congratulations! Rewards Unlocked"
                        : "🔒 Keep going — you're close!"}
                </p>
            </div>

            {/* REWARD BOX */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 space-y-2">
                <h3 style={{ color: COLORS.primary }} className="font-semibold">
                    What you’ll unlock:
                </h3>

                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>✔ AI Prompt Template Pack (save time in learning)</li>
                    <li>✔ AI Tools Resource PDF (student friendly guide)</li>
                    <li>
                        ✔ Access to{" "}
                        <span className="font-bold text-[#F4B400]">
                            ₹29 AI Workshop Series
                        </span>
                    </li>
                </ul>
            </div>

            {/* CTA */}
            {isUnlocked && (
                <button
                    style={{
                        backgroundColor: COLORS.accent,
                        color: COLORS.primary,
                    }}
                    className="w-full mt-6 py-3 rounded-xl font-bold hover:scale-105 transition"
                >
                    🚀 Continue to Payment (₹29 only)
                </button>
            )}
        </div>
    );
};

export default RewardSection;