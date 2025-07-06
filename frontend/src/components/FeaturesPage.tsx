import React from "react";

export const FeaturesPage = () => {
  const features = [
    {
      title: "ATS Optimization",
      description:
        "Get past filters used by top companies with built-in AI feedback.",
      icon: "🔍",
    },
    {
      title: "Real-Time Scoring",
      description: "Live scoring as you type so you know what's working.",
      icon: "📊",
    },
    {
      title: "Template Customization",
      description:
        "Choose from 150+ templates tailored to your role and goals.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 flex flex-col pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Powerful Features
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8 md:mb-12">
          Our resume builder uses AI to maximize your chances of landing
          interviews by optimizing your content, format, and delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="block bg-white p-5 sm:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
