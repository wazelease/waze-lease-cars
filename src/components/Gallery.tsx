"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cars = [
  {
    image: "/waze-lease-cars/images/tesla-model-y.jpg",
    name: "Tesla Model Y",
    type: "חשמלי מלא",
    price: "1,990",
  },
  {
    image: "/waze-lease-cars/images/electric-car.jpg",
    name: "BYD Atto 3",
    type: "חשמלי מלא",
    price: "1,690",
  },
  {
    image: "/waze-lease-cars/images/luxury-car.jpg",
    name: "רכבי יוקרה",
    type: "פרימיום",
    price: "4,500",
  },
  {
    image: "/waze-lease-cars/images/tesla-white.jpg",
    name: "Tesla Model 3",
    type: "חשמלי מלא",
    price: "1,490",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-black-rich relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider">
            הרכבים שלנו
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            דגמים <span className="text-gradient-gold">מובילים</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            מבחר רכבים חשמליים ויוקרתיים מהמותגים המובילים בעולם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-dark/30 hover:border-gold/40 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.name} - ליסינג`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-black-pure/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 right-0 left-0 p-5">
                <span className="inline-block bg-gold/20 text-gold text-xs font-medium px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                  {car.type}
                </span>
                <h3 className="font-rubik font-bold text-lg mb-1">{car.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-mid text-xs">החל מ-</span>
                    <span className="text-gold font-rubik font-bold text-lg mr-1">
                      ₪{car.price}
                    </span>
                    <span className="text-gray-mid text-xs">/חודש</span>
                  </div>
                  <a
                    href="https://wa.me/972533018838?text=שלום, אשמח לשמוע על ליסינג"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-black-pure px-4 py-2 rounded-full text-xs font-bold hover:bg-gold-light transition-colors"
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
