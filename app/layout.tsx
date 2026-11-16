import type { Metadata } from "next";
import { PageProgress } from "@/components/page-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Radiant | Applied AI & Backend Engineer",
    template: "%s",
  },
  description: "Applied AI & Backend Engineer building reliable voice agents, financial platforms, and agentic products.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PageProgress />{children}</body></html>;
}
