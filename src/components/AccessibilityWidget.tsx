"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface A11ySettings {
  fontSize: number;
  highContrast: boolean;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
  grayscale: boolean;
  bigCursor: boolean;
  textSpacing: boolean;
}

const defaultSettings: A11ySettings = {
  fontSize: 100,
  highContrast: false,
  dyslexiaFont: false,
  highlightLinks: false,
  grayscale: false,
  bigCursor: false,
  textSpacing: false,
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  const applySettings = useCallback((s: A11ySettings) => {
    const html = document.documentElement;

    // Font size
    html.style.fontSize = `${s.fontSize}%`;

    // High contrast
    html.classList.toggle("a11y-high-contrast", s.highContrast);

    // Dyslexia font
    html.classList.toggle("a11y-dyslexia", s.dyslexiaFont);

    // Highlight links
    html.classList.toggle("a11y-highlight-links", s.highlightLinks);

    // Grayscale
    html.classList.toggle("a11y-grayscale", s.grayscale);

    // Big cursor
    html.classList.toggle("a11y-big-cursor", s.bigCursor);

    // Text spacing
    html.classList.toggle("a11y-text-spacing", s.textSpacing);
  }, []);

  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  const updateSetting = <K extends keyof A11ySettings>(
    key: K,
    value: A11ySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetAll = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Styles */}
      <style jsx global>{`
        .a11y-high-contrast body {
          background: #000 !important;
          color: #fff !important;
        }
        .a11y-high-contrast * {
          border-color: #fff !important;
        }
        .a11y-dyslexia * {
          font-family: "OpenDyslexic", "Comic Sans MS", sans-serif !important;
        }
        .a11y-highlight-links a {
          outline: 3px solid #C9A84C !important;
          outline-offset: 2px;
          text-decoration: underline !important;
        }
        .a11y-grayscale body {
          filter: grayscale(100%) !important;
        }
        .a11y-big-cursor *,
        .a11y-big-cursor {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='24' r='20' fill='%23C9A84C' stroke='%23000' stroke-width='3'/%3E%3C/svg%3E")
              24 24,
            auto !important;
        }
        .a11y-text-spacing * {
          letter-spacing: 0.12em !important;
          word-spacing: 0.16em !important;
          line-height: 1.8 !important;
        }
      `}</style>

      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-black-pure rounded-full flex items-center justify-center shadow-lg shadow-gold/30 hover:bg-gold-light transition-colors"
        aria-label={isOpen ? "סגור תפריט נגישות" : "פתח תפריט נגישות"}
        aria-expanded={isOpen}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 7h-6l-1.41 7.41L16 22h-2l-2-5-2 5H8l2.41-5.59L9 9H3V7h18v2z" />
        </svg>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] bg-black-card border border-gold/30 rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="הגדרות נגישות"
          >
            {/* Header */}
            <div className="bg-gold/10 border-b border-gold/20 p-4 flex items-center justify-between">
              <h3 className="font-rubik font-bold text-lg text-gold">נגישות</h3>
              <button
                onClick={resetAll}
                className="text-xs text-gray-mid hover:text-gold transition-colors underline"
              >
                איפוס הכל
              </button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto max-h-[55vh]">
              {/* Font Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">גודל גופן</span>
                  <span className="text-xs text-gold">{settings.fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateSetting(
                        "fontSize",
                        Math.max(80, settings.fontSize - 10)
                      )
                    }
                    className="flex-1 bg-black-soft border border-gray-dark rounded-lg py-2 text-lg hover:border-gold transition-colors"
                    aria-label="הקטן גופן"
                  >
                    א-
                  </button>
                  <button
                    onClick={() => updateSetting("fontSize", 100)}
                    className="flex-1 bg-black-soft border border-gray-dark rounded-lg py-2 text-sm hover:border-gold transition-colors"
                    aria-label="גופן רגיל"
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() =>
                      updateSetting(
                        "fontSize",
                        Math.min(150, settings.fontSize + 10)
                      )
                    }
                    className="flex-1 bg-black-soft border border-gray-dark rounded-lg py-2 text-lg hover:border-gold transition-colors"
                    aria-label="הגדל גופן"
                  >
                    א+
                  </button>
                </div>
              </div>

              {/* Toggle Options */}
              {[
                {
                  key: "highContrast" as const,
                  label: "ניגודיות גבוהה",
                  icon: "🔲",
                },
                {
                  key: "dyslexiaFont" as const,
                  label: "גופן לדיסלקציה",
                  icon: "🔤",
                },
                {
                  key: "highlightLinks" as const,
                  label: "הדגשת קישורים",
                  icon: "🔗",
                },
                {
                  key: "grayscale" as const,
                  label: "גווני אפור",
                  icon: "⚫",
                },
                {
                  key: "bigCursor" as const,
                  label: "סמן גדול",
                  icon: "🖱️",
                },
                {
                  key: "textSpacing" as const,
                  label: "ריווח טקסט",
                  icon: "↔️",
                },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() =>
                    updateSetting(option.key, !settings[option.key])
                  }
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                    settings[option.key]
                      ? "bg-gold/10 border-gold/50 text-gold"
                      : "bg-black-soft border-gray-dark/50 text-gray-light hover:border-gold/30"
                  }`}
                  role="switch"
                  aria-checked={settings[option.key]}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className="mr-auto">
                    {settings[option.key] ? (
                      <span className="text-gold text-xs font-bold">פעיל</span>
                    ) : (
                      <span className="text-gray-mid text-xs">כבוי</span>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-dark/30 p-3 text-center">
              <p className="text-xs text-gray-mid">
                אתר זה עומד בתקן WCAG 2.1 AA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
