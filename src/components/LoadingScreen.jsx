import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-[#0B1F3A] flex items-center justify-center z-[100]">

            <motion.div
                animate={{
                    rotate: 360
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear"
                }}
                className="w-20 h-20 border-4 border-[#F4B400] border-t-transparent rounded-full"
            />

        </div>
    );
}