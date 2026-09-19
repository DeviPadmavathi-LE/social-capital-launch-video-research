# The Distribution Playbook

**9 public launches. One question: is there a pattern?**

An evidence-based research instrument investigating Social Capital Inc.'s launch methodology through their publicly available portfolio.

→ **Live at:** `http://localhost:3000` after setup

---

## The Problem I Chose to Investigate

Social Capital Inc. claims to "guarantee viral launches." Their public portfolio covers 9 companies across 13 months. I wanted to know: is there a repeatable narrative structure in their highest-engagement work — and if so, what does the data actually show?

The answer is not predetermined. The tool investigates a hypothesis and surfaces evidence, not conclusions.

## Why This Question

The post states Social Capital builds "distribution infrastructure for generational companies." Looking at *how* they distribute — not just *that* they distribute — is more interesting than scraping follower counts. The structure of the opening sentence in a launch post is a research-accessible proxy for the underlying strategy.

---

## Research Methodology

### Data Sources (All Primary)
1. **sociallcapital.com/work** — Official portfolio page listing all 9 public clients with case study links
2. **Individual case study pages** — Each links to the specific anchor post (X or LinkedIn)
3. **Primary source posts** — Each post independently verified via the linked URL
4. **Secondary coverage** — Press, tech influencer posts, and platform-specific reactions verified where findable

### What I Collected
For each of 9 launches:
- Client name, date, category
- Platform (X, LinkedIn, or both)
- Anchor author (person, not company)
- Hook headline (first sentence)
- Engagement: likes, replies (single snapshot, Sep 2026)
- Narrative tension structure (expectation → contradiction → proof → outcome)
- Secondary distribution evidence (or "not publicly verified" where absent)
- Source confidence level

### What I Didn't Collect
- Impression counts (not publicly available)
- Story / reel views
- Comprehensive creator network data (not verifiable without platform API)
- Longitudinal engagement trends

### Taxonomy
Three hook archetypes emerged from reading all 9 posts:
- **Contradiction Hook** — sets expectation, immediately breaks it
- **Category Creation Hook** — declares a first-of-kind
- **Scale/Social Proof Hook** — leads with numbers as evidence

Each archetype has exactly 3 launches — a clean split that was not designed in advance.

---

## Architecture

```
distribution-playbook/
├── app/
│   ├── page.tsx              # Landing / Signal (hypothesis + overview)
│   ├── launches/
│   │   ├── page.tsx          # Archive (timeline of all 9)
│   │   └── [id]/page.tsx     # Deconstruction view (5-layer breakdown)
│   ├── patterns/page.tsx     # Pattern analysis (charts + observations)
│   ├── ask/page.tsx          # Ask the Data (constrained AI panel)
│   ├── meta/page.tsx         # Meta case (SC's own hiring post)
│   └── api/ask/route.ts      # OpenAI API route
├── components/
│   └── Nav.tsx
├── lib/
│   ├── types.ts              # TypeScript schema
│   └── data.ts               # Data access + analytics helpers
├── data/
│   └── launches.json         # Full verified dataset
└── research/
    └── sources.md            # All sources, assumptions, confidence levels
```

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Recharts · OpenAI API

---

## How AI Is Used

The "Ask the Data" panel (`/ask`) uses OpenAI's GPT-4o-mini with a system prompt that:
1. Constrains the model to the structured 9-launch JSON dataset
2. Requires every claim to cite a specific launch by name
3. Requires confidence caveats (n=9, snapshot data, etc.)
4. Prohibits speculation beyond what the data contains

This is not retrieval-augmented generation — it's a constrained reasoning interface over a small, structured dataset. The distinction matters.

---

## Key Finding

**Across this sample, the Contradiction Hook archetype showed the highest average engagement.**

The three Contradiction Hook posts (Airwallex, Deel, Wispr Flow) averaged significantly higher likes than Category Creation or Scale/Proof posts. Airwallex — "Stripe offered to acquire us for $1.2B when we had $2M in revenue" — is the dataset's outlier at 29.7K likes, 3.5x the dataset average.

A structural pattern appears in 7 of 9 launches: **Expectation → Contradiction → Proof → Outcome**. This is consistent with the hypothesis that Social Capital uses tension as a primary distribution mechanism.

**Important caveats:**
- n=9 total, n=3 per archetype — no statistical significance claim
- Engagement is a single-point snapshot
- Confounders (company profile, timing, backer prestige) are not controlled
- Correlation does not imply causation

---

## What I Would Build Next

1. **Longitudinal tracking** — Revisit the same posts monthly to understand engagement curve shape
2. **Creator network mapping** — If Twitter API access were available, map secondary amplification systematically
3. **Control group** — Analyze non-Social Capital launches of similar companies over the same period
4. **Hook sentence NLP** — Semantic similarity clustering across the hook headlines to identify sub-patterns

---

## Setup

```bash
# Install dependencies
npm install

# Add your OpenAI API key (optional — only needed for Ask the Data)
cp .env.local.example .env.local
# Edit .env.local and add your key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Limitations

- All data is publicly available — no proprietary or non-public sources used
- Social Capital's internal methodology is not known; this is an external analysis
- The portfolio page lists only clients SC chose to publicize — selection bias exists
- Engagement figures reflect a single moment in time

---

*Built as a research instrument, not a dashboard. The analysis is the product.*
