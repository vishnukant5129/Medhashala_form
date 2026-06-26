import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[--paper] gap-5 select-none">

            <div className="relative w-14 h-14">
                <div className="absolute inset-0 border-[3px] border-[--border] rounded-full opacity-40" />


                <div className="absolute inset-0 border-[3px] border-t-[--gold] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin shadow-sm" />
            </div>


            <motion.p
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs md:text-sm font-semibold text-[--text-muted] tracking-widest uppercase"
            >
                Loading MedhaShala…
            </motion.p>

        </div>
    );
}