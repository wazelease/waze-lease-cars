"use client";

import { motion } from "framer-motion";

const BUSINESS_ADDRESS = "הרצל 21, ראשון לציון, ישראל";
const GOOGLE_MAPS_EMBED_QUERY = encodeURIComponent(BUSINESS_ADDRESS);
const GOOGLE_MAPS_NAV_URL = `https://www.google.com/maps/dir/?api=1&destination=${GOOGLE_MAPS_EMBED_QUERY}`;

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-black-pure relative">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-wider">
            המיקום שלנו
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            בואו <span className="text-gradient-gold">לבקר אותנו</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            אולם התצוגה שלנו פתוח עבורכם — בואו לראות את הרכבים מקרוב
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black-card border border-gray-dark/30 rounded-3xl overflow-hidden"
        >
          {/* Map */}
          <div className="relative w-full h-[400px] sm:h-[450px]">
            <iframe
              src={`https://maps.google.com/maps?q=${GOOGLE_MAPS_EMBED_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 w-full h-full border-0 grayscale-[80%] contrast-[1.1] brightness-[0.7]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מיקום Waze Lease Cars על המפה"
            />
          </div>

          {/* Info bar */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-rubik font-bold text-lg mb-1">
                  אולם התצוגה שלנו
                </h3>
                <p className="text-gray-mid">
                  {BUSINESS_ADDRESS}
                </p>
                <p className="text-gray-mid text-sm mt-1">
                  א׳-ה׳ 08:00-20:00 | ו׳ 08:00-14:00
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_NAV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 whitespace-nowrap flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              נווטו אלינו
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
