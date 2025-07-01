export const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-white py-20 px-6 max-w-4xl mx-auto">
    <h1 className="text-5xl font-bold text-indigo-600 mb-6 text-center">
      Privacy Policy
    </h1>
    <p className="text-gray-700 mb-4">
      We value your privacy and are committed to protecting your personal data.
      This policy outlines how we collect, use, and safeguard your information.
    </p>
    <ul className="list-disc pl-6 text-gray-600 space-y-2">
      <li>We only store resume files temporarily for processing.</li>
      <li>We never share your data with third parties.</li>
      <li>All uploads are encrypted and deleted after generation.</li>
    </ul>
    <p className="text-gray-700 mt-6">
      For any concerns or questions, contact us at{" "}
      <span className="text-indigo-500">privacy@resumecraftpro.com</span>
    </p>
  </div>
);
