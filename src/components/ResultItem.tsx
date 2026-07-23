import type { Result } from "../types";

type ResultItemProps = Omit<Result, "id">;

const ResultItem = ({ icon, category, score }: ResultItemProps) => {
  return (
    <li>
      <div>
        <img src={icon} alt="" />
        <p>{category}</p>
      </div>
      <p>
        <span>{score}</span>
        <span> / 100</span>
      </p>
    </li>
  );
};

export default ResultItem;
