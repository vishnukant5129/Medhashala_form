import React from "react";
import {
    BookOpen,
    Lock,
    CheckCircle2,
} from "lucide-react";

const Rewards = ({
    rewards,
    allRewardsUnlocked,
}) => {

    return (

        <div className="bg-white rounded-3xl shadow-sm mt-8 p-6 md:p-8">

            <h2 className="text-2xl font-black text-[#14306D] mb-6">
                Rewards
            </h2>

            <div className="space-y-4">

                {rewards.map((reward) => (

                    <div
                        key={reward.id}
                        className={`
                            flex justify-between items-center
                            rounded-2xl p-5
                            transition-all duration-300
                            ${allRewardsUnlocked
                                ? "bg-green-50 border border-green-200"
                                : "bg-[#F8FAFC] border border-slate-100"
                            }
                        `}
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className={`
                                    w-12 h-12 rounded-xl
                                    flex items-center justify-center
                                    ${allRewardsUnlocked
                                        ? "bg-green-100"
                                        : "bg-blue-50"
                                    }
                                `}
                            >

                                <BookOpen
                                    size={22}
                                    className={
                                        allRewardsUnlocked
                                            ? "text-green-600"
                                            : "text-[#14306D]"
                                    }
                                />

                            </div>

                            <span className="font-medium text-slate-700">
                                {reward.text}
                            </span>

                        </div>

                        {allRewardsUnlocked ? (

                            <CheckCircle2
                                size={24}
                                className="text-emerald-500 fill-emerald-100"
                            />

                        ) : (

                            <Lock
                                size={22}
                                className="text-slate-400"
                            />

                        )}

                    </div>

                ))}

            </div>

        </div>

    );
};

export default Rewards;