export const TemplatesPage = () => (
  <div className="min-h-screen bg-white flex flex-col justify-center text-center pt-20 py-20 px-6">
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
