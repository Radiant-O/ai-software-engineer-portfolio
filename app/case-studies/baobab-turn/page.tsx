import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";
import { baobabTurn } from "../data";

export const metadata: Metadata = {
  title: "Baobab Turn Case Study | Abiodun Bukoye",
  description: baobabTurn.summary,
};

export default function Page() {
  return <CaseStudyPage study={baobabTurn} />;
}
