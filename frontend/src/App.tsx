import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Payment from "./components/Payment.tsx";
import Navbar from "./components/Navbar.tsx";
import { FeaturesPage, TemplatesPage } from "./components/FeaturesPage.tsx";
import { BlogPage } from "./components/BlogPage.tsx";
import { PricingPage } from "./components/PricingPage.tsx";

import { ContactPage } from "./components/ContactPage.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/templates",
    element: <TemplatesPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/policy",
    element: <PricingPage />,
  },

  {
    path: "/pricing",
    element: <PricingPage />,
  },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((e) => (
          <Route element={e.element} path={e.path} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
