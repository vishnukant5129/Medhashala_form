import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 px-6">

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="max-w-6xl mx-auto rounded-[40px] p-14 bg-[#0B1F3A] text-center text-white shadow-2xl"
      >
        <h2 className="text-5xl font-bold">
          Be among the first users of Medhashala
        </h2>

        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          Help us understand your needs by filling our survey.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="px-8 py-4 rounded-2xl bg-[#F4B400] text-[#0B1F3A] font-bold hover:scale-105 duration-300">
            Fill Survey
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 duration-300">
            Join Waitlist
          </button>

        </div>
      </motion.div>

    </section>
  );
}