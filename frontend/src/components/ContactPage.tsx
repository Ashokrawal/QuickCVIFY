export const ContactPage = () => (
  <div className="min-h-screen bg-white py-20 px-6 text-center">
    <h1 className="text-5xl font-bold text-indigo-600 mb-4">Get in Touch</h1>
    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
      We're here to help! Reach out for support, feedback, or just to say hi.
    </p>
    <form className="max-w-xl mx-auto text-left space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
      />
      <textarea
        rows="4"
        placeholder="Message"
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  </div>
);
