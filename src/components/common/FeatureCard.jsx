import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, delay }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="relative overflow-hidden rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F4B400]/10 rounded-full blur-3xl"></div>

      <div className="w-16 h-16 rounded-2xl bg-[#F4B400]/20 flex items-center justify-center">
        <Icon className="text-3xl text-[#F4B400]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#0B1F3A] dark:text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}