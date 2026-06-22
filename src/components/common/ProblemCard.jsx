import { motion } from "framer-motion";

export default function ProblemCard({ icon: Icon, title, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-lg"
        >
            <div className="w-14 h-14 rounded-2xl bg-[#F4B400]/20 flex items-center justify-center">
                <Icon className="text-2xl text-[#F4B400]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#0B1F3A] dark:text-white">
                {title}
            </h3>
        </motion.div>
    );
}