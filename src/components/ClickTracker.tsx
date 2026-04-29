"use client";

import { useEffect } from "react";
import { events, trackEvent } from "@/lib/analytics";

export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const ctaEl = target.closest("[data-cta]") as HTMLElement | null;
      if (ctaEl) {
        const ctaName = ctaEl.dataset.cta || "unknown";
        const location = ctaEl.dataset.ctaLocation || "unknown";
        events.ctaClick(ctaName, location);
        return;
      }

      const phoneLink = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (phoneLink) {
        events.phoneClick();
        return;
      }

      const mailLink = target.closest('a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (mailLink) {
        const email = mailLink.getAttribute("href")?.replace("mailto:", "") || "";
        trackEvent("email_click", { email });
        return;
      }

      const contactLink = target.closest(
        'a[href*="/contact"], a[href$="#contact"], a[href="#contact"]'
      ) as HTMLAnchorElement | null;
      if (contactLink) {
        trackEvent("contact_link_click", {
          href: contactLink.getAttribute("href") || "",
          text: (contactLink.textContent || "").slice(0, 50).trim(),
        });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
