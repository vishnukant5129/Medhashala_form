import {
  FaCalendarAlt,
  FaUserFriends,
  FaClock,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import ProblemCard from "./ProblemCard";

const problems = [
  {
    title: "Lack of planning",
    icon: FaCalendarAlt,
  },
  {
    title: "No accountability",
    icon: FaUserFriends,
  },
  {
    title: "Difficulty maintaining focus",
    icon: FaClock,
  },
  {
    title: "Working alone feels overwhelming",
    icon: FaUsers,
  },
  {
    title: "Progress is hard to measure",
    icon: FaChartLine,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] dark:text-white">
            Why do students struggle with consistency?
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400">
            Most people don't fail because they lack potential.
            They fail because they lack systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              icon={problem.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}