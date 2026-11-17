const traceScenarios = [
  {
    id: "continuation",
    tab: "A · Continuation",
    quote: "“i wan tell you say the thing be say”",
    adjusted: "0.345",
    position: "34.5%",
    decision: "KEEP LISTENING",
    reason: "continuation_veto:the thing be say",
    behavior: "Probability suppressed",
    tone: "continue",
  },
  {
    id: "yield",
    tab: "B · Yield",
    quote: "“e don finish abi”",
    adjusted: "0.818",
    position: "81.8%",
    decision: "COMMIT TURN",
    reason: "yield_boost:abi",
    behavior: "Probability raised",
    tone: "yield",
  },
  {
    id: "neutral",
    tab: "C · No rule",
    quote: "“i go come tomorrow”",
    adjusted: "0.750",
    position: "75%",
    decision: "COMMIT TURN",
    reason: "no_rules_fired",
    behavior: "Inner result unchanged",
    tone: "neutral",
  },
  {
    id: "stale",
    tab: "D · Stale tail",
    quote: "“the thing be say…” · tail age 1,260 ms",
    adjusted: "0.750",
    position: "75%",
    decision: "COMMIT TURN",
    reason: "tail_stale",
    behavior: "Lexical layer abstains",
    tone: "neutral",
  },
];

function Arrow() {
  return <span className="diagram-arrow" aria-hidden="true">→</span>;
}

function BaobabArchitecture() {
  return (
    <div className="technical-diagram baobab-architecture" role="img" aria-label="Baobab Turn architecture from caller audio through the host detector and guard to either a reply or continued listening">
      <div className="diagram-lane">
        <div className="diagram-node source"><small>INPUT</small><strong>Caller audio</strong><span>speech · pause · pitch</span></div>
        <Arrow />
        <div className="diagram-node"><small>STREAM</small><strong>VAD + STT</strong><span>timing · partial text</span></div>
        <Arrow />
        <div className="diagram-node"><small>PREDICTION</small><strong>Inner detector</strong><span>p(end of turn)</span></div>
        <Arrow />
        <div className="diagram-node accent"><small>DECISION LAYER</small><strong>Baobab guard</strong><span>adjust · delay · explain</span></div>
      </div>
      <div className="signal-rail">
        <span>speaker-reviewed markers</span><span>tail freshness</span><span>code-switch</span><span>pause profile</span><span>pitch contour</span>
        <b aria-hidden="true">↑ evidence enters here</b>
      </div>
      <div className="decision-fork">
        <div><small>COMMIT</small><strong>LLM → TTS</strong><span>agent replies</span></div>
        <span aria-hidden="true">OR</span>
        <div><small>HOLD</small><strong>Keep listening</strong><span>caller retains the turn</span></div>
      </div>
      <p className="diagram-caption">The host detector remains in place. Baobab intervenes only after a prediction exists and before the conversation loop commits to speaking.</p>
    </div>
  );
}

function PitupiArchitecture() {
  return (
    <div className="technical-diagram pitupi-architecture" role="img" aria-label="Sanitized Pitupi architecture from customer channels through the API and AI gateway to financial domains and infrastructure">
      <div className="architecture-layer channel-layer">
        <p>CHANNELS</p>
        <div><span>WhatsApp</span><span>Admin tools</span><span>Documented APIs</span></div>
      </div>
      <Arrow />
      <div className="architecture-layer boundary-layer">
        <p>VALIDATED BOUNDARY</p>
        <div><span>Authentication</span><span>Schema validation</span><span>Request context</span><span>Rate controls</span></div>
      </div>
      <Arrow />
      <div className="architecture-split">
        <div className="architecture-layer ai-layer">
          <p>CONVERSATIONAL INTELLIGENCE</p>
          <strong>Rules → LLM classification → typed intent</strong>
          <span>clarification · entity collection · confirmation</span>
        </div>
        <div className="architecture-layer domain-layer">
          <p>APPLICATION DOMAINS</p>
          <div><span>Identity</span><span>Wallet</span><span>Transactions</span><span>Digital assets</span><span>Utilities</span><span>Support</span></div>
        </div>
      </div>
      <Arrow />
      <div className="architecture-split foundation-split">
        <div className="architecture-layer"><p>STATE</p><strong>PostgreSQL</strong><span>financial source of truth</span></div>
        <div className="architecture-layer"><p>COORDINATION</p><strong>Redis + workers</strong><span>async work and recovery</span></div>
        <div className="architecture-layer"><p>INTEGRATIONS</p><strong>Provider adapters</strong><span>normalized external capabilities</span></div>
      </div>
      <p className="diagram-caption">This view focuses on responsibility and authority boundaries. Provider-specific implementation remains within the company system.</p>
    </div>
  );
}

function WorkScaleArchitecture() {
  return (
    <div className="technical-diagram workscale-architecture" role="img" aria-label="WorkScale architecture from workspace interface through AI orchestration and application services to tenant-scoped persistence">
      <div className="workscale-request">“Plan the design work for our landing page.”</div>
      <div className="diagram-lane workscale-lane">
        <div className="diagram-node source"><small>01 / INTERFACE</small><strong>Workspace UI</strong><span>conversation · progress · previews</span></div>
        <Arrow />
        <div className="diagram-node accent"><small>02 / INTELLIGENCE</small><strong>AI orchestration</strong><span>context · routing · tool calls</span></div>
        <Arrow />
        <div className="diagram-node"><small>03 / EXECUTION</small><strong>Application services</strong><span>validation · authorization · rules</span></div>
        <Arrow />
        <div className="diagram-node"><small>04 / PERSISTENCE</small><strong>Tenant data</strong><span>work · receipts · conversations</span></div>
      </div>
      <div className="control-rail">
        <span>permission checks</span><span>runtime schemas</span><span>confirmation policy</span><span>replay protection</span><span>audit events</span>
      </div>
      <div className="result-return"><span>verified results</span><i aria-hidden="true">←</i><span>assistant response</span><i aria-hidden="true">←</i><span>UI feedback</span></div>
      <p className="diagram-caption">The model can propose an operation. Application code decides whether it is valid, allowed, confirmed, and safe to persist.</p>
    </div>
  );
}

function AgentSandboxArchitecture() {
  return (
    <div className="technical-diagram sandbox-architecture" role="img" aria-label="Agent Sandbox Runner architecture showing API and AI agent requests passing through one execution service into an isolated E2B microVM">
      <div className="architecture-split">
        <div className="architecture-layer">
          <p>PUBLIC CLIENT</p>
          <strong>React console</strong>
          <span>Turnstile · visitor budget · SSE</span>
        </div>
        <div className="architecture-layer">
          <p>AUTHENTICATED CLIENT</p>
          <strong>Execution API</strong>
          <span>API key · rate limit · schema</span>
        </div>
      </div>
      <Arrow />
      <div className="architecture-split">
        <div className="architecture-layer ai-layer">
          <p>BOUNDED AGENT</p>
          <strong>OpenRouter + execute_python</strong>
          <span>step · tool · token · time budgets</span>
        </div>
        <div className="architecture-layer boundary-layer">
          <p>ONE EXECUTION AUTHORITY</p>
          <strong>ExecutionService</strong>
          <span>policy · concurrency · classification · persistence · cleanup</span>
        </div>
      </div>
      <Arrow />
      <div className="architecture-layer sandbox-core">
        <p>UNTRUSTED COMPUTE</p>
        <div><span>Fresh E2B microVM</span><span>Internet off</span><span>No app secrets</span><span>Hard timeout</span><span>Output capped</span><span>Always kill</span></div>
      </div>
      <div className="result-return"><span>SQLite records</span><i aria-hidden="true">←</i><span>Replay buffer</span><i aria-hidden="true">←</i><span>SSE audit console</span></div>
      <p className="diagram-caption">The agent is a client, not an infrastructure authority. Every caller crosses the same validation, execution, and cleanup boundary.</p>
    </div>
  );
}

function OpportunityArchitecture() {
  return (
    <div className="technical-diagram opportunity-architecture" role="img" aria-label="Opportunity Reality Check architecture from job listing and preferences through extraction, evidence validation, deterministic rules, and evidence-backed output">
      <div className="diagram-lane evidence-lane">
        <div className="diagram-node source"><small>01 / INPUT</small><strong>Listing + preferences</strong><span>fixed job source · tab-local needs</span></div>
        <Arrow />
        <div className="diagram-node"><small>02 / EXTRACT</small><strong>Candidate claims</strong><span>metadata · clauses · optional LLM</span></div>
        <Arrow />
        <div className="diagram-node accent"><small>03 / VERIFY</small><strong>Evidence validator</strong><span>quote · source · polarity · injection</span></div>
        <Arrow />
        <div className="diagram-node"><small>04 / DECIDE</small><strong>Pure rule engine</strong><span>location · authorization · skills</span></div>
      </div>
      <div className="control-rail">
        <span>exact quote required</span><span>full sentence checked</span><span>unknown stays unknown</span><span>rule ids</span><span>no persisted preferences</span>
      </div>
      <div className="decision-fork evidence-output">
        <div><small>VERIFIED</small><strong>Evidence-backed findings</strong><span>next steps · employer question</span></div>
        <span aria-hidden="true">OR</span>
        <div><small>REJECTED / ABSENT</small><strong>Discarded or unknown</strong><span>reason remains visible</span></div>
      </div>
      <p className="diagram-caption">The optional model can suggest a claim. Deterministic validation and rules decide whether that claim can influence the user.</p>
    </div>
  );
}

export function SystemArchitecture({ slug }: { slug: string }) {
  if (slug === "baobab-turn") return <BaobabArchitecture />;
  if (slug === "pitupi") return <PitupiArchitecture />;
  if (slug === "agent-sandbox-runner") return <AgentSandboxArchitecture />;
  if (slug === "opportunity-reality-check") return <OpportunityArchitecture />;
  return <WorkScaleArchitecture />;
}

function BaobabTrace() {
  return (
    <section className="system-demonstration trace-demonstration">
      <div className="demo-heading">
        <p className="eyebrow">DECISION TRACE</p>
        <h2>See exactly why the guard changed or kept the prediction.</h2>
        <p>Each example starts with the same inner-detector probability of 0.75 and a commit threshold of 0.50. Choose a transcript tail to inspect the evidence path.</p>
      </div>
      <div className="trace-shell">
        {traceScenarios.map((scenario, index) => (
          <input key={scenario.id} type="radio" name="trace-scenario" id={`trace-${scenario.id}`} defaultChecked={index === 0} />
        ))}
        <div className="trace-tabs" role="tablist" aria-label="Decision trace scenarios">
          {traceScenarios.map((scenario) => <label key={scenario.id} htmlFor={`trace-${scenario.id}`}>{scenario.tab}</label>)}
        </div>
        <div className="trace-panels">
          {traceScenarios.map((scenario) => (
            <article className={`trace-panel ${scenario.tone}`} data-trace={scenario.id} key={scenario.id}>
              <blockquote>{scenario.quote}</blockquote>
              <div className="probability-scale">
                <div className="scale-labels"><span>0.00</span><b>COMMIT THRESHOLD · 0.50</b><span>1.00</span></div>
                <div className="scale-track"><i className="threshold" /><i className="inner-dot" title="Inner detector 0.750" /><i className="adjusted-dot" style={{ left: scenario.position }} /></div>
                <div className="probability-values"><span>INNER <b>0.750</b></span><span>ADJUSTED <b>{scenario.adjusted}</b></span></div>
              </div>
              <dl>
                <div><dt>Decision</dt><dd>{scenario.decision}</dd></div>
                <div><dt>Reason</dt><dd><code>{scenario.reason}</code></dd></div>
                <div><dt>Behavior</dt><dd>{scenario.behavior}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PitupiJourney() {
  const steps = [
    ["01", "Request", "Customer describes the intended financial action in natural language."],
    ["02", "Interpret", "Rules and model classification produce a typed intent and entities."],
    ["03", "Complete", "The conversation gathers missing data and resolves ambiguity."],
    ["04", "Validate", "Application services check capability, context, and business rules."],
    ["05", "Confirm", "The customer receives a clear summary before a consequential action."],
    ["06", "Execute", "A deterministic domain service performs the supported operation."],
    ["07", "Resolve", "The customer receives a recorded outcome or a recoverable status."],
  ];
  return (
    <section className="system-demonstration journey-demonstration">
      <div className="demo-heading">
        <p className="eyebrow">CUSTOMER-TO-SYSTEM WORKFLOW</p>
        <h2>Conversation handles ambiguity. Services handle authority.</h2>
        <p>This is the portfolio-safe workflow: enough detail to show the engineering model without disclosing provider contracts or internal control configuration.</p>
      </div>
      <div className="journey-flow">
        {steps.map(([index, title, body]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
  );
}

function WorkScaleIncident() {
  return (
    <section className="system-demonstration incident-demonstration">
      <div className="demo-heading">
        <p className="eyebrow">RELIABILITY INVESTIGATION</p>
        <h2>The model was still working. The transport had already given up.</h2>
        <p>A production-shaped failure traced across browser, proxy, API, persistence, and test layers.</p>
      </div>
      <div className="incident-timeline">
        <article><span>00s</span><h3>Request begins</h3><p>The workspace assistant starts a longer planning operation.</p></article>
        <article className="failure"><span>30s</span><h3>Proxy disconnects</h3><p>The web layer returns HTTP 500 while the upstream API continues processing.</p></article>
        <article><span>120s</span><h3>Allowed planning budget</h3><p>The application expected the request and receipt persistence to have more time.</p></article>
        <article className="fix"><span>FIX</span><h3>Budgets aligned</h3><p>Proxy and browser waits were aligned with planning and persistence behavior.</p></article>
        <article className="verify"><span>31s → 200</span><h3>Regression verified</h3><p>A real-network delayed upstream passed; all 518 existing web tests stayed green.</p></article>
      </div>
    </section>
  );
}

function AgentSandboxLifecycle() {
  const steps = [
    ["01", "Queue", "Create a durable execution record and return 202 before the work begins."],
    ["02", "Admit", "Acquire a concurrency slot after policy and spend checks pass."],
    ["03", "Create", "Start one fresh E2B microVM with bounded retry and no network access."],
    ["04", "Run", "Upload code, execute with a hard timeout, and stream capped output events."],
    ["05", "Destroy", "Kill the sandbox in finally, including provider and user-code failure paths."],
    ["06", "Classify", "Separate user errors, timeouts, provider failures, and interruptions."],
    ["07", "Persist", "Store the result and cleanup evidence used by the API, agent, and console."],
  ];
  return (
    <section className="system-demonstration journey-demonstration sandbox-lifecycle">
      <div className="demo-heading">
        <p className="eyebrow">EXECUTION LIFECYCLE</p>
        <h2>Cleanup is part of the result, not an afterthought.</h2>
        <p>The same lifecycle runs whether code came from a developer API request or the bounded AI agent.</p>
      </div>
      <div className="journey-flow">
        {steps.map(([index, title, body]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
  );
}

function OpportunityEvidenceFlow() {
  const steps = [
    ["01", "Locate", "Require the proposed quote to exist in the exact source field."],
    ["02", "Expand", "Recover the smallest complete sentence around the quote."],
    ["03", "Screen", "Reject instructions addressed to AI tools and distrust injected listings."],
    ["04", "Cross-check", "Reclassify the full sentence to catch omitted negation and topic mismatch."],
    ["05", "Verify", "Accept only canonical values whose meaning is supported by the source."],
    ["06", "Decide", "Run deterministic location, authorization, relocation, and technical rules."],
    ["07", "Explain", "Return rule ids, quotes, unknowns, discarded claims, and next steps."],
  ];
  return (
    <section className="system-demonstration journey-demonstration evidence-demonstration">
      <div className="demo-heading">
        <p className="eyebrow">EVIDENCE VALIDATION TRACE</p>
        <h2>A matching fragment is not enough.</h2>
        <p>The validator reconstructs meaning before any extracted claim can affect a candidate&apos;s decision.</p>
      </div>
      <div className="journey-flow">
        {steps.map(([index, title, body]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
  );
}

export function SystemDemonstration({ slug }: { slug: string }) {
  if (slug === "baobab-turn") return <BaobabTrace />;
  if (slug === "pitupi") return <PitupiJourney />;
  if (slug === "agent-sandbox-runner") return <AgentSandboxLifecycle />;
  if (slug === "opportunity-reality-check") return <OpportunityEvidenceFlow />;
  return <WorkScaleIncident />;
}
