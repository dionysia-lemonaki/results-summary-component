import type { Result } from "./types";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

export const results: Result[] = [
  {
    id: 1,
    icon: iconReaction,
    category: "Reaction",
    score: 80,
  },
  {
    id: 2,
    icon: iconMemory,
    category: "Memory",
    score: 92,
  },
  {
    id: 3,
    icon: iconVerbal,
    category: "Verbal",
    score: 61,
  },
  {
    id: 4,
    icon: iconVisual,
    category: "Visual",
    score: 72,
  },
];
