interface FinalScoreCardProps {
  finalScore: number;
}

const FinalScoreCard = ({ finalScore }: FinalScoreCardProps) => {
  return (
    <div className="bg-linear-to-b from-violet-400 to-blue-500 py-8 px-14 flex flex-col gap-6 md:gap-8 text-center rounded-br-4xl rounded-bl-4xl md:rounded-tr-4xl">
      <h1 className="text-lg md:text-2xl font-bold text-navy-200">
        Your Result
      </h1>
      <p className="w-35 h-35 md:w-50 md:h-50 mx-auto flex flex-col justify-center rounded-full bg-linear-to-b from-violet-600 to-blue-700/10">
        <span className="text-white text-[3.5rem] md:text-7xl font-extrabold leading-none">
          {finalScore}
        </span>
        <span className="text-navy-200 font-bold md:text-lg">of 100</span>
      </p>
      <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-white text-2xl md:text-[2rem] font-bold">Great</h2>
        <p className="text-navy-200 md:text-lg font-medium">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default FinalScoreCard;
