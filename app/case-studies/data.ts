export type CaseStudyMetric = {
  value: string;
  label: string;
  note?: string;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Array<{
    title: string;
    body: string;
    meta?: string;
  }>;
};

export type CaseStudy = {
  slug: string;
  index: string;
  category: string;
  title: string;
  headline: string;
  summary: string;
  role: string;
  stage: string;
  accent: "acid" | "orange" | "blue" | "violet" | "cyan";
  stack: string[];
  metrics: CaseStudyMetric[];
  architecture: string[];
  sections: CaseStudySection[];
  links: Array<{ label: string; href: string }>;
  closing: string;
};

export const baobabTurn: CaseStudy = {
  slug: "baobab-turn",
  index: "01",
  category: "OPEN-SOURCE VOICE AI",
  title: "Baobab Turn",
  headline: "Voice agents should know when not to speak.",
  summary:
    "An explainable guard layer that makes end-of-turn decisions more cautious for speakers whose rhythm, language, or pitch falls outside a detector's training data.",
  role: "Creator and maintainer",
  stage: "Open source · v0.1.2",
  accent: "acid",
  stack: ["Python", "LiveKit", "Pipecat", "Ultravox", "YAML", "pytest"],
  metrics: [
    { value: "5,746", label: "Pidgin turn boundaries", note: "CENCOS transcript replay" },
    { value: "89.9%", label: "Directional accuracy", note: "When the lexical layer fires" },
    { value: "4.2%", label: "Lexical coverage", note: "Narrow by design" },
    { value: "387", label: "Test functions", note: "Repository snapshot" },
  ],
  architecture: [
    "Voice activity and speech-to-text produce timing and transcript signals.",
    "The existing turn detector supplies an end-of-turn probability.",
    "Baobab applies speaker-reviewed markers, pacing, language, and pitch evidence.",
    "The host either commits a response or keeps listening; uncertain evidence passes through.",
  ],
  sections: [
    {
      eyebrow: "THE PROBLEM",
      title: "Transcription can be right while turn ownership is wrong.",
      intro:
        "English-centric timing and intonation assumptions can interpret a meaningful pause, tonal contour, code-switch, or local discourse cue as the end of a speaker's turn.",
      items: [
        { title: "Tonal interference", body: "A low lexical tone can resemble the falling contour a detector interprets as completion." },
        { title: "Code-switching", body: "A speaker can change language assumptions inside one utterance." },
        { title: "Unseen lexical cues", body: "Markers such as 'abi', 'sha', or 'the thing be say' can explicitly signal whether more speech is coming." },
        { title: "Different pacing", body: "Second-language speech, age, a stammer, or poor connectivity can create longer but meaningful pauses." },
      ],
    },
    {
      eyebrow: "THE SYSTEM",
      title: "A guardrail, not another model.",
      intro:
        "The intervention sits between prediction and commitment. It wraps the detector already in production, keeps the decision core framework-neutral, and never owns the conversation loop.",
      items: [
        { title: "Pure decision core", body: "Immutable inputs and outputs, marker matching, pacing signals, probability adjustment, and no framework imports.", meta: "baobab_turn/core" },
        { title: "Language packs", body: "YAML packages keep marker weights, tonal flags, delays, provenance, and validation status as inspectable data.", meta: "baobab_turn/packs" },
        { title: "Thin adapters", body: "LiveKit, Pipecat, text chat, and Ultravox translate host events into one stable core contract.", meta: "baobab_turn/adapters" },
        { title: "Evidence loop", body: "Corpus replay, ablations, pack validation, marker mining, and reason-level metrics make each hypothesis testable.", meta: "bench · tools · tests" },
      ],
    },
    {
      eyebrow: "DECISION DESIGN",
      title: "One prediction in. One accountable decision out.",
      intro:
        "The priority is explicit: a false interruption is more harmful than a small amount of extra latency.",
      items: [
        { title: "Sanitize", body: "Reject non-finite values and clamp valid probabilities to a safe range." },
        { title: "Trust", body: "Missing, stale, or agent-speaking transcript tails cause an abstention." },
        { title: "Interpret", body: "Longest marker match wins; continuation wins ties." },
        { title: "Explain", body: "Every adjustment and non-adjustment returns an inspectable reason." },
      ],
    },
    {
      eyebrow: "EVIDENCE",
      title: "Promising signal, honestly bounded.",
      intro:
        "The current benchmark isolates the lexical layer against transcript data. It does not claim end-to-end voice-agent improvement.",
      items: [
        { title: "What it proves", body: "Speaker-reviewed Pidgin markers carry strong directional signal at the decision points where they appear." },
        { title: "What it does not prove", body: "The replay contains no live audio, so silence, pitch, latency, and the complete guard are not measured." },
        { title: "Why coverage matters", body: "Lexical rules apply to 4.2% of boundaries. Broader gains must come from pacing, pitch, language context, and detector probability." },
        { title: "Safe degradation", body: "Unknown languages and weak evidence fall back to the host detector instead of silently changing behavior." },
      ],
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Radiant-O/baobab-turn" },
    { label: "PyPI", href: "https://pypi.org/project/baobab-turn/" },
    { label: "Citable release", href: "https://doi.org/10.5281/zenodo.23822193" },
  ],
  closing: "A small layer with a human-sized goal: let people finish.",
};

export const pitupi: CaseStudy = {
  slug: "pitupi",
  index: "02",
  category: "FINANCIAL AI PLATFORM",
  title: "Pitupi",
  headline: "AI is the interface. Deterministic systems control the money.",
  summary:
    "An AI-powered WhatsApp platform that helps customers access supported financial services through natural conversation.",
  role: "Lead Software Engineer · AI and Backend",
  stage: "Company project · 2025–Present",
  accent: "orange",
  stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Conversational AI"],
  metrics: [
    { value: "Company", label: "Project type", note: "Commercial product work" },
    { value: "WhatsApp", label: "Customer channel", note: "Conversational experience" },
    { value: "Hybrid", label: "AI approach", note: "Rules and language models" },
    { value: "Private", label: "Implementation", note: "Details intentionally withheld" },
  ],
  architecture: [
    "Customers begin supported financial journeys through a conversational WhatsApp experience.",
    "AI interprets natural-language intent and gathers the information required for a journey.",
    "Application services validate requests and remain authoritative over financial operations.",
    "Operational tooling supports customer service, monitoring, and reliable product delivery.",
  ],
  sections: [
    {
      eyebrow: "PUBLIC PRODUCT OVERVIEW",
      title: "Financial services through a familiar conversation.",
      intro:
        "Pitupi is a company product that uses WhatsApp as the interface for supported financial journeys. This portfolio intentionally describes only the public product concept and my contribution.",
      items: [
        { title: "Conversational access", body: "Customers interact with supported services through natural-language WhatsApp journeys." },
        { title: "Guided flows", body: "The experience collects required information, clarifies ambiguous requests, and presents confirmations." },
        { title: "Application authority", body: "AI supports interpretation while application services control financial execution." },
        { title: "Human support", body: "Customer journeys can move from automated assistance to operational support when needed." },
      ],
    },
    {
      eyebrow: "MY CONTRIBUTION",
      title: "Leading AI and backend engineering.",
      intro:
        "My work spans the conversational experience, typed backend workflows, integrations, data design, testing, and production readiness.",
      items: [
        { title: "Conversational AI", body: "Shape how natural-language requests become clear, structured customer journeys." },
        { title: "Backend workflows", body: "Design typed services and boundaries that keep business rules outside model-generated instructions." },
        { title: "Integration engineering", body: "Coordinate external service interactions, error handling, and operational feedback." },
        { title: "Engineering leadership", body: "Guide architecture decisions, implementation quality, testing, and delivery safeguards." },
      ],
    },
    {
      eyebrow: "ENGINEERING PRINCIPLE",
      title: "Useful AI with explicit authority boundaries.",
      intro:
        "Financial software needs stronger guarantees than a language model can provide. The portfolio therefore focuses on the boundary, not confidential implementation details.",
      items: [
        { title: "Interpretation is not execution", body: "Model output is treated as a proposal that application code must validate." },
        { title: "Clarify uncertainty", body: "Ambiguous requests are resolved conversationally instead of being treated as financial instructions." },
        { title: "Typed boundaries", body: "Structured contracts connect the conversational layer to backend capabilities." },
        { title: "Confidential by design", body: "Internal topology, providers, controls, endpoints, and failure procedures are not disclosed here." },
      ],
    },
  ],
  links: [{ label: "Visit Pitupi", href: "https://pitupi.co" }],
  closing: "The engineering challenge is turning flexible conversation into structured financial journeys where the application, not the model, owns every consequential action.",
};

export const workscale: CaseStudy = {
  slug: "workscale",
  index: "03",
  category: "AGENTIC PRODUCT ENGINEERING",
  title: "WorkScale",
  headline: "From conversation to controlled action.",
  summary:
    "An AI-enabled collaboration product with a workspace assistant that retrieves context, proposes work, and invokes permission-checked application operations.",
  role: "Product Engineer",
  stage: "In progress · Deploying soon",
  accent: "blue",
  stack: ["TypeScript", "Next.js", "React", "Node.js", "Fastify", "PostgreSQL", "Drizzle", "Vitest"],
  metrics: [
    { value: "30s", label: "Observed cutoff", note: "Proxy disconnected long requests" },
    { value: "31s → 200", label: "Regression response", note: "Real-network delayed upstream" },
    { value: "518", label: "Existing web tests", note: "Passed with the fix" },
    { value: "In progress", label: "Product stage", note: "Not publicly deployed" },
  ],
  architecture: [
    "The workspace interface presents conversation, progress, previews, and results.",
    "AI orchestration manages grounded context, model routing, and structured tool calls.",
    "Application services validate requests, authorize the actor, and enforce business rules.",
    "Tenant-scoped storage records work, conversations, action receipts, and recovery state.",
  ],
  sections: [
    {
      eyebrow: "AI ENGINEERING",
      title: "An assistant that can do useful work.",
      intro:
        "Scale turns natural language into bounded workspace operations without treating model output as authority or evidence.",
      items: [
        { title: "Agentic tool execution", body: "A bounded loop coordinates reads, planned writes, native tool calls, validation feedback, and final answers." },
        { title: "Context retrieval", body: "Accessible projects, tasks, and activity ground answers in validated application results." },
        { title: "Model routing", body: "A provider abstraction supports selection, escalation, fallback, and observable routing events." },
        { title: "Structured boundaries", body: "Runtime schemas reject malformed arguments and let the assistant repair requests within bounded limits." },
      ],
    },
    {
      eyebrow: "CONTROL MODEL",
      title: "Language proposes. The application controls.",
      intro:
        "Conversation history supplies context, never authorization. Core collaboration remains usable without AI.",
      items: [
        { title: "Permission-aware actions", body: "Every operation passes through application authorization for the current workspace and actor." },
        { title: "Human confirmation", body: "Previews and confirmation policies keep people in control of consequential writes." },
        { title: "Replay protection", body: "Action receipts and idempotent boundaries prevent an accepted operation from executing twice." },
        { title: "Persistent recovery", body: "Saved conversations, bounded retries, and durable results support interruption and return." },
      ],
    },
    {
      eyebrow: "INCIDENT",
      title: "The model was not the failure. The transport was.",
      intro:
        "Long planning requests surfaced as HTTP 500 errors even while the API continued processing.",
      items: [
        { title: "Trace", body: "Runtime logs revealed a web-proxy disconnect at 30 seconds while the planning budget allowed up to 120 seconds." },
        { title: "Align", body: "Proxy and browser waits were brought into line with planning and response-persistence budgets." },
        { title: "Regress", body: "A real-network test exercised the proxy against a 31-second delayed upstream and received HTTP 200." },
        { title: "Verify", body: "All 518 existing web tests passed alongside the focused regression." },
      ],
    },
    {
      eyebrow: "OWNERSHIP",
      title: "Product thinking with engineering discipline.",
      intro:
        "I lead product definition and delivery, use coding agents to accelerate implementation, and review changes through tests and pull requests.",
      items: [
        { title: "Product direction", body: "Translate team workflows into requirements, acceptance criteria, and coherent product decisions." },
        { title: "Architecture oversight", body: "Shape the boundaries between interface, orchestration, application services, and storage." },
        { title: "Delivery coordination", body: "Break work into structured items, isolate changes in Git worktrees, and review outcomes before integration." },
        { title: "Next validation", body: "Measure task completion, tool-call correctness, clarification quality, latency, and cost on representative workflows." },
      ],
    },
  ],
  links: [],
  closing: "Useful AI is not just a good answer. It is a controlled, observable, recoverable action.",
};

export const agentSandboxRunner: CaseStudy = {
  slug: "agent-sandbox-runner",
  index: "04",
  category: "SECURE AGENT INFRASTRUCTURE",
  title: "Agent Sandbox Runner",
  headline: "Let the agent write code. Never let it escape the boundary.",
  summary:
    "A secure execution plane for model-written Python, with one policy path for API and agent callers, a fresh cloud microVM per run, explicit failure ownership, and a live audit console.",
  role: "Sole Engineer",
  stage: "Live public demo",
  accent: "violet",
  stack: ["Python", "FastAPI", "E2B", "React", "TypeScript", "SSE", "SQLite", "Docker"],
  metrics: [
    { value: "124", label: "Unit tests", note: "Plus live integration tests" },
    { value: "~600ms", label: "Sandbox boot", note: "Measured live run average" },
    { value: "1", label: "Fresh microVM per run", note: "Always destroyed in cleanup" },
    { value: "6 / 6", label: "Sandboxes killed", note: "Zero cleanup failures in the measured run" },
  ],
  architecture: [
    "API and agent requests enter the same policy-enforced ExecutionService.",
    "Every run receives a fresh E2B microVM with internet access disabled by default.",
    "Lifecycle events flow through a replay buffer to the public console over SSE.",
    "Structured records preserve status, failure ownership, timing, and cleanup evidence.",
  ],
  sections: [
    {
      eyebrow: "TRUST BOUNDARY",
      title: "One path from generated code to a sandbox.",
      intro:
        "The agent never talks to E2B directly. It is a bounded client of the same ExecutionService used by the API, so policy, concurrency, classification, persistence, and cleanup cannot be bypassed.",
      items: [
        { title: "Fresh isolation", body: "Each run creates a new cloud microVM. Sessions are never shared between users or agent runs." },
        { title: "Network denied", body: "Sandbox internet access is off by default, and application secrets are never copied into the runtime." },
        { title: "Bounded resources", body: "Wall-clock limits, capped output, concurrency control, and sandbox lifetime backstops constrain every execution." },
        { title: "Cleanup in finally", body: "The service attempts destruction on every path and records the outcome instead of treating process exit as proof of cleanup." },
      ],
    },
    {
      eyebrow: "FAILURE OWNERSHIP",
      title: "A timeout is not always the user's fault.",
      intro:
        "Provider exceptions overlap in ways that can mislabel an unavailable sandbox as slow user code. The service classifies the most specific infrastructure errors before generic timeouts.",
      items: [
        { title: "User code error", body: "A completed process with a failing exit belongs to the submitted program and is reported with bounded stderr." },
        { title: "Execution timeout", body: "Only an active program that exceeds its allotted runtime is classified as a user-code timeout." },
        { title: "Sandbox unavailable", body: "Creation, reachability, and provider failures remain infrastructure errors instead of being blamed on the code." },
        { title: "Stored evidence", body: "Status, failure kind, timings, output metadata, and cleanup state are persisted for verification and debugging." },
      ],
    },
    {
      eyebrow: "BOUNDED AGENT",
      title: "The model can propose and inspect. The service remains authoritative.",
      intro:
        "The agent gets one tool, execute_python, and a finite budget for steps, tool calls, tokens, and wall-clock time. Success comes from stored execution records, not the model's narration.",
      items: [
        { title: "One typed tool", body: "Invalid tool arguments return structured feedback so the model can repair a request without escaping the contract." },
        { title: "Pre-spend policy", body: "Requests are validated before an LLM or sandbox provider is paid." },
        { title: "Bounded loop", body: "Step, tool, time, and token ceilings prevent an open-ended autonomous run." },
        { title: "Verified completion", body: "The final answer can reference only results produced by the shared execution path and stored by the application." },
      ],
    },
    {
      eyebrow: "PUBLIC OPERATIONS",
      title: "A real demo with controlled cost and an honest trace.",
      intro:
        "The public console streams actual sandbox lifecycle events. Layered gates keep a no-sign-up demo available without turning provider credits into an unbounded public resource.",
      items: [
        { title: "Live event stream", body: "Sandbox creation, upload, stdout, stderr, exit, and destruction events arrive through SSE with replay for late connections." },
        { title: "Spend gates", body: "Policy checks, Turnstile, visitor limits, a daily budget, recorded-run replay, and a provider credit limit contain cost." },
        { title: "Proxy-safe identity", body: "Visitor limits trust Cloudflare's connecting IP and use the proxy-controlled end of forwarded chains." },
        { title: "Observable delivery", body: "Structured logs, lifecycle metrics, CI checks, Docker builds, Render, Cloudflare, and uptime monitoring close the loop." },
      ],
    },
  ],
  links: [
    { label: "Live demo", href: "https://agent-sandbox-runner.onrender.com" },
    { label: "GitHub", href: "https://github.com/Radiant-O/agent-sandbox-runner" },
  ],
  closing: "Generated code is untrusted input. The useful engineering begins at the boundary around it.",
};

export const opportunityRealityCheck: CaseStudy = {
  slug: "opportunity-reality-check",
  index: "05",
  category: "EVIDENCE-BOUND DECISION SUPPORT",
  title: "Opportunity Reality Check",
  headline: "If the listing does not say it, the product should not guess.",
  summary:
    "A decision-support tool that checks real job listings against location, work arrangement, relocation, and sponsorship needs, with a source quote behind every claim and unknowns kept explicit.",
  role: "Sole Engineer",
  stage: "Live public demo",
  accent: "cyan",
  stack: ["Python", "FastAPI", "Pydantic", "React", "TypeScript", "Vite", "Cloudflare", "Docker"],
  metrics: [
    { value: "163", label: "Backend tests", note: "All external I/O mocked" },
    { value: "36", label: "Frontend tests", note: "Type checks and production build in CI" },
    { value: "20", label: "Adversarial eval cases", note: "Regression gate, not an accuracy estimate" },
    { value: "$0", label: "Monthly demo cost", note: "Public LLM extraction disabled" },
  ],
  architecture: [
    "The React client sends a job id and tab-local preferences to a FastAPI API.",
    "Listings are fetched from a fixed read-only host, normalized, and extracted into quoted claims.",
    "Every deterministic or optional LLM claim must survive the same evidence validator.",
    "Pure rules turn verified claims into findings, next steps, and an employer question draft.",
  ],
  sections: [
    {
      eyebrow: "PRODUCT PRINCIPLE",
      title: "Unknown is a first-class result, not a hidden no.",
      intro:
        "International candidates often need facts the listing never states. The system keeps silence, explicit restriction, and explicit support separate throughout the API and interface.",
      items: [
        { title: "Quotes, not guesses", body: "Every displayed claim includes the exact sentence and source field that supports it." },
        { title: "Rules, not scores", body: "Findings use stable rule ids and statuses instead of a confidence-looking match percentage." },
        { title: "No legal determination", body: "The authorization view reports only what the listing establishes and flags what still needs clarification." },
        { title: "End in action", body: "Ranked next steps and a copyable employer question help the user resolve missing information." },
      ],
    },
    {
      eyebrow: "EVIDENCE PIPELINE",
      title: "The AI proposes. Deterministic code decides what can be believed.",
      intro:
        "Metadata, clause-level rules, and an optional structured LLM extractor all produce candidate claims. None reaches the rules engine until the validator proves that its quote and meaning agree with the listing.",
      items: [
        { title: "Exact-source evidence", body: "Quotes are normalized, located in the named field, and expanded to the smallest complete sentence." },
        { title: "Polarity cross-check", body: "The full sentence is classified again so a positive fragment cannot hide words such as not or unable." },
        { title: "Injection handling", body: "Text aimed at AI tools is rejected, and LLM claims from an injected listing are discarded." },
        { title: "Visible rejection", body: "Discarded claims remain inspectable with a reason instead of disappearing from the audit trail." },
      ],
    },
    {
      eyebrow: "RULE ENGINE",
      title: "Compatibility is derived only from verified facts.",
      intro:
        "Pure Python rules combine verified listing claims with request-only preferences. Changing preferences reruns cheap rules without extracting the listing or paying for another model call.",
      items: [
        { title: "Location", body: "Work arrangement, country, remote region, time zone, and relocation rules distinguish conflict from uncertainty." },
        { title: "Authorization", body: "Supported, restricted, case-by-case, existing authorization, citizenship, and silence remain distinct states." },
        { title: "Technical context", body: "Normalized skills show supporting alignment without being combined with location or authorization verdicts." },
        { title: "Layered caches", body: "Job details and extraction are cached per listing; analysis is cached separately by listing and preferences." },
      ],
    },
    {
      eyebrow: "ADVERSARIAL QUALITY",
      title: "The dangerous edge cases became tests.",
      intro:
        "The review targeted the ways evidence systems fail: dropped negations, prompt injection, perk false positives, ambiguous geography, closed jobs, and spoofed proxy headers.",
      items: [
        { title: "Negation traps", body: "Cases such as no longer sponsor and relocation assistance is not available are pinned as regressions." },
        { title: "False-positive traps", body: "Company-sponsored conferences, visa-free perks, salary, company size, and reputation never imply sponsorship." },
        { title: "Honest evaluation", body: "The 20-case set reports perfect regression results but is explicitly not presented as an independent accuracy estimate." },
        { title: "Privacy by default", body: "There are no accounts, cookies, or preference storage, and a test asserts that preferences never enter logs." },
      ],
    },
  ],
  links: [
    { label: "Live demo", href: "https://reality-check.radiantx.workers.dev" },
    { label: "API docs", href: "https://opportunity-reality-check.onrender.com/docs" },
    { label: "GitHub", href: "https://github.com/Radiant-O/opportunity-reality-check" },
  ],
  closing: "A trustworthy answer is not the most confident one. It is the one that can show its evidence and admit what remains unknown.",
};

export const caseStudies = [baobabTurn, pitupi, workscale, agentSandboxRunner, opportunityRealityCheck];
