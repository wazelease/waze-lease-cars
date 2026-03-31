"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Calculator() {
  const [carPrice, setCarPrice] = useState(150000);
  const [months, setMonths] = useState(36);
  const [downPayment, setDownPayment] = useState(0);

  const monthlyPayment = Math.round(
    ((carPrice - downPayment) * 1.02) / months
  );

  return (
    <section id="calculator" className="py-24 bg-black-pure relative">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider">
            כלי חישוב
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            חשבו את <span className="text-gradient-gold">התשלום החודשי</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            הזינו את פרטי העסקה וגלו כמה תשלמו בחודש
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black-card border border-gray-dark/30 rounded-3xl p-8 sm:p-12"
        >
          <div className="space-y-10">
            {/* Car Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white-pure font-medium">מחיר הרכב</label>
                <span className="text-gold font-rubik font-bold text-xl">
                  ₪{carPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={500000}
                step={5000}
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-dark rounded-full appearance-none cursor-pointer accent-gold"
                aria-label="מחיר הרכב"
              />
              <div className="flex justify-between text-xs text-gray-mid mt-1">
                <span>₪50,000</span>
                <span>₪500,000</span>
              </div>
            </div>

            {/* Lease Period */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white-pure font-medium">תקופת ליסינג</label>
                <span className="text-gold font-rubik font-bold text-xl">
                  {months} חודשים
                </span>
              </div>
              <input
                type="range"
                min={12}
                max={60}
                step={6}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-gray-dark rounded-full appearance-none cursor-pointer accent-gold"
                aria-label="תקופת ליסינג בחודשים"
              />
              <div className="flex justify-between text-xs text-gray-mid mt-1">
                <span>12 חודשים</span>
                <span>60 חודשים</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white-pure font-medium">מקדמה</label>
                <span className="text-gold font-rubik font-bold text-xl">
                  ₪{downPayment.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={carPrice * 0.5}
                step={5000}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-gray-dark rounded-full appearance-none cursor-pointer accent-gold"
                aria-label="סכום מקדמה"
              />
              <div className="flex justify-between text-xs text-gray-mid mt-1">
                <span>₪0</span>
                <span>₪{(carPrice * 0.5).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="mt-12 pt-8 border-t border-gray-dark/50 text-center">
            <p className="text-gray-mid mb-2">התשלום החודשי המשוער שלכם</p>
            <div className="font-rubik font-extrabold text-5xl sm:text-6xl text-gradient-gold mb-2">
              ₪{monthlyPayment.toLocaleString()}
            </div>
            <p className="text-gray-mid text-sm mb-8">לחודש (לפני מע״מ)</p>
            <a
              href="https://wa.me/972533018838?text=שלום, אשמח לקבל הצעת מחיר לליסינג"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black-pure px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300"
            >
              קבלו הצעת מחיר מדויקת
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
