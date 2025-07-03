import React, { useState, useRef } from "react";

const Payment: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadSectionRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit");
        return;
      }
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, DOCX, or TXT file");
        return;
      }
      setSelectedFile(file);
      setUploadSuccess(false);
    }
  };

  const scrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Upload failed");
      await response.json();
      setUploadSuccess(true);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center sm:pt-32 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Perfect Resume in Minutes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            AI-powered resume builder with 150+ templates designed to get you
            more interviews
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button
              onClick={scrollToUpload}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 duration-200"
            >
              Try Our Builder
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl font-bold">7,690+</p>
              <p>Resumes Today</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2×</p>
              <p>More Interviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold">70%</p>
              <p>More Views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 250,000+ Professionals Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI analyzes your resume like a hiring manager would
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🔍",
                title: "ATS Optimization",
                description:
                  "Get past automated screening systems used by 99% of Fortune 500 companies",
              },
              {
                icon: "✨",
                title: "Content Enhancement",
                description:
                  "Transform bullet points into powerful, achievement-oriented statements",
              },
              {
                icon: "📊",
                title: "Industry Tailoring",
                description:
                  "Customized for your specific job target and industry standards",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl hover:bg-gray-50 transition-all transform hover:scale-105 duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <header className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get <span className="text-yellow-300">5× More Interviews</span>
            <br />
            With an Optimized Resume
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            AI-powered resume analysis and optimization in 30 seconds
          </p>
          <button
            onClick={scrollToUpload}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Upload Your Resume Now
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-top-left"></div>
      </header>

      {/* File Upload Section */}
      <div
        ref={uploadSectionRef}
        className="container mx-auto px-6 py-12 -mt-8"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="bg-white p-8">
              <div
                className={`border-2 border-dashed ${
                  selectedFile ? "border-green-400" : "border-gray-300"
                } rounded-lg p-8 text-center cursor-pointer hover:border-indigo-400 transition-all`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                />
                <svg
                  className={`w-12 h-12 mx-auto ${
                    selectedFile ? "text-green-500" : "text-indigo-500"
                  } mb-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {uploadSuccess
                    ? "Resume Processed Successfully!"
                    : selectedFile
                    ? selectedFile.name
                    : "Upload Your Resume"}
                </h3>
                <p className="text-gray-500 mb-4">
                  {uploadSuccess
                    ? "Your optimized resume is ready!"
                    : selectedFile
                    ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
                    : "PDF, DOCX, or TXT (max 5MB)"}
                </p>
                {!uploadSuccess ? (
                  <>
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                    >
                      {selectedFile ? "Change File" : "Browse Files"}
                    </button>
                    {selectedFile && (
                      <div className="mt-4">
                        <button
                          className={`bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors ${
                            isUploading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubmit();
                          }}
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            "Process My Resume"
                          )}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFile(null);
                      setUploadSuccess(false);
                    }}
                  >
                    Upload Another Resume
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear from professionals who landed their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "I went from 0 interviews to 5 callbacks in two weeks after using this service!",
                name: "Sarah K.",
                role: "Marketing Manager at Google",
              },
              {
                quote:
                  "The optimization suggestions helped me highlight achievements I didn't even realize were valuable.",
                name: "Michael T.",
                role: "Senior Software Engineer",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-slate-600"
              >
                <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                <div className="text-left">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="opacity-80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Resume?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who found their dream jobs
          </p>
          <button
            onClick={scrollToUpload}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Get Started - It's Free
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">QuickCVIFY</h3>
              <p>AI-powered resume builder to help you land your dream job.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Resume Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career Advice
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} QuickCVIFY Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
