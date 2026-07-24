interface FinalScoreCardProps {
  finalScore: number;
}

const FinalScoreCard = ({ finalScore }: FinalScoreCardProps) => {
  return (
    <div>
      <h1>Your Result</h1>
      <p>
        <span>{finalScore}</span> <span>of 100</span>
      </p>
      <div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default FinalScoreCard;
