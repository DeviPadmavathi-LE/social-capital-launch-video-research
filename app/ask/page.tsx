"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUGGESTED_QUESTIONS = [
  "What do all 9 anchor posts have in common?",
  "Which hook archetype shows the highest engagement in this sample?",
  "What's unusual about the highest-performing post?",
  "Do the posts that use a personal narrative outperform others?",
  "What role does the backer list play across launches?",
  "Which launches used both X and LinkedIn?",
];

interface AskResult {
  question: string;
  answer: string;
}

export default function AskPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AskResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<AskResult[]>([]);

  async function handleAsk(q?: string) {
    const finalQ = (q ?? question).trim();
    if (!finalQ) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: finalQ }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === "NO_API_KEY") {
          setError("NO_API_KEY");
        } else {
          setError(data.message ?? "Something went wrong.");
        }
        return;
      }

      const r = { question: finalQ, answer: data.answer };
      setResult(r);
      setHistory((prev) => [r, ...prev].slice(0, 5));
      setQuestion("");
    } catch (e) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-24 pb-32 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 mb-12"
      >
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
          Constrained to the 9-launch dataset
        </p>
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "var(--font-serif)", color: "var(--cream)", fontWeight: 300 }}
        >
          Ask the Data
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          A research assistant that answers only from the structured dataset. 
          Every response cites specific launches and includes confidence caveats.
          It will not speculate beyond what the data shows.
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div
          className="p-1"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleAsk();
            }}
            placeholder="What patterns do you see across Social Capital launches?"
            className="w-full p-4 text-sm leading-relaxed resize-none outline-none"
            rows={3}
            style={{
              background: "transparent",
              color: "var(--cream)",
              fontFamily: "var(--font-sans)",
            }}
          />
          <div className="flex items-center justify-between px-4 pb-3">
            <span className="text-xs" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
              ⌘↵ to send
            </span>
            <button
              onClick={() => handleAsk()}
              disabled={loading || !question.trim()}
              className="px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200 disabled:opacity-30"
              style={{
                background: loading ? "var(--surface-2)" : "var(--amber)",
                color: loading ? "var(--muted)" : "var(--bg)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {loading ? "Investigating..." : "Investigate →"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Suggested questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
          Suggested questions
        </p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => {
                setQuestion(q);
                handleAsk(q);
              }}
              className="text-xs px-3 py-1.5 transition-all duration-200 text-left"
              style={{
                background: "var(--surface-2)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--amber)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--amber-dim)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Error: No API key */}
      <AnimatePresence>
        {error === "NO_API_KEY" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-6"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)" }}>
              API key required
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
              Add your OpenAI API key to enable live responses:
            </p>
            <code
              className="block text-xs p-4 leading-relaxed"
              style={{
                background: "var(--surface-2)",
                color: "var(--cream)",
                fontFamily: "var(--font-mono)",
              }}
            >
              # .env.local{"\n"}OPENAI_API_KEY=sk-...
            </code>
            <p className="text-xs mt-4" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
              The dataset and all analysis are available without an API key — only the live Q&A requires one.
            </p>
          </motion.div>
        )}

        {error && error !== "NO_API_KEY" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
              Error: {error}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8"
          >
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="p-4" style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                <p className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                  Q: {result.question}
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "var(--cream)" }}>
                  {result.answer}
                </p>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p className="text-xs" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
                    Source: 9-launch dataset · sociallcapital.com/work · Sep 2026 snapshot
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History */}
      {history.length > 1 && (
        <div>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
            Previous questions
          </p>
          <div className="space-y-2">
            {history.slice(1).map((h, i) => (
              <div key={i} className="p-4" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                <p className="text-xs mb-2" style={{ color: "var(--amber)", fontFamily: "var(--font-mono)" }}>
                  Q: {h.question}
                </p>
                <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--muted)" }}>
                  {h.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dataset reference note */}
      <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-xs leading-relaxed" style={{ color: "var(--dim)", fontFamily: "var(--font-mono)" }}>
          The assistant is constrained to the 9-launch dataset via system prompt. It cannot access the internet, 
          invent data, or speculate beyond what is recorded. All engagement figures are Sep 2026 snapshots.
        </p>
      </div>
    </div>
  );
}
