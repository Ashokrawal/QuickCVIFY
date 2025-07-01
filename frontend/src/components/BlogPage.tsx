export const BlogPage = () => (
  <div className="min-h-screen bg-white py-20 flex justify-center flex-col text-center px-6">
    <h1 className="text-5xl font-bold text-indigo-600 text-center mb-10">
      Career Advice & Resume Tips
    </h1>
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {["How to Pass ATS", "Top Resume Mistakes", "AI Resume Tips"].map(
        (title, i) => (
          <div
            key={i}
            className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">
              {title === "How to Pass ATS"
                ? "Learn how automated filters work and how to beat them."
                : title === "Top Resume Mistakes"
                ? "Avoid these common errors that cost job seekers interviews."
                : "Leverage AI to write and polish your resume in seconds."}
            </p>
            <a href="#" className="text-indigo-500 text-sm mt-2 inline-block">
              Read more →
            </a>
          </div>
        )
      )}
    </div>
  </div>
);
