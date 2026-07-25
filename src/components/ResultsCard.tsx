import type { Result } from "../types";
import ResultItem from "./ResultItem";
import Button from "./Button";

interface ResultsCardProps {
  results: Result[];
}

const ResultsCard = ({ results }: ResultsCardProps) => {
  return (
    <div className="p-8 pt-6 flex flex-col gap-6">
      <h2 className="text-navy-950 text-lg font-bold">Summary</h2>
      <ul className="flex flex-col gap-4">
        {results.map((result) => (
          <ResultItem
            key={result.id}
            icon={result.icon}
            category={result.category}
            score={result.score}
          />
        ))}
      </ul>
      <Button>Continue</Button>
    </div>
  );
};

export default ResultsCard;
