import React from "react";
import { COLORS } from "../../constants/colors";

const RewardSection = () => {
    const eventDetails = {
        campaignTitle: "MEDHASHALA AI LEARNING CAMPAIGN",
        campaignSubtitle: "We're building a stronger student community and would love your feedback through our short survey.",
        title: "AI Workshop Access at a Special Student Price",
        subtitle: "Get access to 3 premium AI sessions from our upcoming AI Workshop Series for just ₹29.",
        // originalPrice: "₹299",
        eventPrice: "₹29",
        perksCount: "3 Premium Rewards Bundled Inside",
    };

    const dates = [
        { day: "15", month: "June", weekday: "Monday" },
        { day: "21", month: "June", weekday: "Sunday" },
        { day: "22", month: "June", weekday: "Monday" },
    ];

    const inclusions = [
        {
            icon: "📚",
            title: "AI Prompt Template Pack",
            desc: "A curated collection of powerful prompts built explicitly for:",
            points: [
                "Studying & Research",
                "Content Creation",
                "Career Growth",
                "Productivity",
                "Resume & LinkedIn Building",
            ],
        },
        {
            icon: "📄",
            title: "AI Tools Resource PDF",
            desc: "Comprehensive roadmap designed for student growth, covering:",
            points: [
                "Which AI tools to use & where to use them",
                "How students can benefit from modern frameworks",
                "Real-world applications for internships & projects",
                "Placements & academic development",
            ],
        },
    ];

    const steps = [
        { num: "1", text: "Fill out the Medhashala Survey Form." },
        { num: "2", text: "Share your unique referral link with at least 3 friends who are not part of the Medhashala community." },
        { num: "3", text: "Ask them to complete the survey using your referral link." },
    ];

    const handleEventPayment = () => {
        alert(`Initiating total student checkout of ${eventDetails.eventPrice} for Full Access Pass...`);
        // Razorpay/Stripe checkout script logic goes here
    };

    return (
        <div className="mt-1 max-w-4xl mx-auto px-4 pb-16">

            {/* SECTION TOP BROAD HEADER */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-black tracking-tight" style={{ color: COLORS.primary }}>
                    {eventDetails.campaignTitle}
                </h1>
                <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                    {eventDetails.campaignSubtitle}
                </p>
            </div>

            {/* CORE TICKET BUNDLE */}
            <div
                className="rounded-3xl border shadow-xl overflow-hidden bg-white relative mb-12"
                style={{ borderColor: COLORS.border }}
            >
                {/* TICKET HEADER */}
                <div
                    className="p-8 text-center relative border-b-2 border-dashed"
                    style={{ backgroundColor: COLORS.primary, borderColor: COLORS.border }}
                >
                    {/* Ticket Side Notches */}
                    <div className="absolute -left-4 -bottom-4 w-8 h-8 rounded-full z-20" style={{ backgroundColor: COLORS.background, borderRight: `1px solid ${COLORS.border}` }} />
                    <div className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full z-20" style={{ backgroundColor: COLORS.background, borderLeft: `1px solid ${COLORS.border}` }} />

                    <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
                        style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }}
                    >
                        🎁 What You'll Get
                    </div>

                    <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
                        ✓ {eventDetails.title}
                    </h2>
                    <p className="text-slate-300 mt-3 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
                        {eventDetails.subtitle}
                    </p>

                    {/* DATES INSIDE TICKET */}
                    <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            🗓️ Mark your calendar for these dates
                        </p>
                        <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                            {dates.map((d, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-center min-w-[90px]">
                                    <span className="block text-xl font-black text-white">{d.day}th</span>
                                    <span className="block text-[10px] uppercase tracking-wider text-slate-300 font-bold">{d.month} ({d.weekday.slice(0, 3)})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* INCLUSIONS LISTS */}
                <div className="p-6 md:p-8 bg-white">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-5">
                        {eventDetails.perksCount}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {inclusions.map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl border bg-slate-50/40 hover:bg-slate-50 transition-all duration-300 flex flex-col justify-between"
                                style={{ borderColor: COLORS.border }}
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-inner bg-white border" style={{ borderColor: COLORS.border }}>
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-lg leading-tight" style={{ color: COLORS.primary }}>
                                            ✓ {item.title}
                                        </h4>
                                    </div>

                                    <p className="text-sm font-semibold text-slate-600 mb-3">{item.desc}</p>

                                    <ul className="space-y-2">
                                        {item.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                                                <span className="text-amber-500 select-none">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM INTEGRATED PAYMENT */}
                <div
                    className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
                    style={{ backgroundColor: COLORS.background, borderColor: COLORS.border }}
                >
                    <div className="text-center sm:text-left">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Special Price Ticket</span>
                        <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                            <span className="text-3xl font-black" style={{ color: COLORS.primary }}>{eventDetails.eventPrice}</span>
                            <span className="text-sm line-through text-slate-400 font-medium">{eventDetails.originalPrice}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleEventPayment}
                        className="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-base tracking-wide transition-all duration-200 active:scale-[0.98] shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-3 group cursor-pointer"
                        style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
                    >
                        <span>Claim Access Pass</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">➔</span>
                    </button>
                </div>
            </div>

            {/* HOW TO PARTICIPATE & REFERRAL SYSTEM */}
            <div className="p-6 md:p-8 rounded-3xl border bg-white shadow-sm" style={{ borderColor: COLORS.border }}>
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl">📋</span>
                    <h3 className="text-xl font-black tracking-tight" style={{ color: COLORS.primary }}>How to Participate</h3>
                </div>

                {/* STEPS GRID */}
                <div className="grid md:grid-cols-3 gap-6 mb-8 relative">
                    {steps.map((s, i) => (
                        <div key={i} className="relative p-5 rounded-2xl border bg-slate-50/50" style={{ borderColor: COLORS.border }}>
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-3"
                                style={{ backgroundColor: COLORS.primary }}
                            >
                                {s.num}
                            </div>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{s.text}</p>
                        </div>
                    ))}
                </div>

                {/* TARGET REWARD LOCKED BOX */}
                <div className="p-5 md:p-6 rounded-2xl border border-dashed bg-amber-50/40 border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🎯</span>
                        <h4 className="font-extrabold text-amber-900 text-sm md:text-base">Rewards Unlock After Successful Referrals</h4>
                    </div>
                    <p className="text-xs md:text-sm text-amber-800/90 leading-relaxed">
                        Once <strong>3 referred students</strong> successfully submit their survey responses through your unique link, you instantly unlock your digital downloads suite & physical registration priority slots.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default RewardSection;