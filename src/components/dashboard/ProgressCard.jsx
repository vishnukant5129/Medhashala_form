import React from "react";

const ProgressCard = ({ progress }) => {
    const totalReferral = 3;

    const percentage = (progress / totalReferral) * 100;

    const isCompleted = progress >= totalReferral;

    return (
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">

            <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold text-[#14306D]">
                    Referral Progress
                </h2>

                <span
                    className={`text-2xl font-black ${isCompleted
                            ? "text-emerald-600"
                            : "text-[#14306D]"
                        }`}
                >
                    {progress} / {totalReferral}
                </span>

            </div>

            {/* Progress Bar */}

            <div className="mt-6 h-3 bg-gray-200 rounded-full overflow-hidden">

                <div
                    className={`h-full rounded-full transition-all duration-700 ${isCompleted
                            ? "bg-emerald-500"
                            : "bg-orange-400"
                        }`}
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

            {/* Message */}

            <p
                className={`mt-4 text-sm font-medium ${isCompleted
                        ? "text-emerald-600"
                        : "text-orange-500"
                    }`}
            >
                {isCompleted
                    ? "Congratulations! All referrals completed."
                    : `Complete ${totalReferral - progress
                    } more referral${totalReferral - progress > 1
                        ? "s"
                        : ""
                    } to unlock rewards.`}
            </p>

        </div>
    );
};

export default ProgressCard;