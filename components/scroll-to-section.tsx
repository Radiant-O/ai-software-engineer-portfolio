"use client";

import { useEffect, type ReactNode } from "react";

const storageKey = "radiant-scroll-target";

function scrollToTarget(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

  target.scrollIntoView({ behavior, block: "start" });
}

export function ScrollToSection({
  targetId,
  className,
  ariaLabel,
  children,
}: {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  function handleClick() {
    if (window.location.pathname === "/") {
      scrollToTarget(targetId);
      return;
    }

    window.sessionStorage.setItem(storageKey, targetId);
    window.location.assign("/");
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function RestoreSectionScroll() {
  useEffect(() => {
    const storedTarget = window.sessionStorage.getItem(storageKey);
    const hashTarget = window.location.hash.slice(1);
    const targetId = storedTarget || hashTarget;
    if (!targetId) return;

    window.sessionStorage.removeItem(storageKey);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => scrollToTarget(targetId));
    });
  }, []);

  return null;
}
