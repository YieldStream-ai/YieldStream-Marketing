import {
  Link2,
  BrainCircuit,
  GitCompareArrows,
  Send,
  BarChart3,
} from "lucide-react";

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" as const },
  },
};

export const compareCard = {
  hidden: { x: 56, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.48,
      ease: [0.25, 0.1, 0.25, 1] as const,
      staggerChildren: 0.09,
      delayChildren: 0.44,
    },
  },
};

export const STEPS = [
  {
    id: "generate-link",
    num: "01",
    icon: Link2,
    tab: "Generate Portal",
    title: "Generate Secure Portal",
    desc: "Create a unique, encrypted upload link for your merchant. Documents stay secure and organized from the start.",
    cta: { text: "Try it free", href: "/pricing" },
  },
  {
    id: "ai-parse",
    num: "02",
    icon: BrainCircuit,
    tab: "Automated Underwriting",
    title: "Parse & AI Underwrite",
    desc: "Bank statements are automatically extracted and analyzed. 20+ risk signals scored — revenue trends, NSFs, stacking, DSCR — in under 120 seconds.",
    cta: { text: "See underwriting", href: "/underwriting" },
  },
  {
    id: "lender-match",
    num: "03",
    icon: GitCompareArrows,
    tab: "Lender Routing",
    title: "Lender Routing",
    desc: "Our three-layer scoring engine matches the deal to the best-fit lenders based on global data, your relationships, and buybox criteria.",
    cta: { text: "Learn about matching", href: "/lender-marketplace" },
  },
  {
    id: "submit",
    num: "04",
    icon: Send,
    tab: "Submission",
    title: "One-Click Submit",
    desc: "Submit a professionally packaged PDF to matched lenders with a single click. No manual formatting, no copy-paste.",
    cta: { text: "Get started", href: "/pricing" },
  },
  {
    id: "compare",
    num: "05",
    icon: BarChart3,
    tab: "Compare & Close",
    title: "Leverage & Close",
    desc: "Review competing offers side-by-side, track lender responses in real time, and close the deal — all from one dashboard.",
    cta: { text: "Book a demo", href: "/contact" },
  },
];
