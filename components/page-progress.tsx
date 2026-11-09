"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageProgress() {
  const pathname = usePathname();
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(false);
    const timer = window.setTimeout(() => setComplete(true), 650);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`page-progress${complete ? " is-complete" : ""}`}
      aria-hidden="true"
    >
      <span />
    </div>
  );
}
