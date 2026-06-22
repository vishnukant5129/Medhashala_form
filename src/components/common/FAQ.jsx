import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is Medhashala free?",
    answer:
      "Yes. We plan to offer a free version so everyone can get started."
  },
  {
    question: "Can I join focus sessions?",
    answer:
      "Yes. You'll be able to join Pomodoro based deep work sessions."
  },
  {
    question: "Will mentors be available?",
    answer:
      "Yes. Students will be able to connect with experienced mentors."
  },
  {
    question: "How does AI planning work?",
    answer:
      "AI creates personalized schedules based on your goals and workload."
  },
  {
    question: "Can I track my streaks?",
    answer:
      "Absolutely. Progress tracking and streaks are core features."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl border dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6"
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <h3 className="font-semibold text-lg dark:text-white">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`duration-300 ${open === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-slate-500"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}