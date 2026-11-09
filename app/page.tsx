import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  DatabaseZap,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { RestoreSectionScroll, ScrollToSection } from "@/components/scroll-to-section";

const projects = [
  {
    number: "01",
    label: "OPEN-SOURCE VOICE AI",
    title: "Baobab\nTurn",
    summary:
      "An explainable guard layer that helps voice agents avoid interrupting speakers whose rhythm, language, or pitch falls outside a detector's training data.",
    tags: ["Python", "LiveKit", "Pipecat", "pytest"],
    metric: "Directional accuracy",
    value: "89.9%",
    tone: "acid",
    visual: "baobab",
    href: "/case-studies/baobab-turn/",
  },
  {
    number: "02",
    label: "FINANCIAL AI PLATFORM",
    title: "Pitupi",
    summary:
      "A company-built WhatsApp financial platform where conversational AI helps customers navigate supported services.",
    tags: ["TypeScript", "PostgreSQL", "Redis", "Zod"],
    metric: "Disclosure level",
    value: "High-level",
    tone: "orange",
    visual: "pitupi",
    href: "/case-studies/pitupi/",
  },
  {
    number: "03",
    label: "AGENTIC PRODUCT",
    title: "WorkScale",
    summary:
      "An AI-enabled collaboration product with grounded context, structured tool calls, permission-checked actions, and durable recovery.",
    tags: ["Next.js", "Fastify", "LLM tools", "Vitest"],
    metric: "Existing web tests",
    value: "518 passed",
    tone: "blue",
    visual: "workscale",
    href: "/case-studies/workscale/",
  },
];

const experience = [
  {
    company: "WhiteLabelMD",
    date: "Jan 2026–Present",
    role: "Full Stack Platform Engineer",
    detail:
      "Operate a multi-tenant call-analytics platform across 67 PostgreSQL tables, roughly 9 million rows, six dashboards, and 161 automation workflows.",
    proof: "Eliminated 93 hourly constraint rejections and addressed queries responsible for ~12 TB of historical reads.",
  },
  {
    company: "Innovo AI",
    date: "Feb 2025–Present",
    role: "Lead AI Developer / Software Engineer",
    detail:
      "Design voice and chat agents for qualification, booking, follow-up, and support using VAPI, n8n, LLMs, APIs, and GoHighLevel.",
    proof: "Build reliable calling workflows with RAG, memory, human escalation, and duplicate-safe event handling.",
  },
  {
    company: "PITUPI",
    date: "2025–Present",
    role: "Lead Software Engineer, AI & Backend",
    detail:
      "Lead conversational AI, financial architecture, database design, provider integrations, security controls, and operational readiness.",
    proof: "Keep AI interpretation separate from ledger, balance, provider, and settlement authority.",
  },
  {
    company: "RDAS Technologies",
    date: "Feb 2023–Dec 2024",
    role: "Software Developer / Sole Frontend Engineer",
    detail:
      "Owned iSalesbook frontend development for 200+ stores, including offline checkout and delayed synchronization.",
    proof: "Delivered POS, inventory, payment, and client-specific workflows across Vue and React.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    index: "01",
    title: "Applied AI",
    description:
      "LLM applications, voice agents, RAG, semantic search, tool calling, memory, human handoff, and evaluation.",
  },
  {
    icon: Braces,
    index: "02",
    title: "Software engineering",
    description:
      "Typed APIs, event-driven workflows, transaction design, schema validation, automated tests, and maintainable systems.",
  },
  {
    icon: DatabaseZap,
    index: "03",
    title: "Production reliability",
    description:
      "PostgreSQL optimization, idempotency, observability, CI/CD, Docker, Linux, Nginx, and incident investigation.",
  },
];

const tools = [
  { name: "Python", context: "AI systems" },
  { name: "TypeScript", context: "Product engineering" },
  { name: "Node.js", context: "Backend services" },
  { name: "React + Vue", context: "Product interfaces" },
  { name: "PostgreSQL + Supabase", context: "Data and tenancy" },
  { name: "Redis", context: "Coordination and state" },
  { name: "LiveKit Agents", context: "Realtime voice AI" },
  { name: "VAPI + Retell AI", context: "Voice automation" },
  { name: "RAG + embeddings", context: "Grounded retrieval" },
  { name: "MCP + tool calling", context: "Agent execution" },
  { name: "n8n", context: "Workflow automation" },
  { name: "Docker + Linux + Nginx", context: "Deployment" },
  { name: "pytest + Jest + Cypress", context: "Quality gates" },
  { name: "GitHub Actions", context: "CI and releases" },
  { name: "Codex + Claude Code", context: "Assisted delivery" },
  { name: "Aider + OpenClaw + Hermes", context: "Agent workflows" },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "baobab") {
    return (
      <div className="project-visual rag-visual" aria-hidden="true">
        <div className="rag-query"><span className="pulse-dot" />“the thing be say…”</div>
        <div className="rag-flow"><span>INNER 0.75</span><i /><span>GUARD</span><i /><span>0.345</span></div>
        <div className="rag-answer">
          <span className="answer-bar long" /><span className="answer-bar" />
          <span className="answer-bar short" /><b>DECISION · KEEP LISTENING</b>
        </div>
      </div>
    );
  }

  if (type === "pitupi") {
    return (
      <div className="project-visual ledger-visual" aria-hidden="true">
        <div className="ledger-flow"><span>WHATSAPP</span><i>→</i><span>AI GATEWAY</span><i>→</i><span>POLICY</span></div>
        <div className="ledger-card">
          <small>FIAT WITHDRAWAL · POSTED</small>
          <p><span>User liability</span><strong>− ₦50,000</strong></p>
          <p><span>Platform asset</span><strong>+ ₦50,000</strong></p>
          <b>JOURNAL DIFFERENCE · ₦0</b>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual gateway-visual" aria-hidden="true">
      <div className="request-nodes"><span>ASK</span><span>PLAN</span><span>ACT</span></div>
      <div className="gateway-core"><Sparkles size={22} /><strong>SCALE</strong><small>permission checked</small></div>
      <div className="model-nodes"><span>READ</span><span>WRITE</span><span>LOG</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <RestoreSectionScroll />
      <header className="site-header">
        <ScrollToSection className="wordmark radiant-mark" targetId="top" ariaLabel="Back to top">RADIANT<span>.</span></ScrollToSection>
        <nav aria-label="Main navigation">
          <ScrollToSection targetId="work">Work</ScrollToSection><ScrollToSection targetId="experience">Experience</ScrollToSection><ScrollToSection targetId="about">About</ScrollToSection><ScrollToSection targetId="contact">Contact</ScrollToSection>
        </nav>
        <a className="availability" href="https://docs.google.com/document/d/1LDWV1vfstWrGs_t2m7-qW-b9hEDelzpZ5VYtjxWO1YI/edit?usp=sharing" target="_blank" rel="noreferrer"><span /> View CV</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta">
          <p>ABIODUN BUKOYE · RADIANT</p>
          <p>NIGERIA · OPEN TO REMOTE</p>
        </div>
        <h1>I build intelligent<span>systems that ship.</span></h1>
        <div className="hero-lower">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" />
            <span className="orbit-core">R</span>
            <span className="orbit-label label-one">AGENTS</span>
            <span className="orbit-label label-two">DATA</span>
            <span className="orbit-label label-three">SYSTEMS</span>
          </div>
          <div className="hero-intro">
            <p>
              I&apos;m Abiodun Bukoye. Most people know me as Radiant. I&apos;m an AI Software Engineer with 5+ years of experience
              turning conversational AI, financial workflows, and data-heavy products into reliable production systems.
            </p>
            <div className="hero-actions">
              <ScrollToSection className="primary-button" targetId="work">View selected work <ArrowDownRight size={18} /></ScrollToSection>
              <a className="text-link" href="mailto:bukoyeabiodunisrael@gmail.com">Let&apos;s talk <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
        <p className="scroll-note">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Proof, not promises.</h2></div>
          <p>Three systems that show how I reason about AI behavior, financial correctness, and reliable agent execution.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link className={`project-card ${project.tone}`} href={project.href} key={project.number}>
              <div className="project-topline"><span>{project.number}</span><span>{project.label}</span><MoveUpRight size={18} /></div>
              <ProjectVisual type={project.visual} />
              <div className="project-copy">
                <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-metric"><span>{project.metric}</span><strong>{project.value}</strong></div>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-heading">
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2>Production work,<br /><span>measurable impact.</span></h2>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article key={item.company}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{item.company} · {item.date}</p><h3>{item.role}</h3></div>
              <div><p>{item.detail}</p><strong>{item.proof}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-index"><p className="eyebrow">03 / HOW I WORK</p><span>BUILDING AT THE INTERSECTION OF</span></div>
        <div className="about-main">
          <h2>Smart enough to learn.<span>Solid enough to last.</span></h2>
          <p className="about-lead">
            The best AI product is still a product. I combine model behavior with typed boundaries,
            durable data, and operational evidence so the system remains useful after the demo.
          </p>
          <div className="capability-list">
            {capabilities.map(({ icon: Icon, index, title, description }) => (
              <article key={index}><span className="capability-index">{index}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="toolkit-section">
        <div className="section-heading compact">
          <div><p className="eyebrow">04 / TOOLKIT</p><h2>Tools I reach for.</h2></div>
          <p>Selected from the systems I use in production and open-source work.</p>
        </div>
        <div className="tool-grid expanded-tools">
          {tools.map((tool, index) => <div key={tool.name}><span>{String(index + 1).padStart(2, "0")}</span><small>{tool.context}</small><strong>{tool.name}</strong><ArrowUpRight size={16} /></div>)}
        </div>
      </section>

      <section className="assisted-section">
        <div className="assisted-heading">
          <p className="eyebrow">05 / AI-ASSISTED ENGINEERING</p>
          <h2>Agents accelerate the loop.<span>Engineering judgment owns the result.</span></h2>
          <p>I use coding agents to move faster across discovery, implementation, and debugging. Quality is still controlled through isolated changes, tests, review, and production evidence.</p>
        </div>
        <div className="assisted-flow">
          <article><span>01</span><h3>Frame</h3><p>Turn product intent into bounded requirements and acceptance criteria.</p></article>
          <article><span>02</span><h3>Isolate</h3><p>Use structured work items, branches, and Git worktrees to contain change.</p></article>
          <article><span>03</span><h3>Implement</h3><p>Pair with Codex, Claude Code, Aider, and specialist agents where they add leverage.</p></article>
          <article><span>04</span><h3>Verify</h3><p>Run type checks, unit, integration, browser, and regression suites against the result.</p></article>
          <article><span>05</span><h3>Review</h3><p>Inspect architecture, failure modes, security boundaries, and the actual diff before shipping.</p></article>
        </div>
        <p className="assisted-principle">AI can generate a change. It cannot own the engineering decision to trust that change.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline"><p className="eyebrow">06 / GET IN TOUCH</p><p><span /> OPEN TO AI AND SOFTWARE ENGINEERING ROLES</p></div>
        <h2>Have a hard problem?</h2>
        <a className="contact-link" href="mailto:bukoyeabiodunisrael@gmail.com">Let&apos;s build it. <ArrowUpRight /></a>
        <div className="contact-footer">
          <div><p>ABIODUN “RADIANT” BUKOYE</p><span>AI SOFTWARE ENGINEER · NIGERIA</span></div>
          <div className="social-links">
            <a href="https://github.com/Radiant-O" target="_blank" rel="noreferrer" aria-label="GitHub"><ArrowUpRight size={19} /> GitHub</a>
            <a href="https://linkedin.com/in/abiodun-bukoye-202aab217" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={19} /> LinkedIn</a>
            <a href="mailto:bukoyeabiodunisrael@gmail.com" aria-label="Email"><Mail size={19} /> Email</a>
          </div>
          <p className="copyright">© 2026 · BUILT WITH INTENT</p>
        </div>
      </section>
    </main>
  );
}
