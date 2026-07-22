export type Category = "Reaction" | "Memory" | "Verbal" | "Visual";

export interface Result {
  id: number;
  icon: string;
  category: Category;
  score: number;
}
