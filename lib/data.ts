import rawData from "../research/dataset.json";
import type { Dataset, Case, Source, Finding } from "./types";

export const dataset = rawData as unknown as Dataset;

export function getCases(): Case[] {
  return dataset.cases;
}

export function getCaseById(id: string): Case | undefined {
  return dataset.cases.find((c) => c.id === id);
}

export function getSources(ids?: string[]): Source[] {
  if (!ids) return dataset.sources;
  return dataset.sources.filter((s) => ids.includes(s.id));
}

export function getSourceById(id: string): Source | undefined {
  return dataset.sources.find((s) => s.id === id);
}

export function getFinding(): Finding {
  return dataset.finding;
}

export function getAggregateStats() {
  return {
    verifiedCases: dataset.cases.length,
    trackedSources: dataset.sources.length,
  };
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}
