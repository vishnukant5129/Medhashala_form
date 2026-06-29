import React, { useState } from 'react';
import { Bell, Copy, CheckCircle2, BookOpen, Gift, ArrowRight } from 'lucide-react';
import { color, progress } from 'framer-motion';

const Dashboard = () => {
    const [copied, setCopied] = useState(false);
    const [progress, setProgress] = useState(0);
    const referralCode = "MS001";

    const getWidth = (progress) => {
        if (progress === 1) return "33.33%";
        if (progress === 2) return "66.66%";
        if (progress === 3) return "100%";
        return "0%";
    };

    const getColor = (progress) => {
        if (progress === 0) return "bg-white";
        return "bg-emerald-500";
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 second baad resets copy text
    };

    const rewards = [
        { id: 1, text: 'AI Prompt Template Pack' },
        { id: 2, text: 'AI Tools Resource PDF' },
        { id: 3, text: 'Special Access to MedhaShala AI Workshop (₹29)' },
    ];

    return (
        <div className="min-h-screen bg-[#F4F6F9] p-4 md:p-8 flex justify-center items-start">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm p-6 md:p-8 space-y-6">

                {/* --- HEADER SECTION --- */}
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-2xl md:text-3xl font-black text-[#0B1F3A]">
                        My Dashboard
                    </h1>
                    <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
                        <Bell size={22} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full"></span>
                    </button>
                </div>

                {/* --- TOP CARDS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Referral Code */}
                    <div className="bg-[#F3F6FC] rounded-2xl p-6 flex justify-between items-center">
                        <div>
                            <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                                Your Referral Code
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-3xl font-black text-[#0B1F3A] tracking-wider">
                                    {referralCode}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    className="p-1.5 text-slate-400 hover:text-[#0B1F3A] rounded transition-colors"
                                    title="Copy Code"
                                >
                                    <Copy size={18} />
                                </button>
                                {copied && <span className="text-xs text-emerald-600 font-medium">Copied!</span>}
                            </div>
                        </div>
                        <div className="w-14 h-14 bg-[#F4B400] text-white rounded-2xl flex items-center justify-center shadow-sm">
                            <Gift size={28} />
                        </div>
                    </div>

                    {/* Card 2: Referral Progress */}
                    <div className="border border-slate-100 bg-white shadow-xs rounded-2xl p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-bold text-[#0B1F3A]">Referral Progress</span>
                            <span className="text-base font-black text-emerald-600 tracking-wide">{progress} / 3</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full bg-emerald-500 transition-all duration-700 ease-in-out`}
                                style={{ width: getWidth(progress) }}
                            />
                        </div>

                        <p className="text-xs font-bold text-emerald-600 mt-3">
                            Congratulations! All referrals complete.
                        </p>
                    </div>

                </div>

                {/* --- REWARDS LIST SECTION --- */}
                <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-4">
                    <h2 className="text-base font-bold text-[#0B1F3A]">Rewards</h2>

                    <div className="space-y-3">
                        {rewards.map((reward) => (
                            <div
                                key={reward.id}
                                className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl border border-slate-50 hover:border-slate-200 transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                        <BookOpen size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">
                                        {reward.text}
                                    </span>
                                </div>
                                <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-50" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- BOTTOM BANNER (UNLOCK) --- */}
                <div className="bg-[#FFFDF4] border border-[#FCEEC7] rounded-2xl p-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="text-3xl animate-bounce">🎉</div>
                        <div>
                            <h3 className="text-base font-black text-[#0B1F3A]">Reward Unlocked!</h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                You are eligible for exclusive rewards and workshop access.
                            </p>
                        </div>
                    </div>

                    <button className="w-full md:w-auto bg-[#0B1F3A] hover:bg-[#16335c] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                        Pay ₹29 & Reserve
                        <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;