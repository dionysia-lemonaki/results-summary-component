interface FinalScoreCardProps {
  finalScore: number;
}

const FinalScoreCard = ({ finalScore }: FinalScoreCardProps) => {
  return (
    <div className="bg-linear-to-b from-violet-400 to-blue-500 py-8 px-14 flex flex-col gap-6 text-center rounded-br-4xl rounded-bl-4xl">
      <h1 className="text-lg font-bold text-navy-200">Your Result</h1>
      <p className="w-35 h-35 mx-auto flex flex-col justify-center rounded-full bg-linear-to-b from-violet-600 to-blue-700/10">
        <span className="text-white text-[3.5rem] font-extrabold leading-none">
          {finalScore}
        </span>
        <span className="text-navy-200 font-bold">of 100</span>
      </p>
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-2xl font-bold">Great</h2>
        <p className="text-navy-200 font-medium">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default FinalScoreCard;
