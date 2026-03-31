"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🔑",
    title: "ליסינג פרטי",
    description:
      "רכב חדש בתשלום חודשי נוח. כולל ביטוח, טיפולים ושירות מלא. בסוף התקופה — החלפה לרכב חדש.",
  },
  {
    icon: "🏢",
    title: "ליסינג תפעולי",
    description:
      "פתרון מושלם לעסקים. ניהול צי רכבים מלא, חיסכון במיסים, ושירות 24/7 לכל העובדים.",
  },
  {
    icon: "💰",
    title: "ליסינג מימוני",
    description:
      "מימון רכישת רכב בתנאים מעולים. ריביות נמוכות, תקופות גמישות, והרכב שלכם בסוף.",
  },
  {
    icon: "🔄",
    title: "טרייד אין",
    description:
      "יש לכם רכב קיים? נקנה אותו במחיר הוגן ונקזז מהעסקה. תהליך מהיר ושקוף.",
  },
  {
    icon: "🛡️",
    title: "ביטוח מקיף",
    description:
      "חבילות ביטוח מקיף בתנאים בלעדיים. מחירים שלא תמצאו לבד, כולל ביטוח צד ג׳ מורחב.",
  },
  {
    icon: "🔧",
    title: "שירות ותחזוקה",
    description:
      "טיפולים שוטפים, תיקונים, רכב חלופי ושירותי דרך. הכל כלול — אתם רק נוהגים.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black-pure relative">
      {/* Subtle gold line */}
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
            מה אנחנו מציעים
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            השירותים <span className="text-gradient-gold">שלנו</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            פתרונות ליסינג מותאמים אישית לכל צורך — פרטי, עסקי או משפחתי
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black-card border border-gray-dark/30 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="font-rubik font-bold text-xl mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-mid leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
