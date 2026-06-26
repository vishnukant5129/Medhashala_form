import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const ReferralBox = () => {
    const referralCode = "VISHNU123";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralCode);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.log("Copy failed", err);
        }
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded-xl border">

            <span className="font-semibold text-lg tracking-wider">
                {referralCode}
            </span>

            <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                {copied ? (
                    <>
                        <Check size={18} />
                        Copied
                    </>
                ) : (
                    <>
                        <Copy size={18} />
                        Copy
                    </>
                )}
            </button>
        </div>
    );
};

export default ReferralBox;