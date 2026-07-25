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
    <main className="min-h-dvh md:flex md:justify-center md:items-center">
      <div className="bg-white max-w-184 grid md:grid-cols-2 md:rounded-4xl md:overflow-hidden">
        <FinalScoreCard finalScore={finalScore} />
        <ResultsCard results={results} />
      </div>
    </main>
  );
};

export default App;
