import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaBrain,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-[#F4B400] flex items-center justify-center">
                <FaBrain className="text-[#0B1F3A] text-xl" />
              </div>

              <h1 className="text-3xl font-bold text-[#0B1F3A] dark:text-white">
                Medhashala
              </h1>

            </div>

            <p className="mt-5 text-slate-500 leading-relaxed">
              AI-powered platform helping students plan better, focus deeper,
              and grow together.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg dark:text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-slate-500">
              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Home
              </p>

              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Features
              </p>

              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Community
              </p>

              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                About Us
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg dark:text-white">
              Legal
            </h3>

            <div className="mt-5 space-y-3 text-slate-500">
              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Privacy Policy
              </p>

              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Terms & Conditions
              </p>

              <p className="hover:text-[#F4B400] cursor-pointer duration-300">
                Contact
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg dark:text-white">
              Connect
            </h3>

            <div className="flex gap-4 mt-6">

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl hover:text-[#F4B400]"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl hover:text-[#F4B400]"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl hover:text-[#F4B400]"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="#"
                className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl hover:text-[#F4B400]"
              >
                <FaEnvelope />
              </motion.a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-center">
            © {new Date().getFullYear()} Medhashala. All rights reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}