"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "ראשי", href: "#hero" },

  { label: "שירותים", href: "#services" },
  { label: "יתרונות", href: "#advantages" },
  { label: "חישוב ליסינג", href: "#calculator" },
  { label: "המלצות", href: "#testimonials" },
  { label: "מיקום", href: "#location" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black-pure/95 backdrop-blur-md shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-black-pure font-rubik font-bold text-lg">W</span>
            </div>
            <div>
              <span className="font-rubik font-bold text-xl text-white-pure">
                Waze Lease
              </span>
              <span className="block text-gold text-xs font-light -mt-1">
                ליסינג פרימיום
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-light hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+972533018838"
              className="bg-gold text-black-pure px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gold-light transition-colors duration-200"
            >
              התקשרו עכשיו
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white-pure p-2"
            aria-label={isMobileOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMobileOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gold transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gold transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gold transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black-rich/98 backdrop-blur-lg border-t border-gold/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-gray-light hover:text-gold transition-colors text-lg py-2 border-b border-gray-dark/30"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+972533018838"
                className="bg-gold text-black-pure px-6 py-3 rounded-full font-bold text-center mt-2"
              >
                התקשרו עכשיו
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
