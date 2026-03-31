"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/waze-lease-cars/images/hero-car.jpg"
          alt="רכב יוקרה - Waze Lease Cars ליסינג"
          fill
          className="object-cover object-center scale-105 brightness-110"
          priority
          quality={90}
        />
        {/* Single light overlay — keeps text readable without hiding the car */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/70 via-black-pure/30 to-black-pure/80" />
        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black-rich to-transparent" />
      </div>

      {/* Animated gold particles */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-gold/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 left-[20%] w-1.5 h-1.5 bg-gold/20 rounded-full blur-sm animate-pulse delay-700" />
      <div className="absolute bottom-40 right-[30%] w-2.5 h-2.5 bg-gold/25 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-[10%] w-1 h-1 bg-gold/40 rounded-full blur-sm animate-pulse delay-500" />

      {/* Subtle gold light leak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
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
          className="font-rubik font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-2xl"
        >
          הרכב החדש שלך
          <br />
          <span className="text-gradient-gold">מחכה כאן</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-white-off text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
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
            className="border-2 border-white-pure/30 text-white-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-white-pure/10 hover:border-gold/50 hover:text-gold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
          >
            חשבו תשלום חודשי
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: "5,000+", label: "רכבים בצי" },
            { number: "98%", label: "שביעות רצון" },
            { number: "15+", label: "שנות ניסיון" },
            { number: "24/7", label: "שירות לקוחות" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-rubik font-bold text-3xl sm:text-4xl text-gold mb-1 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-white-off/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
