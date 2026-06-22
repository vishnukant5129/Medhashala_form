import {
    FaBrain,
    FaClock,
    FaUserFriends,
    FaUsers,
    FaGraduationCap,
    FaChartLine,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
    {
        title: "AI Planner",
        description:
            "Create personalized schedules that actually work.",
        icon: FaBrain,
    },

    {
        title: "Focus Sessions",
        description:
            "Deep work sessions with Pomodoro timer.",
        icon: FaClock,
    },

    {
        title: "Human Accountability",
        description:
            "Stay motivated with partners and communities.",
        icon: FaUserFriends,
    },

    {
        title: "Live Study Rooms",
        description:
            "Work together with others in real-time.",
        icon: FaUsers,
    },

    {
        title: "Real Mentors",
        description:
            "Connect with experienced mentors.",
        icon: FaGraduationCap,
    },

    {
        title: "Progress Tracking",
        description:
            "Track streaks and measurable growth.",
        icon: FaChartLine,
    },
];

export default function FeaturesSection() {
    return (
        <section
            className="py-28 px-6 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-950"
            id="features"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">

                    <span className="px-5 py-2 rounded-full bg-[#F4B400]/20 text-[#F4B400] font-semibold">
                        Features
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-[#0B1F3A] dark:text-white">
                        Everything you need to stay consistent
                    </h2>

                    <p className="mt-6 text-slate-500 dark:text-slate-400">
                        AI planning, focus sessions and accountability — all in one place.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}