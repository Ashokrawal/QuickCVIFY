export const PricingPage = () => {
  const plans = [
    {
      tier: "Free",
      price: "$0",
      features: [
        "✔ ATS Score & Optimization",
        "✔ Basic Templates",
        "✔ Resume Analytics",
      ],
      buttonText: "Start Now",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      tier: "Pro",
      price: "$12",
      features: [
        "✔ Everything in Free",
        "✔ Premium Templates",
        "✔ Cover Letter Builder",
        "✔ Unlimited Downloads",
      ],
      buttonText: "Upgrade",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      tier: "Elite",
      price: "$19",
      features: [
        "✔ Everything in Pro",
        "✔ 1-on-1 Expert Review",
        "✔ Priority Support",
        "✔ LinkedIn Optimization",
      ],
      buttonText: "Get Elite",
      buttonColor: "bg-indigo-800 hover:bg-indigo-900",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 flex flex-col pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Pick the plan that fits your goals. Get started for free, upgrade
          anytime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.tier}
              className="block bg-white p-5 sm:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-2">{plan.tier}</h2>
              <p className="text-3xl font-bold mb-4">{plan.price}/month</p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-sm sm:text-base text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`${plan.buttonColor} text-white px-6 py-2 rounded transition-colors w-full`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
