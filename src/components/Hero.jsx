import { motion } from "framer-motion";
import {
  FaBrain,
  FaUserFriends,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFF8E1] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-[#F4B400] font-medium mb-6">
            AI Powered Productivity Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#0B1F3A] dark:text-white">
            Plan Better.
            <br />
            Focus Deeper.
            <br />
            Grow Together.
          </h1>

          <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            An AI-powered platform combining intelligent planning,
            focus sessions and human accountability to help students
            stay consistent and achieve goals.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="bg-[#F4B400] text-[#0B1F3A] px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 duration-300">
              Fill Survey
            </button>

            <button className="backdrop-blur-xl bg-white/20 border border-white/20 px-8 py-4 rounded-2xl dark:text-white hover:scale-105 duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/20 dark:bg-slate-800/30 border border-white/20 rounded-3xl p-8 shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <FaBrain className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-bold dark:text-white">
                  AI Planner
                </h3>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <FaClock className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-bold dark:text-white">
                  Focus Sessions
                </h3>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <FaUserFriends className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-bold dark:text-white">
                  Mentors
                </h3>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <FaChartLine className="text-4xl text-[#F4B400]" />
                <h3 className="mt-4 font-bold dark:text-white">
                  Progress
                </h3>
              </motion.div>

            </div>
          </div>

          {/* floating circles */}
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-yellow-300 blur-3xl opacity-40"></div>

          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-blue-300 blur-3xl opacity-40"></div>
        </motion.div>

      </div>
    </section>
  );
}