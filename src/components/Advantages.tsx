"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const advantages = [
  {
    number: "01",
    title: "מחירים תחרותיים",
    description:
      "בזכות הסכמים ישירים עם כל היבואנים, אנחנו מציעים את המחירים הטובים ביותר בשוק.",
  },
  {
    number: "02",
    title: "אישור מהיר",
    description:
      "תהליך אישור מהיר ופשוט. תשובה תוך 24 שעות, ללא בירוקרטיה מיותרת.",
  },
  {
    number: "03",
    title: "שירות אישי",
    description:
      "מנהל לקוח אישי שמלווה אתכם מרגע הפנייה ועד סוף תקופת הליסינג.",
  },
  {
    number: "04",
    title: "גמישות מלאה",
    description:
      "תקופות ליסינג גמישות, אפשרות להחלפה מוקדמת, ותנאים שמותאמים בדיוק לכם.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-black-rich relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-gold/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-wider">
              למה לבחור בנו
            </span>
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6">
              היתרונות <span className="text-gradient-gold">שלנו</span>
            </h2>
            <p className="text-gray-mid text-lg leading-relaxed mb-8">
              עם ניסיון של למעלה מ-15 שנה בתעשיית הליסינג, אנחנו יודעים בדיוק
              איך לתת לכם את העסקה הטובה ביותר. אלפי לקוחות מרוצים כבר נהנים
              מהשירות שלנו.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold text-black-pure px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all duration-300"
            >
              דברו איתנו היום
            </a>

            {/* Car image */}
            <div className="relative mt-10 rounded-2xl overflow-hidden border border-gold/20">
              <Image
                src="/waze-lease-cars/images/car-interior.jpg"
                alt="פנים רכב יוקרתי - Waze Lease Cars"
                width={600}
                height={350}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/60 to-transparent" />
            </div>
          </motion.div>

          {/* Cards side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-black-card border border-gray-dark/30 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300"
              >
                <span className="font-rubik font-bold text-4xl text-gold/20">
                  {adv.number}
                </span>
                <h3 className="font-rubik font-bold text-lg mt-2 mb-2">
                  {adv.title}
                </h3>
                <p className="text-gray-mid text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
