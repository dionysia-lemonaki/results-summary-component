import type { Result } from "../types";
import ResultItem from "./ResultItem";
import Button from "./Button";

interface ResultsCardProps {
  results: Result[];
}

const ResultsCard = ({ results }: ResultsCardProps) => {
  return (
    <div>
      <h2>Summary</h2>
      <ul>
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
