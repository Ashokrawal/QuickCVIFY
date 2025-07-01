import React from "react";

export const FeaturesPage = () => (
  <div className="min-h-screen bg-white py-20 flex justify-center flex-col text-center px-6">
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">
        Powerful Features
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our resume builder uses AI to maximize your chances of landing
        interviews by optimizing your content, format, and delivery.
      </p>
    </section>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {["ATS Optimization", "Real-Time Scoring", "Template Customization"].map(
        (title, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {title}
            </h3>
            <p className="text-gray-600">
              {title === "ATS Optimization"
                ? "Get past filters used by top companies with built-in AI feedback."
                : title === "Real-Time Scoring"
                ? "Live scoring as you type so you know what’s working."
                : "Choose from 150+ templates tailored to your role and goals."}
            </p>
          </div>
        )
      )}
    </div>
  </div>
);

export const TemplatesPage = () => (
  <div className="min-h-screen bg-white py-20 px-6">
    <section className="text-center mb-12">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">
        Choose a Template
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Browse modern, professional, and creative templates—all ATS-friendly and
        customizable.
      </p>
    </section>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-200"></div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Template #{i + 1}</h3>
            <p className="text-sm text-gray-500">Clean, professional layout</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
