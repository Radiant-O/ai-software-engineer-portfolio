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
  accent: "acid" | "orange" | "blue";
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
  links: [{ label: "Visit Pitupi", href: "https://pitupi.com" }],
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

export const caseStudies = [baobabTurn, pitupi, workscale];
