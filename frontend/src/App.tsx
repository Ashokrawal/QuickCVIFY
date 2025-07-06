import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Payment from "./components/Payment.tsx";
import Navbar from "./components/Navbar.tsx";
import { FeaturesPage } from "./components/FeaturesPage.tsx";
import { BlogPage } from "./components/BlogPage.tsx";
import { PricingPage } from "./components/PricingPage.tsx";

import ResumeBuilder from "./components/ResumeBuilder.tsx";
import Templates from "./components/Templates.tsx";
import TempFormOne from "./components/TempFormOne.tsx";
import { Login, LoginPage } from "./components/login.tsx";
import { SignUp } from "./components/SignUp.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  { path: "/features", element: <FeaturesPage /> },
  { path: "/templates", element: <Templates /> },

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
  {
    path: "/resume-builder",
    element: <ResumeBuilder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
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
