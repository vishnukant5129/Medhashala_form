import { motion } from "framer-motion";
import {
  FaBrain,
  FaUserFriends,
  FaGift,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center pt-28 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFF8E1] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-[#F4B400] font-medium mb-6">
            MedhaShala AI Learning Campaign
          </div>

          {/* HUMAN TITLE */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0B1F3A] dark:text-white">
            Learn something useful.
            <br />
            Share it with friends.
            <br />
            Get rewarded for it.
          </h1>

          {/* HUMAN DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            We’re building MedhaShala to understand how students learn and what
            really helps them grow.
            <br /><br />
            Just fill a short survey and invite 3 friends — and we’ll unlock
            exclusive AI learning resources for you.
          </p>

          {/* WHAT USER GETS */}
          <div className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
            <p>✔ AI Prompt Templates that save your time</p>
            <p>✔ Simple AI tools guide for students</p>
            <p>✔ Access to ₹29 AI workshop series</p>
          </div>

          {/* CTA */}
          <div className="flex gap-5 mt-10 flex-wrap">
            <button
              onClick={() => navigate("/survey")}
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.primary,
              }}
              className="px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 duration-300"
            >
              Start Survey (2 min) 🚀
            </button>

            <button
              onClick={() =>
                document.getElementById("rewards")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-8 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 text-slate-700 dark:text-white hover:scale-105 duration-300"
            >
              See what you’ll get 🎁
            </button>
          </div>

          {/* TRUST LINE */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <p>⏱ Takes less than 2 minutes</p>
            <p>👥 Invite 3 friends to unlock</p>
            <p>🔒 No spam, only learning insights</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* MAIN CARD */}
          <div className="backdrop-blur-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 rounded-3xl p-8 shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg"
              >
                <FaFileAlt className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-semibold dark:text-white">
                  Quick Survey
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Just honest answers
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg"
              >
                <FaUserFriends className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-semibold dark:text-white">
                  Share with Friends
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Invite 3 people
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg"
              >
                <FaBrain className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-semibold dark:text-white">
                  AI Learning
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Practical skills
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg"
              >
                <FaGift className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-semibold dark:text-white">
                  Rewards
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Unlock instantly
                </p>
              </motion.div>

            </div>
          </div>

          {/* SOFT GLOW */}
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-yellow-300 blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-blue-300 blur-3xl opacity-30"></div>

        </motion.div>

      </div>
    </section>
  );
}