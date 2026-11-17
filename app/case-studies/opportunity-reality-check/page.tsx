import type { Metadata } from "next";
import { opportunityRealityCheck } from "../data";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Opportunity Reality Check Case Study | Abiodun Bukoye",
  description: opportunityRealityCheck.summary,
};

export default function Page() {
  return <CaseStudyPage study={opportunityRealityCheck} />;
}
