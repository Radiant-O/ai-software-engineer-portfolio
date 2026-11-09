import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";
import { pitupi } from "../data";

export const metadata: Metadata = {
  title: "Pitupi Case Study | Abiodun Bukoye",
  description: pitupi.summary,
};

export default function Page() {
  return <CaseStudyPage study={pitupi} />;
}
