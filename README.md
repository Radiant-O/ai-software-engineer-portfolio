# Radiant: AI & Software Engineer Portfolio

This is the public portfolio of Abiodun Bukoye, known professionally as Radiant. It is built to show how I think about AI systems, backend architecture, product engineering, reliability, and the decisions behind production software.

The portfolio goes beyond screenshots. Each case study explains the problem, system boundaries, workflow, tradeoffs, evidence, and failure modes that shaped the implementation.

## Case studies

### Baobab Turn

An open-source guard layer for voice agents. It helps reduce false interruptions when a speaker's language, rhythm, pause pattern, or intonation differs from the assumptions of an end-of-turn detector.

The case study includes:

- The complete prediction-to-decision architecture
- An interactive decision trace with four transcript scenarios
- Probability adjustments and explicit decision reasons
- Language packs, framework adapters, evaluation, and safe fallback behavior
- Honest benchmark limits, including lexical coverage and missing live-audio evidence

### Pitupi

A sanitized engineering view of a conversational financial platform. The case study focuses on responsibility boundaries instead of exposing confidential company implementation details.

It covers:

- How a customer request moves from conversation to a validated application command
- The separation between AI interpretation and financial authority
- Policy checks, idempotency, journal integrity, workers, storage, and provider adapters
- Human support and operational boundaries

Provider configuration, private endpoints, secrets, internal topology, and operational procedures are intentionally excluded.

### WorkScale

An AI-enabled collaboration product that turns natural-language requests into permission-checked workspace actions.

The case study covers:

- Context retrieval and model routing
- Structured tool calls and application-owned authorization
- Human confirmation, action receipts, replay protection, and recovery
- A reliability investigation where a 30-second proxy cutoff interrupted a longer planning request
- Regression evidence from a real-network delayed upstream and 518 existing web tests

My role on WorkScale is listed as Product Engineer. The product is still in progress and will be deployed soon.

## Engineering approach

I use AI-assisted development to move faster, but the agents do not own the engineering decision. The workflow shown in the portfolio is:

1. Frame the problem and acceptance criteria.
2. Isolate the change in a bounded work item or branch.
3. Use coding agents where they provide useful leverage.
4. Verify the result with types, tests, browser checks, and regression coverage.
5. Review the architecture, failure modes, security boundaries, and actual diff before release.

## Technology

The public portfolio uses a deliberately small stack:

- Next.js 16
- React 19
- TypeScript
- Lucide icons
- Plain responsive CSS
- Static HTML export for simple hosting

The experience and case studies also discuss tools used across my engineering work, including Python, Node.js, PostgreSQL, Redis, LiveKit Agents, VAPI, Retell AI, RAG, embeddings, MCP, n8n, Docker, Linux, Nginx, pytest, Jest, Cypress, Vitest, GitHub Actions, Codex, Claude Code, and Aider.

## Run locally

Requirements:

- Node.js 20.9 or newer
- npm

Install and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The project is configured as a static export. The generated website is written to `out/` and can be uploaded to any static host.

## Repository structure

```text
app/
  case-studies/              Individual case-study routes and content
  globals.css                Site-wide layout, diagrams, and responsive styles
  layout.tsx                 Metadata and root layout
  page.tsx                   Portfolio homepage
components/
  case-study-page.tsx        Shared case-study presentation
  system-diagrams.tsx        Architecture and workflow diagrams
public/
  favicon.svg
```

This repository is a clean public release. It does not contain `.openai`, hosting credentials, generated builds, local exports, internal connector scaffolding, environment files, or secrets.

## Contact

- Email: [bukoyeabiodunisrael@gmail.com](mailto:bukoyeabiodunisrael@gmail.com)
- CV: [View the current CV](https://docs.google.com/document/d/1LDWV1vfstWrGs_t2m7-qW-b9hEDelzpZ5VYtjxWO1YI/edit?usp=sharing)

