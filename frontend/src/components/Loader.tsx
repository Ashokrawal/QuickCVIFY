import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import SuccessTick from "./SuccessTick";

const Loader = () => {
  const [visibleLines, setVisibleLines] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleLines([true, false, false]), 800),
      setTimeout(() => setVisibleLines([true, true, false]), 1600),
      setTimeout(() => setVisibleLines([true, true, true]), 2400),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const lines = [
    "12+ Professional Resume Designs...",
    "200,000+ Pre-Written Phrases...",
    "30,000+ Job Titles, 9 Template Color Options...",
  ];

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <BounceLoader size={60} color="#4F46E5" loading={true} className="mb-8" />

      {/* This outer div centers the whole block */}
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

export default Loader;
