export interface Meta {
  description: string;
  last_updated: string;
  methodology: string;
}

export interface Source {
  id: string;
  url: string;
  type: string;
  source_role: "video" | "distribution" | "case_context" | "supporting_context";
  verifies: string;
}

export interface Case {
  id: string;
  company: string;
  product: string;
  claim: string;
  problem: string;
  creative_decision: string;
  proof: string;
  omitted: string;
  observation: string;
  interpretation: string;
  interesting: string;
  source_ids: string[];
  image: string;
}

export interface Finding {
  question: string;
  what_changes: string;
  what_stays: string;
  led_to_ask: string;
  finding: string;
  why_i_think_this: {
    case_id: string;
    evidence: string;
  }[];
  still_unknown: string;
}

export interface Dataset {
  meta: Meta;
  sources: Source[];
  cases: Case[];
  finding: Finding;
}
