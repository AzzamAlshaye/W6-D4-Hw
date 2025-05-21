// src/router/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import GamesPage from "../pages/GamePages";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

// import each genre page:
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
      { path: "games", element: <GamesPage /> },
      // per-genre routes
      { path: "games/action", element: <ActionPage /> },
      { path: "games/adventure", element: <AdventurePage /> },
      { path: "games/rpg", element: <RpgPage /> },
      { path: "games/strategy", element: <StrategyPage /> },
      { path: "games/sports", element: <SportsPage /> },

      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
