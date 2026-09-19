"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MethodologyPage() {
  return (
    <div className="pt-24 pb-32 px-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 mb-16"
      >
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)" }}>
          The Engine
        </p>
        <h1
          className="text-4xl md:text-5xl mb-6 uppercase"
          style={{ fontFamily: "var(--font-serif)", color: "var(--cream)", fontWeight: 300, letterSpacing: "1px" }}
        >
          Research Methodology
        </h1>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          This project operates as a strict intelligence tool, not a generic dashboard. Every finding is derived through a first-principles, verifiable pipeline.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-16"
      >
        {/* SCOPE & CASES */}
        <section>
          <h2 className="text-sm uppercase tracking-widest mb-6 pb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--border)" }}>
            1. Scope & Case Definition
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              Based on Social Capital's public job descriptions outlining their operational involvement in "creating a viral launch video," the scope of this research is strictly confined to <strong>VIDEOS</strong>.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              A "Case" is defined as a verifiable public launch event tied to Social Capital. Cases are explicitly excluded from video analysis (e.g., Gamma) if the underlying media cannot be independently accessed and verified from the snapshot URL. 
            </p>
          </div>
        </section>

        {/* EVIDENCE & DUPLICATES */}
        <section>
          <h2 className="text-sm uppercase tracking-widest mb-6 pb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--border)" }}>
            2. Evidence & Source Roles
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              Data follows a strict <strong>Zero Duplication</strong> mandate. A public post is logged exactly once in the canonical dataset. 
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              To ensure auditable rigor, sources are strictly demarcated by role: <code>video</code>, <code>distribution</code>, or <code>case_context</code>. A distribution post (e.g., a LinkedIn caption) is never used as evidence to support a claim about what happens <em>inside</em> a video, even if the video is embedded within it. The media and its delivery shell are audited separately.
            </p>
          </div>
        </section>

        {/* OBSERVATION VS INTERPRETATION */}
        <section>
          <h2 className="text-sm uppercase tracking-widest mb-6 pb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--border)" }}>
            3. Observation vs. Interpretation
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              Case files are explicitly split. <strong>Observed</strong> facts document only literal, on-screen elements (e.g., "Screen-recorded UI dictation"). <strong>Interpretation</strong> is strictly cordoned into its own analytical layer (e.g., "Prioritizes interface demonstration over founder presence"). Interpretations are never presented as Social Capital's explicit intent.
            </p>
          </div>
        </section>

        {/* AI PIPELINE */}
        <section>
          <h2 className="text-sm uppercase tracking-widest mb-6 pb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--border)" }}>
            4. AI-Native Workflow Transparency
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              AI agents (LLMs) were utilized in the research pipeline for <strong>pattern clustering, schema normalization, and hypothesis generation</strong> across the raw dataset.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              However, AI-generated observations were not automatically accepted as facts. Every claim in the canonical dataset maintains a strict human verification standard. If an AI-suggested pattern lacked explicit, verifiable source URLs, it was rejected and marked as "Not Publicly Verified".
            </p>
          </div>
        </section>

        {/* DERIVATION */}
        <section>
          <h2 className="text-sm uppercase tracking-widest mb-6 pb-4" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)", borderBottom: "1px solid var(--border)" }}>
            5. Deriving Findings & Limitations
          </h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              The final "Non-Obvious Finding" was derived bottom-up: Case {'->'} Video {'->'} Observation {'->'} Cross-Case Comparison {'->'} Pattern {'->'} Finding. 
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
              To demonstrate first-principles thinking, every finding is accompanied by a mandatory <strong>Critique</strong> block ("Why might this be wrong?"), forcing the researcher to proactively identify counterexamples, alternative explanations, and limitations of the public data sample. Quality and defensibility are prioritized over dataset inflation.
            </p>
          </div>
        </section>

      </motion.div>

      <div className="mt-24 text-center pb-8">
        <Link
          href="/sources"
          className="inline-block px-6 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
          style={{ border: "1px solid var(--amber)", color: "var(--amber)", fontFamily: "var(--font-mono)" }}
        >
          View Full Source Manifest →
        </Link>
      </div>
    </div>
  );
}
