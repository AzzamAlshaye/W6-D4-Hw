// src/router/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

// games pages & layout
import GamesLayout from "../pages/GamesLayout";
import GamesPage from "../pages/GamePages";
import ActionPage from "../pages/genres/ActionPage";
import AdventurePage from "../pages/genres/AdventurePage";
import RpgPage from "../pages/genres/RpgPage";
import StrategyPage from "../pages/genres/StrategyPage";
import SportsPage from "../pages/genres/SportsPage";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "games",
        element: <GamesLayout />,
        children: [
          { index: true, element: <GamesPage /> },
          { path: "action", element: <ActionPage /> },
          { path: "adventure", element: <AdventurePage /> },
          { path: "rpg", element: <RpgPage /> },
          { path: "strategy", element: <StrategyPage /> },
          { path: "sports", element: <SportsPage /> },
        ],
      },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
