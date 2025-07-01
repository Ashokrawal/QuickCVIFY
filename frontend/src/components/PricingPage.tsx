export const PricingPage = () => (
  <div className="min-h-screen bg-white py-20 flex justify-center flex-col text-center px-6">
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">Pricing Plans</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Pick the plan that fits your goals. Get started for free, upgrade
        anytime.
      </p>
    </section>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
      {["Free", "Pro", "Elite"].map((tier, i) => (
        <div
          key={tier}
          className={`w-full max-w-sm p-6 rounded-xl shadow-xl ${"bg-indigo-50 border-2 hover:border-indigo-500 hover:border-2"}`}
        >
          <h2 className="text-2xl font-bold mb-2">{tier}</h2>
          <p className="text-3xl font-bold mb-4">
            {tier === "Free" ? "$0" : tier === "Pro" ? "$9" : "$19"}/mo
          </p>
          <ul className="text-left space-y-2 mb-6">
            <li>✔ ATS Score & Optimization</li>
            {tier !== "Free" && <li>✔ Premium Templates</li>}
            {tier === "Elite" && <li>✔ 1-on-1 Expert Review</li>}
          </ul>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            {tier === "Free" ? "Start Now" : "Upgrade"}
          </button>
        </div>
      ))}
    </div>
  </div>
);
