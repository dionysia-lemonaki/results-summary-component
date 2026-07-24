import { results } from "./data";
import FinalScoreCard from "./components/FinalScoreCard";
import ResultsCard from "./components/ResultsCard";

const App = () => {
  const sumOfScores = results.reduce(
    (accumulator, currentValue) => accumulator + currentValue.score,
    0,
  );
  const finalScore = Math.floor(sumOfScores / results.length);
  return (
    <main>
      <div>
        <FinalScoreCard finalScore={finalScore} />
        <ResultsCard results={results} />
      </div>
    </main>
  );
};

export default App;
