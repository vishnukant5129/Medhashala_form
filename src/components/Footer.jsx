import { motion } from 'framer-motion'
import { footerLinks } from '../constants/data'
import { HiHeart } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const getSocialIcon = (icon) => {
    switch (icon) {
      case 'linkedin': return <FaLinkedin size={18} />
      case 'github': return <FaGithub size={18} />
      case 'twitter': return <FaTwitter size={18} />
      default: return null
    }
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold gradient-text">Medhashala</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              AI-powered learning platform helping students plan better, focus deeper, and grow together.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:border-primary/30 transition-colors"
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Medhashala. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Made with <HiHeart className="text-red-500" size={14} /> for students worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer