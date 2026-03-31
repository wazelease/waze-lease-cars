"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["הכל", "סדאן", "SUV", "יוקרה", "חשמלי", "משפחתי"];

const vehicles = [
  {
    name: "טויוטה קורולה",
    category: "סדאן",
    price: "1,890",
    image: "🚗",
    year: "2026",
    features: ["אוטומטי", "היברידי", "מצלמה אחורית"],
  },
  {
    name: 'ב.מ.וו X3',
    category: "SUV",
    price: "3,490",
    image: "🚙",
    year: "2026",
    features: ["4x4", "עור", "מולטימדיה"],
  },
  {
    name: "מרצדס C-Class",
    category: "יוקרה",
    price: "4,290",
    image: "🏎️",
    year: "2026",
    features: ["AMG Line", "דיגיטלי", "חניה אוטומטית"],
  },
  {
    name: "טסלה Model 3",
    category: "חשמלי",
    price: "3,190",
    image: "⚡",
    year: "2026",
    features: ["חשמלי מלא", "אוטופיילוט", "טעינה מהירה"],
  },
  {
    name: "יונדאי טוסון",
    category: "SUV",
    price: "2,590",
    image: "🚙",
    year: "2026",
    features: ["היברידי", "7 מושבים", "מסך מגע"],
  },
  {
    name: "סקודה אוקטביה",
    category: "משפחתי",
    price: "2,190",
    image: "🚗",
    year: "2026",
    features: ["סטיישן", "מרווח", "חסכוני"],
  },
  {
    name: "אאודי Q5",
    category: "יוקרה",
    price: "4,790",
    image: "🏎️",
    year: "2026",
    features: ["Quattro", "S-Line", "B&O סאונד"],
  },
  {
    name: "BYD Atto 3",
    category: "חשמלי",
    price: "2,390",
    image: "⚡",
    year: "2026",
    features: ["חשמלי מלא", "420 ק״מ טווח", "טעינה מהירה"],
  },
];

export default function Vehicles() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredVehicles =
    activeCategory === "הכל"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section id="vehicles" className="py-24 bg-black-rich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider">
            הצי שלנו
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            מבחר רכבים <span className="text-gradient-gold">פרימיום</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            בחרו מתוך מגוון רחב של רכבים חדשים מהיבואנים המובילים בישראל
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-black-pure"
                  : "bg-black-soft border border-gray-dark text-gray-mid hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-black-card border border-gray-dark/50 rounded-2xl overflow-hidden group hover:border-gold/30 transition-all duration-300"
            >
              {/* Car image placeholder */}
              <div className="h-48 bg-gradient-to-br from-black-soft to-black-card flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {vehicle.image}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {vehicle.category}
                  </span>
                  <span className="text-xs text-gray-mid">{vehicle.year}</span>
                </div>

                <h3 className="font-rubik font-bold text-lg mb-3">
                  {vehicle.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-gray-mid bg-black-soft px-2 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-dark/30">
                  <div>
                    <span className="text-gray-mid text-xs">החל מ-</span>
                    <div className="font-rubik font-bold text-xl text-gold">
                      ₪{vehicle.price}
                      <span className="text-sm text-gray-mid font-normal">
                        /חודש
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/972533018838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-black-pure px-4 py-2 rounded-full text-sm font-bold hover:bg-gold-light transition-colors"
                  >
                    פרטים
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
