import React, { useState, useRef } from "react";
import Loader from "./Loader";
import Loading from "./Loading";

type AtsScoreProps = {
  score: number;
};

const AtsScore: React.FC<AtsScoreProps> = ({ score }) => {
  return (
    <div className="mt-6 text-center text-base sm:text-xl font-semibold text-green-700">
      ATS Score: <span className="text-xl sm:text-3xl">{score}%</span>
    </div>
  );
};

const ResumeBuilder: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [newAtsScore, setNewAtsScore] = useState<number | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit");
        event.target.value = "";
        return;
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, DOCX, or TXT file");
        event.target.value = "";
        return;
      }

      setSelectedFile(file);
      setUploadSuccess(false);
      setNewAtsScore(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    setIsUploading(true);
    setIsUploaded(true); // show loader

    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);

      const response = await fetch(
        "http://localhost:4000/api/upload/ats-ready-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const result = await response.json();
      await new Promise((res) => setTimeout(res, 4600)); // simulate processing

      setUploadSuccess(true);
      setNewAtsScore(result.newAtsScore);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      setIsUploaded(false); // hide loader after response
    }
  };

  if (isUploaded) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col">
      <main
        id="upload"
        className="flex-grow container mx-auto px-4 sm:px-6 pt-10 sm:pt-26 max-w-2xl"
      >
        <div className="rounded-lg mt-22 shadow-lg p-6 sm:p-8 bg-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Upload Your Resume
          </h3>

          <div
            className={`border-2 border-dashed p-6 sm:p-8 rounded-lg text-center cursor-pointer hover:border-indigo-500 transition ${
              selectedFile ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <svg
              className={`mx-auto mb-4 h-10 w-10 sm:h-12 sm:w-12 ${
                selectedFile ? "text-green-500" : "text-indigo-500"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.9 5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 break-all">
              {uploadSuccess
                ? "Resume Processed!"
                : selectedFile
                ? selectedFile.name
                : "Click or Drop Your Resume Here"}
            </h4>
            <p className="text-gray-500 mb-4 text-sm sm:text-base">
              {selectedFile
                ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`
                : "Accepted formats: PDF, DOC, DOCX, TXT (max 5MB)"}
            </p>

            {!uploadSuccess ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <button
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  {selectedFile ? "Change File" : "Browse Files"}
                </button>

                {selectedFile && (
                  <button
                    className={`w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded ${
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
                          className="animate-spin mr-2 h-4 w-4 text-white"
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
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Upload"
                    )}
                  </button>
                )}
              </div>
            ) : (
              <>
                <button
                  className="w-full sm:w-auto mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                    setUploadSuccess(false);
                    setNewAtsScore(null);
                  }}
                >
                  Upload Another Resume
                </button>

                {newAtsScore !== null && <AtsScore score={newAtsScore} />}
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 text-center py-3 mt-6 text-sm sm:text-base px-4">
        <p>
          &copy; {new Date().getFullYear()} QuickCVIFY. All rights reserved.
        </p>
        <p className="mt-1">Contact: support@quickcvify.com | +1 234 567 890</p>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
