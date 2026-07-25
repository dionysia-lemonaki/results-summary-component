import type { Result, Category } from "../types";

type ResultItemProps = Omit<Result, "id">;

interface Styles {
  bg: string;
  text: string;
}

const resultItemStyles: Record<Category, Styles> = {
  Reaction: {
    bg: "bg-red-50",
    text: "text-red-400",
  },
  Memory: {
    bg: "bg-yellow-50",
    text: "text-yellow-400",
  },
  Verbal: {
    bg: "bg-green-50",
    text: "text-green-500",
  },
  Visual: {
    bg: "bg-blue-50",
    text: "text-blue-800",
  },
};

const ResultItem = ({ icon, category, score }: ResultItemProps) => {
  return (
    <li
      className={`p-4 flex justify-between items-center rounded-xl ${resultItemStyles[category].bg}`}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt="" />
        <p className={`font-medium ${resultItemStyles[category].text}`}>
          {category}
        </p>
      </div>
      <p className="font-bold text-navy-950">
        <span>{score}</span>
        <span className="opacity-50"> / 100</span>
      </p>
    </li>
  );
};

export default ResultItem;
