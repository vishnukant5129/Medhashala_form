import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // एनिमेशन वेरिएंट्स
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  const features = [
    { icon: "📝", title: "Survey", desc: "Share your experience" },
    { icon: "👥", title: "Friends", desc: "Invite your peers" },
    { icon: "🧠", title: "AI Tools", desc: "Smart assistant suite" },
    { icon: "🎁", title: "Rewards", desc: "Unlock exclusive perks" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#0a071b] overflow-hidden py-12 md:py-20">

      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-lighten">
        <img
          src="src/assets/Medhashala4.jpeg" // ध्यान दें: बैकस्लैश '\' को फॉरवर्ड स्लैश '/' से बदला गया है
          alt="Hero Background"
          className="w-full h-full object-cover object-right lg:object-center"
        />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side: Content Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* MAP Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3.5 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-lg mb-6 border border-blue-500/30"
          >
            MAP
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            MAP (MedhaShala <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Accountability Partner
            </span>)
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg md:text-xl font-medium text-gray-300"
          >
            Stay Consistent. Stay Accountable. Achieve Your Goals.
          </motion.p>

          {/* Description Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 space-y-4 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed"
          >
            <p>
              We're building MAP to help students, professionals, founders, and learners
              stay productive, accountable, and consistent in achieving their goals.
            </p>
            <p className="text-gray-300 text-sm md:text-base font-normal  p-4">
              💡Take this quick 2-minute survey and help us understand the challenges
              people face while building better habits, routines, and productivity systems.
            </p>
          </motion.div>

          {/* Action Buttons */}

        </div>

        {/* Right Side: Spacer for Background Graphic (Optional Placeholder for Desktop Layout) */}
        <div className="hidden lg:block lg:col-span-5 h-[400px]" />

      </div>

      {/* Features Grid Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-16 lg:mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-lg flex flex-col items-start text-left transition-colors duration-300 hover:bg-white/[0.05] hover:border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl mb-3 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-bold text-base text-white">{feature.title}</h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-normal">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}