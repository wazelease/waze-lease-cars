"use client";

import { motion } from "framer-motion";
import { StarIcon } from "./Icons";

const testimonials = [
  {
    name: "יוסי כהן",
    role: "מנכ״ל, טק סטארטאפ",
    text: "השירות של Waze Lease הוא ברמה אחרת לגמרי. קיבלתי הצעה מעולה על BMW X5 תוך יום אחד. מנהל הלקוח שלי זמין תמיד ומטפל בהכל.",
    rating: 5,
  },
  {
    name: "מיכל לוי",
    role: "עורכת דין",
    text: "אחרי שנים עם חברות ליסינג אחרות, עברתי ל-Waze Lease ולא מסתכלת אחורה. המחירים טובים יותר, השירות אישי, והתהליך היה חלק.",
    rating: 5,
  },
  {
    name: "אבי ישראלי",
    role: "בעל עסק",
    text: "לקחנו ליסינג תפעולי ל-12 רכבים לחברה. החיסכון השנתי שלנו הוא עשרות אלפי שקלים. השירות המקצועי עושה את ההבדל.",
    rating: 5,
  },
  {
    name: "נועה ברק",
    role: "רופאה",
    text: "הרכב שלי הגיע בדיוק בזמן, בדיוק כמו שהבטיחו. תהליך פשוט, ללא הפתעות. ממליצה לכל מי שמחפש ליסינג אמין ומקצועי.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black-rich relative">
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
            מה הלקוחות אומרים
          </span>
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">
            המלצות <span className="text-gradient-gold">לקוחות</span>
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
            אלפי לקוחות מרוצים כבר בחרו בנו — הנה מה שיש להם לומר
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black-card border border-gray-dark/30 rounded-2xl p-6 hover:border-gold/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <p className="text-gray-light text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-dark/30">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-gray-mid text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
