import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { surveyLikelihood, signupReasons } from '../../constants/data'
import { HiTrendingUp, HiFire, HiUsers } from 'react-icons/hi'

const ProgressBar = ({ label, percentage, color, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="mb-4"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{percentage}%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
                    className={`h-full rounded-full ${color} relative`}
                >
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                </motion.div>
            </div>
        </motion.div>
    )
}

const SignupCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group"
        >
            <motion.div
                animate={isHovered ? { y: -5, scale: 1.02 } : { y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/30 transition-colors"
            >
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {item.label}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.votes / 500) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                    </div>
                    <span className="text-xs font-bold text-primary">{item.votes}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <HiUsers size={12} />
                    <span>{item.votes} votes</span>
                </div>
            </motion.div>
        </motion.div>
    )
}

const SurveyInsights = () => {
    return (
        <section id="survey" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto section-padding relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                        <HiTrendingUp className="inline mr-1" size={14} />
                        Survey Insights
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        What students are <span className="gradient-text">saying</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Real responses from our community survey. Your voice shapes Medhashala.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Likelihood Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <HiFire className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    Platform Interest
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Based on 1,200+ responses
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            How likely are you to try a platform that combines AI planning, focus sessions and human accountability?
                        </p>

                        {surveyLikelihood.map((item, index) => (
                            <ProgressBar
                                key={item.label}
                                label={item.label}
                                percentage={item.percentage}
                                color={item.color}
                                delay={index * 0.1}
                            />
                        ))}
                    </motion.div>

                    {/* Signup Reasons Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                                    <HiUsers className="text-secondary" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        Signup Motivators
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        What would make you sign up immediately?
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {signupReasons.map((item, index) => (
                                    <SignupCard key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SurveyInsights