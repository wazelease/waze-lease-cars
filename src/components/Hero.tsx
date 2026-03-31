"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark base */}
      <div className="absolute inset-0 bg-black-pure" />

      {/* The car — large, visible, centered at bottom */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-[2%] sm:bottom-[5%] left-1/2 -translate-x-1/2 w-[95%] sm:w-[75%] md:w-[65%] lg:w-[55%] max-w-[850px]"
      >
        <Image
          src="/waze-lease-cars/images/tesla-cutout.png"
          alt="Tesla Model Y - Waze Lease Cars"
          width={850}
          height={500}
          className="w-full h-auto drop-shadow-[0_10px_60px_rgba(201,168,76,0.25)]"
          priority
        />
        {/* Gold reflection under the car */}
        <div className="absolute -bottom-4 left-[10%] right-[10%] h-16 bg-gold/8 rounded-full blur-2xl" />
      </motion.div>

      {/* Ground reflection line */}
      <div className="absolute bottom-[14%] sm:bottom-[18%] left-[10%] right-[10%] h-px bg-gradient-to-l from-transparent via-gold/20 to-transparent" />

      {/* Gold ambient glow behind the car */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/[0.04] rounded-full blur-[100px]" />

      {/* Subtle gold light from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold/[0.03] rounded-full blur-[80px]" />

      {/* Gold particles */}
      <div className="absolute top-24 right-[15%] w-1.5 h-1.5 bg-gold/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-44 left-[20%] w-1 h-1 bg-gold/25 rounded-full blur-sm animate-pulse delay-700" />
      <div className="absolute top-1/3 left-[8%] w-1 h-1 bg-gold/35 rounded-full blur-sm animate-pulse delay-500" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black-rich to-transparent z-[5]" />

      {/* Content — positioned upper half */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-[35%] sm:mb-[28%] md:mb-[24%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-gold/10 border border-gold/30 text-gold px-6 py-2 rounded-full text-sm font-medium mb-8">
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
