import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import React from "react";
import logo from "../../assets/Medhashala.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  const navigationLinks = {
    company: [
      { name: "Home", href: "#" },
      { name: "Features", href: "#" },
      { name: "Community", href: "#" },
      { name: "About Us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Contact", href: "#" },
    ],
    socials: [
      { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/medhashala/ ", label: "LinkedIn" },
      { icon: <FaInstagram />, href: "https://www.instagram.com/medhashala/", label: "Instagram" },
      { icon: <FaEnvelope />, href: "Medhashala.in@gmail.com", label: "Email" },
    ],
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand Identity */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-11 h-11 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  onClick={() => navigate("/admin")}
                  src={logo} alt="MedhaShala Logo" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Medhashala
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
              AI-powered platform helping students plan better, focus deeper, and grow together.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-200">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 ease-in-out block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-200">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigationLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 ease-in-out block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-200">
              Connect
            </h3>
            <div className="flex gap-3.5 mt-4">
              {navigationLinks.socials.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 flex items-center justify-center text-lg text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/30 dark:hover:border-amber-400/30 shadow-sm transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Medhashala. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
            Built with <span className="text-red-500 animate-pulse">❤️</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}