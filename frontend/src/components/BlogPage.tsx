export const BlogPage = () => {
  const blogPosts = [
    {
      title: "How to Pass ATS",
      description: "Learn how automated filters work and how to beat them.",
      link: "https://zety.com/blog/ats-resume",
    },
    {
      title: "Top Resume Mistakes",
      description:
        "Avoid these common errors that cost job seekers interviews.",
      link: "https://www.upskillist.com/blog/ats-parsing-common-resume-mistakes-to-avoid/",
    },
    {
      title: "AI Resume Tips",
      description: "Leverage AI to write and polish your resume in seconds.",
      link: "https://wellfound.com/blog/10-tips-to-optimize-your-resume-for-ats-and-ai-screening#:~:text=1.,being%20missed%20by%20a%20recruiter.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 flex flex-col pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Resume Tips
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8 md:mb-12">
          Expert advice to help you create an ATS-friendly resume that stands
          out
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-5 sm:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {post.description}
              </p>
              <div className="flex items-center text-indigo-600">
                <span className="text-sm sm:text-base font-medium">
                  Read more
                </span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
