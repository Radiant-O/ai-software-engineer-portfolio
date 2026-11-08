import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/app/case-studies/data";
import { SystemArchitecture, SystemDemonstration } from "@/components/system-diagrams";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className={`case-study ${study.accent}`}>
      <header className="case-nav">
        <Link className="wordmark radiant-mark" href="/">RADIANT<span>.</span></Link>
        <Link className="back-link" href="/#work"><ArrowLeft size={16} /> All work</Link>
        <span>{study.category}</span>
      </header>

      <section className="case-hero">
        <div className="case-kicker">
          <span>{study.index} / CASE STUDY</span>
          <span>{study.stage}</span>
        </div>
        <h1>{study.headline}</h1>
        <div className="case-hero-bottom">
          <div>
            <p className="case-label">PROJECT</p>
            <strong>{study.title}</strong>
          </div>
          <div>
            <p className="case-label">ROLE</p>
            <strong>{study.role}</strong>
          </div>
          <p className="case-summary">{study.summary}</p>
        </div>
      </section>

      <section className="case-metrics" aria-label="Project evidence">
        {study.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            {metric.note && <small>{metric.note}</small>}
          </article>
        ))}
      </section>

      <section className="case-architecture">
        <div className="case-section-title">
          <p className="eyebrow">SYSTEM ARCHITECTURE</p>
          <h2>{study.slug === "baobab-turn" ? "Prediction becomes a decision." : study.slug === "pitupi" ? "Language becomes controlled execution." : "Intent becomes an authorized action."}</h2>
        </div>
        <SystemArchitecture slug={study.slug} />
      </section>

      <SystemDemonstration slug={study.slug} />

      {study.sections.map((section, sectionIndex) => (
        <section className="case-detail" key={section.eyebrow}>
          <div className="case-detail-heading">
            <p className="eyebrow">{String(sectionIndex + 1).padStart(2, "0")} / {section.eyebrow}</p>
            <h2>{section.title}</h2>
            {section.intro && <p>{section.intro}</p>}
          </div>
          <div className="case-detail-grid">
            {section.items.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Check size={20} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.meta && <code>{item.meta}</code>}
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="case-stack">
        <p className="eyebrow">TECHNOLOGY</p>
        <div>{study.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="case-closing">
        <p>{study.closing}</p>
        <div>
          {study.links.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label} <ArrowUpRight size={18} />
            </a>
          ))}
          <Link href="/#contact">Start a conversation <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
