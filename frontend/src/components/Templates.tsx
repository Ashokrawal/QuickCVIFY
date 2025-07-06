import React from "react";

const Templates = () => {
  return (
    <div className="min-h-screen pt-30 bg-white flex flex-col justify-center text-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
          Choose a Template
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Browse modern, professional, and creative templates — all ATS-friendly
          and fully customizable.
        </p>
      </section>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          "/resume-template-3.png",
          "/resume-template-2.png",
          "/resume-template-1.png",
        ].map((src, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Resume Template ${i + 1}`}
              className="w-full sm:h-90 h-100 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Template #{i + 1}</h3>
              <p className="text-sm text-gray-500">
                Clean, professional layout
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
