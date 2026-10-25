"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible((current) => {
        const next = window.scrollY > 420;
        return current === next ? current : next;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      className={`back-to-top${visible ? " is-visible" : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6M12 8v12" /></svg>
    </button>
  );
}
