"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-pure via-black-rich to-black-rich" />

      {/* Subtle radial gold glow behind the cars */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gold/[0.05] rounded-full blur-[80px]" />

      {/* Animated gold particles */}
      <div className="absolute top-24 right-[15%] w-1.5 h-1.5 bg-gold/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-44 left-[20%] w-1 h-1 bg-gold/20 rounded-full blur-sm animate-pulse delay-700" />
      <div className="absolute top-1/3 left-[8%] w-1 h-1 bg-gold/40 rounded-full blur-sm animate-pulse delay-500" />
      <div className="absolute top-1/4 right-[10%] w-2 h-2 bg-gold/15 rounded-full blur-sm animate-pulse delay-1000" />

      {/* Embedded car images — part of the background */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-[5%] sm:bottom-[8%] left-[2%] sm:left-[5%] w-[45%] sm:w-[38%] max-w-[550px] pointer-events-none"
      >
        <div className="relative">
          <Image
            src="/waze-lease-cars/images/tesla-cutout.png"
            alt="Tesla Model Y"
            width={550}
            height={350}
            className="w-full h-auto opacity-80 drop-shadow-[0_5px_40px_rgba(201,168,76,0.15)]"
            priority
          />
          {/* Reflection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gold/5 to-transparent blur-sm" />
        </div>
        {/* Car label */}
        <div className="text-center mt-2 opacity-60">
          <span className="text-white-pure/80 text-xs sm:text-sm font-rubik font-medium">Tesla Model Y</span>
          <span className="text-gold/70 text-xs mr-2">החל מ-₪3,190/חודש</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        className="absolute bottom-[5%] sm:bottom-[8%] right-[2%] sm:right-[5%] w-[45%] sm:w-[38%] max-w-[550px] pointer-events-none"
      >
        <div className="relative">
          <Image
            src="/waze-lease-cars/images/byd-cutout.png"
            alt="BYD Atto 3"
            width={550}
            height={350}
            className="w-full h-auto opacity-80 drop-shadow-[0_5px_40px_rgba(201,168,76,0.15)]"
            priority
          />
          {/* Reflection effect */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gold/5 to-transparent blur-sm" />
        </div>
        {/* Car label */}
        <div className="text-center mt-2 opacity-60">
          <span className="text-white-pure/80 text-xs sm:text-sm font-rubik font-medium">BYD Atto 3</span>
          <span className="text-gold/70 text-xs mr-2">החל מ-₪2,390/חודש</span>
        </div>
      </motion.div>

      {/* Ground line / reflection surface */}
      <div className="absolute bottom-[12%] sm:bottom-[16%] left-[5%] right-[5%] h-px bg-gradient-to-l from-transparent via-gold/10 to-transparent" />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-rich to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-[28%] sm:mb-[22%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-gold/10 border border-gold/30 text-gold px-6 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-md">
            חברת הליסינג הפרימיום של ישראל
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="font-rubik font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          הרכב החדש שלך
          <br />
          <span className="text-gradient-gold">מחכה כאן</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-gray-light text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ליסינג פרטי, תפעולי ומימוני בתנאים הטובים ביותר בישראל.
          <br />
          מבחר ענק של רכבים חדשים, שירות אישי ומקצועי, ומחירים שלא תמצאו בשום מקום אחר.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="bg-gold text-black-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 w-full sm:w-auto text-center"
          >
            גלו את השירותים שלנו
          </a>
          <a
            href="#calculator"
            className="border-2 border-white-pure/20 text-white-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-white-pure/10 hover:border-gold/50 hover:text-gold transition-all duration-300 w-full sm:w-auto text-center"
          >
            חשבו תשלום חודשי
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 max-w-3xl mx-auto"
        >
          {[
            { number: "5,000+", label: "רכבים בצי" },
            { number: "98%", label: "שביעות רצון" },
            { number: "15+", label: "שנות ניסיון" },
            { number: "24/7", label: "שירות לקוחות" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-rubik font-bold text-2xl sm:text-3xl text-gold mb-1">
                {stat.number}
              </div>
              <div className="text-gray-mid text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border-2 border-gold/30 flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-gold/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
