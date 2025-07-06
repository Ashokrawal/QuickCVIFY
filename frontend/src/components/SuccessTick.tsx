// SuccessTick.tsx
import React from "react";
import "../App.css"; // Assuming your animations are here

interface SuccessTickProps {
  delay?: number; // in milliseconds
}

const SuccessTick: React.FC<SuccessTickProps> = ({ delay = 0 }) => {
  const delaySec = delay / 1000;

  return (
    <div
      className="icon--order-success"
      style={{ width: 20, height: 20 }} // Small tick
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 154 154"
      >
        <g fill="none" stroke="#22AE73" strokeWidth="2">
          <circle
            cx="77"
            cy="77"
            r="72"
            style={{
              strokeDasharray: "480px",
              strokeDashoffset: "960px",
              animation: `checkmark-circle 0.6s ease-in-out ${delaySec}s backwards`,
            }}
          />
          <circle
            id="colored"
            fill="#22AE73"
            cx="77"
            cy="77"
            r="72"
            style={{
              strokeDasharray: "480px",
              strokeDashoffset: "960px",
              animation: `colored-circle 0.6s ease-in-out ${
                delaySec + 0.6
              }s backwards`,
            }}
          />
          <polyline
            stroke="#fff"
            strokeWidth="10"
            points="43.5,77.8 63.7,97.9 112.2,49.4"
            style={{
              strokeDasharray: "100px",
              strokeDashoffset: "200px",
              animation: `checkmark 0.4s ease-in-out ${
                delaySec + 1.2
              }s backwards`,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default SuccessTick;
