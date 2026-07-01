import React from "react";
import { ArrowRight, Lock } from "lucide-react";

const RewardStatus = ({ progress }) => {
    const totalReferral = 3;

    const isUnlocked = progress >= totalReferral;

    return (
        <div className="mt-8">

            {isUnlocked ? (

                <div className="bg-[#FFF8E8] border border-yellow-200 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-5">

                    <div className="flex items-center gap-5">

                        <div className="text-5xl">
                            🎉
                        </div>

                        <div>

                            <h2 className="text-2xl font-black text-[#14306D]">
                                Reward Unlocked!
                            </h2>

                            <p className="text-slate-500 mt-1">
                                You are eligible for exclusive rewards and workshop access.
                            </p>

                        </div>

                    </div>

                    <button className="bg-[#14306D] hover:bg-[#0F2454] transition-all text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2">

                        Pay ₹29 & Reserve

                        <ArrowRight size={18} />

                    </button>

                </div>

            ) : (

                <div className="bg-red-50 border border-red-200 rounded-3xl p-6 flex items-center gap-5">

                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">

                        <Lock
                            size={30}
                            className="text-red-500"
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-black">

                            Reward Status :{" "}

                            <span className="text-red-500">

                                Locked

                            </span>

                        </h2>

                        <p className="text-slate-500 mt-2">

                            Refer{" "}
                            {totalReferral - progress}{" "}
                            more friend
                            {totalReferral - progress > 1 ? "s" : ""}
                            {" "}to unlock your exclusive rewards.

                        </p>

                    </div>

                </div>

            )}

        </div>
    );
};

export default RewardStatus;