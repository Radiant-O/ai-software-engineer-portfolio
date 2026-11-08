import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";
import { workscale } from "../data";

export const metadata: Metadata = {
  title: "WorkScale Case Study — Abiodun Bukoye",
  description: workscale.summary,
};

export default function Page() {
  return <CaseStudyPage study={workscale} />;
}
