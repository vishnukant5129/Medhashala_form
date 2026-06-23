import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section id="cta" className="py-15 px-6">

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="max-w-6xl mx-auto rounded-[40px] p-14 bg-[#0B1F3A] text-center text-white shadow-2xl"
      >

        {/* Badge */}
        <p className="text-[#F4B400] font-medium mb-4">
          MedhaShala AI Learning Campaign
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Your opinion can shape the future of learning
        </h2>

        {/* Description */}
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
          Take a quick 2-minute survey and help us improve AI learning tools for students.
          <br />
          Invite 3 friends to unlock exclusive rewards instantly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          {/* PRIMARY CTA */}
          <button
            onClick={() => navigate("/survey")}
            className="px-8 py-4 rounded-2xl bg-[#F4B400] text-[#0B1F3A] font-bold hover:scale-105 active:scale-95 duration-300 shadow-lg"
          >
            🚀 Start Survey (2 min)
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={() =>
              document.getElementById("rewards")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 duration-300"
          >
            🎁 See Rewards
          </button>

        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-slate-400">
          ⏱ 2 minutes • 👥 Invite 3 friends • 🔒 Verified reward system
        </p>

      </motion.div>

    </section>
  );
}