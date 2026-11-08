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

export function SystemArchitecture({ slug }: { slug: string }) {
  if (slug === "baobab-turn") return <BaobabArchitecture />;
  if (slug === "pitupi") return <PitupiArchitecture />;
  return <WorkScaleArchitecture />;
}

function BaobabTrace() {
  return (
    <section className="system-demonstration trace-demonstration">
      <div className="demo-heading">
        <p className="eyebrow">DECISION TRACE</p>
        <h2>See exactly why the guard changed—or kept—the prediction.</h2>
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

export function SystemDemonstration({ slug }: { slug: string }) {
  if (slug === "baobab-turn") return <BaobabTrace />;
  if (slug === "pitupi") return <PitupiJourney />;
  return <WorkScaleIncident />;
}
