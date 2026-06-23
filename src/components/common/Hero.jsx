import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/colors";

export default function Hero() {
  const navigate = useNavigate();

  // Animation variants for the container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const features = [
    { icon: "📝", title: "Survey", desc: "Share your experience" },
    { icon: "👥", title: "Friends", desc: "Invite your peers" },
    { icon: "🧠", title: "AI Tools", desc: "Smart assistant suite" },
    { icon: "🎁", title: "Rewards", desc: "Unlock exclusive perks" },
  ];

  return (
    <section
      className="flex items-center relative overflow-hidden  lg:py-5"
      style={{
        background: `linear-gradient(135deg, ${COLORS.background} 0%, #ffffff 50%, #fff7e6 100%)`,
      }}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT COLUMN: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-semibold text-sm shadow-sm border backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 243, 196, 0.7)", color: COLORS.primary, borderColor: "#ffe69c" }}
          >
            <span className="animate-pulse">🚀</span> MedhaShala AI Campaign
          </div> */}

          <h1
            className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            style={{ color: COLORS.primary }}
          >
            Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">smarter</span>.<br />
            Share faster.<br />
            Get rewarded.
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
            Help shape the future of educational AI tools. Complete a quick survey and unlock curated academic rewards.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button
              onClick={() => navigate("/survey")}
              className="px-8 py-4 rounded-2xl font-bold shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 transition-all duration-200"
              style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
            >
              🚀 Start Survey
            </button>

            {/* <button
              className="px-8 py-4 rounded-2xl border font-semibold bg-white/80 backdrop-blur-sm hover:bg-slate-50 active:scale-95 transition-all duration-200"
              style={{ borderColor: COLORS.border, color: COLORS.text }}
            >
              🎁 View Rewards
            </button> */}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Grid Cards */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group cursor-pointer"
              style={{ borderColor: COLORS.border }}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {item.icon}
              </div>

              <h3 className="mt-5 font-bold text-xl" style={{ color: COLORS.primary }}>
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 mt-1 leading-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}