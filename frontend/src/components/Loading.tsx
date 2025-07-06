import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import SuccessTick from "./SuccessTick";

const Loading = () => {
  const [visibleLines, setVisibleLines] = useState([false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleLines([true, false]), 1500), // Line 1 after 1.5s
      setTimeout(() => setVisibleLines([true, true]), 3000), // Line 2 after 3s
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const lines = ["Reviewing your resume...", "Finding some good stuff..."];

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      {/* 1. Loader shown immediately and spins for total 4s */}
      <BounceLoader size={60} color="#4F46E5" loading={true} className="mb-8" />

      {/* 2. SuccessTick lines appear staggered, all done before 4s */}
      <div className="flex flex-col items-center justify-center space-y-3 text-lg">
        {lines.map((text, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-black italic transition-opacity duration-500 ${
              visibleLines[i] ? "opacity-100" : "opacity-0"
            }`}
          >
            <SuccessTick delay={i * 800} />
            <p className="text-sm md:text-base lg:text-lg">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
