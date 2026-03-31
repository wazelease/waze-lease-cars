"use client";

export default function Footer() {
  return (
    <footer className="bg-black-card border-t border-gray-dark/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-black-pure font-rubik font-bold text-lg">
                  W
                </span>
              </div>
              <div>
                <span className="font-rubik font-bold text-lg">Waze Lease</span>
                <span className="block text-gold text-xs -mt-1">ליסינג פרימיום</span>
              </div>
            </div>
            <p className="text-gray-mid text-sm leading-relaxed">
              חברת הליסינג הפרימיום של ישראל. שירות מקצועי, מחירים תחרותיים, ומבחר
              רכבים שלא תמצאו בשום מקום אחר.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rubik font-bold text-gold mb-4">קישורים מהירים</h4>
            <nav aria-label="קישורי פוטר">
              <ul className="space-y-2">
                {[
                  { label: "רכבים", href: "#vehicles" },
                  { label: "שירותים", href: "#services" },
                  { label: "יתרונות", href: "#advantages" },
                  { label: "חישוב ליסינג", href: "#calculator" },
                  { label: "המלצות", href: "#testimonials" },
                  { label: "צור קשר", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-mid hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-rubik font-bold text-gold mb-4">שירותים</h4>
            <ul className="space-y-2">
              {[
                "ליסינג פרטי",
                "ליסינג תפעולי",
                "ליסינג מימוני",
                "טרייד אין",
                "ביטוח רכב",
                "שירות ותחזוקה",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-mid text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rubik font-bold text-gold mb-4">צרו קשר</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+972533018838"
                  className="text-gray-mid hover:text-gold transition-colors text-sm"
                  dir="ltr"
                >
                  +972 53-301-8838
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/972533018838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-mid hover:text-gold transition-colors text-sm"
                >
                  שלחו וואטסאפ
                </a>
              </li>
              <li className="text-gray-mid text-sm">א׳-ה׳ 09:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-dark/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-mid text-sm">
            © {new Date().getFullYear()} Waze Lease Cars. כל הזכויות שמורות.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-mid hover:text-gold transition-colors text-sm">
              מדיניות פרטיות
            </a>
            <a href="#" className="text-gray-mid hover:text-gold transition-colors text-sm">
              תנאי שימוש
            </a>
            <a href="#" className="text-gray-mid hover:text-gold transition-colors text-sm">
              נגישות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
