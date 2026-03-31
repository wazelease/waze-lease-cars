"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background car image */}
      <div className="absolute inset-0">
        <Image
          src="/waze-lease-cars/images/tesla-dark.jpg"
          alt="רכב יוקרה - Waze Lease Cars"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black-pure/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black-pure/90 via-black-pure/60 to-black-pure/95" />
      </div>

      {/* Gold glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-gold/10 border border-gold/30 text-gold px-6 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            חברת הליסינג הפרימיום של ישראל
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-rubik font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          הרכב החדש שלך
          <br />
          <span className="text-gradient-gold">מחכה כאן</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-gray-light text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ליסינג פרטי, תפעולי ומימוני בתנאים הטובים ביותר בישראל.
          <br />
          מבחר ענק של רכבים חדשים, שירות אישי ומקצועי, ומחירים שלא תמצאו בשום מקום אחר.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="bg-gold text-black-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 w-full sm:w-auto text-center"
          >
            גלו את השירותים שלנו
          </a>
          <a
            href="#calculator"
            className="border-2 border-gold/50 text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
          >
            חשבו תשלום חודשי
          </a>
        </motion.div>

        {/* Featured Cars Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto"
        >
          <div className="relative group w-full sm:w-1/2 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500">
            <Image
              src="/waze-lease-cars/images/tesla-model-y.jpg"
              alt="Tesla Model Y - ליסינג טסלה"
              width={600}
              height={350}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent" />
            <div className="absolute bottom-4 right-4 left-4">
              <h3 className="font-rubik font-bold text-lg">Tesla Model Y</h3>
              <p className="text-gold text-sm">החל מ-₪3,190/חודש</p>
            </div>
          </div>

          <div className="relative group w-full sm:w-1/2 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500">
            <Image
              src="/waze-lease-cars/images/electric-car.jpg"
              alt="BYD חשמלי - ליסינג BYD"
              width={600}
              height={350}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure/90 via-black-pure/20 to-transparent" />
            <div className="absolute bottom-4 right-4 left-4">
              <h3 className="font-rubik font-bold text-lg">BYD Atto 3</h3>
              <p className="text-gold text-sm">החל מ-₪2,390/חודש</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "5,000+", label: "רכבים בצי" },
            { number: "98%", label: "שביעות רצון" },
            { number: "15+", label: "שנות ניסיון" },
            { number: "24/7", label: "שירות לקוחות" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-rubik font-bold text-3xl sm:text-4xl text-gold mb-1">
                {stat.number}
              </div>
              <div className="text-gray-mid text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
