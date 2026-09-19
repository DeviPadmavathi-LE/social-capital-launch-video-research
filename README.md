# The Distribution Playbook

### 9 public launches. One question: is there a pattern?

**Live project:**  
https://social-capital-launch-video-researc.vercel.app/

An interactive investigation into how **Social Capital Inc.** approaches product launches through publicly available evidence.

I wasn't trying to reverse-engineer an internal playbook or prove a conclusion I had already decided on.

I had a question:

> **When Social Capital launches a company, what makes the launch feel impossible to ignore?**

So I went down the rabbit hole.

---

## What I Built

The Distribution Playbook is an interactive research tool that deconstructs **9 publicly documented Social Capital launches** across their portfolio.

Instead of looking only at likes or follower counts, I looked at the structure of the launch itself:

- What is the opening hook?
- Who delivers the story?
- What tension is created?
- What gets removed from the conventional product story?
- What remains?
- Does the same structure appear across multiple launches?
- Is there enough public evidence to support a repeatable pattern?

The goal was simple:

> **Turn scattered public evidence into something you can actually investigate.**

---

# The Question I Started With

Social Capital describes its work around building distribution infrastructure for generational companies.

That made me curious about the *distribution itself*.

If the product is different, does the way it is introduced also follow a recognizable structure?

I started with a hypothesis rather than a conclusion:

> **Could the structure of the opening hook act as a research-accessible signal for how these launches create attention?**

The tool is designed to let the evidence answer that question.

---

# The Investigation

### 9 launches  
### 13 months  
### 3 hook archetypes

For every launch, I collected and analyzed:

- Client
- Launch date
- Product/category
- Distribution platform
- Anchor author
- Opening hook
- Public engagement snapshot
- Narrative structure
- Secondary distribution evidence
- Source confidence

I deliberately separated **what is publicly observable** from what I would merely be guessing.

---

# The Three Hook Archetypes

After going through the 9 launches, three recurring structures emerged.

## 01 — Contradiction Hook

Creates an expectation and immediately breaks it.

**Expectation → Contradiction → Proof**

---

## 02 — Category Creation Hook

Frames the product as something genuinely new or first-of-its-kind.

**Existing category → New possibility → Proof**

---

## 03 — Scale / Social Proof Hook

Leads with numbers, traction, customers, or another concrete signal.

**Large claim → Evidence → Product**

Each archetype appears across three launches.

That split was **not designed in advance**.

---

# What the Data Shows

Across this sample, the **Contradiction Hook** group had the highest average engagement.

The three launches classified under this structure — **Airwallex, Deel, and Wispr Flow** — showed higher average likes than the other two groups in the dataset.

Airwallex was the largest outlier:

> "Stripe offered to acquire us for $1.2B when we had $2M in revenue"

The post reached approximately **29.7K likes** in the snapshot I collected.

There is also a recurring narrative structure across **7 of the 9 launches**:

**Expectation → Contradiction → Proof → Outcome**

That's interesting.

But I don't want to turn an observation into a claim about causality.

### The caveats matter.

- **n = 9**
- Only **3 launches per archetype**
- Engagement is a single-point snapshot
- Company size and existing audience aren't controlled
- Timing isn't controlled
- Backer/investor prestige isn't controlled
- Portfolio selection itself may introduce bias
- Correlation does not establish causation

So the output isn't:

> "This is Social Capital's secret formula."

It's:

> **"Here's a pattern visible in the public evidence — investigate it yourself."**

---

# The Case Files

The archive lets you open each launch individually and examine the evidence behind the classification.

Each case is broken down into layers rather than presented as a simple summary.

The intention is to make the reasoning **inspectable**.

If I call something a Contradiction Hook, you should be able to open the case and see why.

---

# Ask the Data

I also built an **Ask the Data** interface.

It allows questions to be asked against the structured 9-launch dataset.

For example:

- Which hook structure appears most often?
- Which launches used contradiction?
- What patterns appear across the highest-engagement posts?
- Which launches have secondary distribution evidence?
- What evidence supports the expectation → contradiction → proof structure?

The AI is intentionally constrained.

The system prompt:

1. Restricts the model to the structured dataset
2. Requires claims to reference a specific launch
3. Requires confidence caveats
4. Prevents the model from inventing information outside the dataset

This is **not RAG**.

It's a small, structured dataset being used as a constrained reasoning surface.

That distinction was intentional.

---

# How I Researched It

I followed the public evidence backwards.

## Primary Sources

1. Social Capital's public portfolio
2. Individual case-study pages
3. The launch posts linked from those pages
4. The original X / LinkedIn posts where accessible

## Secondary Evidence

Where available, I also checked:

- Press coverage
- Creator/influencer reactions
- Platform-specific reactions
- Other public references to the launch

When I couldn't independently verify something, I marked it as:

**Not publicly verified**

rather than filling the gap.

---

# What I Didn't Try to Pretend I Could Measure

There are things the public internet simply doesn't expose reliably.

I did **not** attempt to manufacture precision around:

- Impressions
- Story/reel views
- Complete creator networks
- Private distribution channels
- Internal campaign data
- Internal Social Capital methodology

The investigation is deliberately limited to what can be supported by public evidence.

---

# Architecture

```
distribution-playbook/
├── app/
│   ├── page.tsx              # Landing / Signal
│   ├── launches/
│   │   ├── page.tsx          # Launch archive
│   │   └── [id]/page.tsx     # Launch deconstruction
│   ├── patterns/page.tsx     # Pattern analysis
│   ├── ask/page.tsx          # Ask the Data
│   ├── meta/page.tsx         # Meta case
│   └── api/ask/route.ts      # AI API route
│
├── components/
│   └── Nav.tsx
│
├── lib/
│   ├── types.ts
│   └── data.ts
│
├── data/
│   └── launches.json         # Structured dataset
│
└── research/
    └── sources.md            # Sources + assumptions
