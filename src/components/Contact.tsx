"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PhoneIcon, ChatIcon, MapPinIcon, ClockIcon } from "./Icons";

const BUSINESS_EMAIL = "Wazelease@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Send lead to business email via Formsubmit
      const res = await fetch(
        `https://formsubmit.co/ajax/${BUSINESS_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "ליד חדש - השאיר פרטים באתר",
            _template: "box",
            "שם מלא": formData.name,
            "טלפון": formData.phone,
            "אימייל": formData.email || "לא צוין",
            "סוג רכב מבוקש": formData.carType || "לא צוין",
            "הודעה": formData.message || "לא צוינה הודעה",
            _captcha: "false",
          }),
        }
      );

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", phone: "", email: "", carType: "", message: "" });

        // Also open WhatsApp as backup
        const text = `שלום, שמי ${formData.name}. אשמח לקבל הצעת מחיר לליסינג. ${formData.carType ? `רכב מבוקש: ${formData.carType}. ` : ""}${formData.message || ""}`;
        window.open(
          `https://wa.me/972533018838?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-black-pure relative">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-wider">
              צרו קשר
            </span>
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6">
              בואו <span className="text-gradient-gold">נדבר</span>
            </h2>
            <p className="text-gray-mid text-lg leading-relaxed mb-10">
              מעוניינים לשמוע עוד? השאירו פרטים ונחזור אליכם תוך שעה, או פנו אלינו
              ישירות בכל אחד מהערוצים הבאים.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+972533018838"
                className="flex items-center gap-4 text-gray-light hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <PhoneIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-mid">טלפון</div>
                  <div className="font-medium text-lg" dir="ltr">
                    +972 53-301-8838
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/972533018838"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-light hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <ChatIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-mid">וואטסאפ</div>
                  <div className="font-medium text-lg">שלחו הודעה עכשיו</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-light">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPinIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-mid">כתובת</div>
                  <div className="font-medium text-lg">הרצל 21, ראשון לציון</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-light">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <ClockIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-mid">שעות פעילות</div>
                  <div className="font-medium">א׳-ה׳ 09:00-18:00</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-black-card border border-gray-dark/30 rounded-3xl p-8"
            >
              <h3 className="font-rubik font-bold text-xl mb-6">
                השאירו פרטים ונחזור אליכם
              </h3>

              {status === "sent" && (
                <div className="bg-gold/10 border border-gold/30 text-gold rounded-xl p-4 mb-6 text-center">
                  <p className="font-bold">הפרטים נשלחו בהצלחה!</p>
                  <p className="text-sm mt-1">נחזור אליכם בהקדם.</p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-center">
                  <p className="font-bold">שגיאה בשליחה</p>
                  <p className="text-sm mt-1">אנא נסו שוב או פנו אלינו בוואטסאפ.</p>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-mid mb-2">
                    שם מלא
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black-soft border border-gray-dark/50 rounded-xl px-4 py-3 text-white-pure focus:border-gold focus:outline-none transition-colors"
                    placeholder="הכניסו את שמכם"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-mid mb-2">
                    טלפון
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-black-soft border border-gray-dark/50 rounded-xl px-4 py-3 text-white-pure focus:border-gold focus:outline-none transition-colors"
                    placeholder="050-000-0000"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-mid mb-2">
                    אימייל
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black-soft border border-gray-dark/50 rounded-xl px-4 py-3 text-white-pure focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="carType" className="block text-sm text-gray-mid mb-2">
                    סוג רכב מבוקש
                  </label>
                  <select
                    id="carType"
                    value={formData.carType}
                    onChange={(e) =>
                      setFormData({ ...formData, carType: e.target.value })
                    }
                    className="w-full bg-black-soft border border-gray-dark/50 rounded-xl px-4 py-3 text-white-pure focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">בחרו סוג רכב</option>
                    <option value="סדאן">סדאן</option>
                    <option value="SUV">SUV</option>
                    <option value="יוקרה">יוקרה</option>
                    <option value="חשמלי">חשמלי</option>
                    <option value="משפחתי">משפחתי</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-mid mb-2">
                    הודעה (אופציונלי)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-black-soft border border-gray-dark/50 rounded-xl px-4 py-3 text-white-pure focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="ספרו לנו מה אתם מחפשים..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold text-black-pure py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "שולח..." : "שלחו פנייה"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
