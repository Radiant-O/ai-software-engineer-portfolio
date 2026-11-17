import type { Metadata } from "next";
import { agentSandboxRunner } from "../data";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Agent Sandbox Runner Case Study | Abiodun Bukoye",
  description: agentSandboxRunner.summary,
};

export default function Page() {
  return <CaseStudyPage study={agentSandboxRunner} />;
}
