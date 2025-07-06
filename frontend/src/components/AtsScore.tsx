import React from "react";

interface AtsScoreProps {
  score: number;
}

const AtsScore: React.FC<AtsScoreProps> = ({ score }) => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold">
        Your Resume's ATS Score:{" "}
        <span className={score < 50 ? "text-red-600" : "text-green-600"}>
          {score}%
        </span>
      </h2>
      <p className="text-gray-600 mt-2">
        This is an estimated score. Improve it using our AI Resume Builder.
      </p>
    </div>
  );
};

export default AtsScore;
