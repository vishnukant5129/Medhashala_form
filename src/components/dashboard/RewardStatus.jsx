import React from "react";
import {
    ArrowRight,
    Lock,
    CreditCard,
} from "lucide-react";

const RewardStatus = ({
    progress,
    allRewardsUnlocked,
}) => {

    const totalReferral = 3;

    const remainingReferral =
        Math.max(totalReferral - progress, 0);

    const handlePayment = () => {

        const YOUR_RAZORPAY_PAYMENT_LINK = "https://rzp.io/rzp/Medhashalamasterclass"

        // Razorpay Payment Link
        window.location.href =
            YOUR_RAZORPAY_PAYMENT_LINK;

    };

    return (

        <div className="mt-8">

            {allRewardsUnlocked ? (

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

                    <div className="bg-green-100 text-green-700 px-5 py-3 rounded-xl font-bold">
                        All Rewards Unlocked 🎁
                    </div>

                </div>

            ) : (

                <div className="bg-red-50 border border-red-200 rounded-3xl p-6">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <div className="flex items-center gap-5">

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
                                    {remainingReferral}{" "}
                                    more friend
                                    {remainingReferral > 1
                                        ? "s"
                                        : ""
                                    }
                                    {" "}to unlock your rewards.

                                </p>

                            </div>

                        </div>

                        <button
                            onClick={handlePayment}
                            className="
                                bg-[#14306D]
                                hover:bg-[#0F2454]
                                text-white
                                px-7 py-4
                                rounded-xl
                                font-bold
                                flex items-center gap-3
                                transition-all
                                shadow-lg
                                hover:scale-105
                            "
                        >

                            <CreditCard size={20} />

                            Pay ₹69 & Unlock

                            <ArrowRight size={18} />

                        </button>

                    </div>

                </div>

            )}

        </div>

    );
};

export default RewardStatus;