import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiArrowRight, HiPlay } from 'react-icons/hi'

const Hero = () => {
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                AI-Powered Learning Platform
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white">Plan Better.</span>
              <br />
              <span className="gradient-text">Focus Deeper.</span>
              <br />
              <span className="text-gray-900 dark:text-white">Grow Together.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              An AI-powered platform combining intelligent planning, focus sessions and human accountability 
              to help students stay consistent and achieve goals.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="survey" spy={true} smooth={true} offset={-80} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Fill Survey
                  <HiArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="features" spy={true} smooth={true} offset={-80} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <HiPlay size={18} />
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-3">
                {['PS', 'RV', 'AG', 'AP'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-bg flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, hsl(${260 + i * 20}, 70%, 60%), hsl(${280 + i * 20}, 70%, 50%))`,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">2,500+ Students</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Already on the waitlist</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Circle */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/20 flex items-center justify-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/30">
                  <span className="text-5xl">🎓</span>
                </div>
              </motion.div>

              {/* Orbiting Cards */}
              {[
                { icon: '🤖', label: 'AI Planner', angle: 0, color: 'from-violet-500/20 to-purple-600/20' },
                { icon: '⏱️', label: 'Focus', angle: 72, color: 'from-blue-500/20 to-indigo-600/20' },
                { icon: '🏫', label: 'Study Rooms', angle: 144, color: 'from-emerald-500/20 to-teal-600/20' },
                { icon: '👨‍🏫', label: 'Mentors', angle: 216, color: 'from-orange-500/20 to-amber-600/20' },
                { icon: '📈', label: 'Progress', angle: 288, color: 'from-rose-500/20 to-pink-600/20' },
              ].map((item, i) => {
                const radius = 180
                const angleRad = (item.angle * Math.PI) / 180
                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + i * 0.15,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                      }}
                      className={`w-20 h-20 -ml-10 -mt-10 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-xl border border-white/30 dark:border-white/10 flex flex-col items-center justify-center gap-1 shadow-lg`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">{item.label}</span>
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6D5DF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const radius = 180
                  const angleRad = (angle * Math.PI) / 180
                  const x2 = Math.cos(angleRad) * radius + 256
                  const y2 = Math.sin(angleRad) * radius + 256
                  return (
                    <line
                      key={i}
                      x1="256"
                      y1="256"
                      x2={x2}
                      y2={y2}
                      stroke="url(#lineGrad)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  )
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero