import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Radiant — Abiodun Bukoye · AI Software Engineer",
    template: "%s",
  },
  description: "AI Software Engineer building reliable voice agents, financial platforms, and agentic products.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
