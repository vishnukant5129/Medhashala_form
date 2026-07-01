import React, { useState } from "react";
import { Copy, Gift, Check } from "lucide-react";

const ReferralCard = ({ referralCode }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralCode);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <div className="bg-[#F3F6FC] rounded-3xl p-6 md:p-8 flex justify-between items-center shadow-sm">

            {/* Left Side */}

            <div>

                <p className="text-gray-500 text-sm md:text-base font-medium">
                    Your Referral Code
                </p>

                <div className="flex items-center gap-3 mt-3">

                    <h2 className="text-4xl md:text-5xl font-black tracking-[6px] text-[#14306D]">
                        {referralCode}
                    </h2>

                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg hover:bg-white transition-all"
                    >
                        {
                            copied ? (
                                <Check
                                    size={20}
                                    className="text-emerald-500"
                                />
                            ) : (
                                <Copy
                                    size={20}
                                    className="text-gray-500"
                                />
                            )
                        }
                    </button>

                </div>

                {
                    copied && (
                        <p className="text-sm text-emerald-600 mt-2 font-medium">
                            Referral code copied!
                        </p>
                    )
                }

            </div>

            {/* Right Side */}

            <div className="w-20 h-20 rounded-3xl bg-[#F5A623] flex items-center justify-center shadow-md">

                <Gift
                    size={34}
                    className="text-white"
                />

            </div>

        </div>
    );
};

export default ReferralCard;