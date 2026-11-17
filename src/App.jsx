import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UseCasePage from "./pages/UseCasePage";
import ModulesPage from "./pages/ModulesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import useLegacyInteractions from "./hooks/useLegacyInteractions";

export default function App() {
  useLegacyInteractions();

  const [page, setPage] = useState("home");
  const [navigationRequest, setNavigationRequest] = useState(null);

  const pageContent = {
    home: <HomePage />,
    usecase: <UseCasePage />,
    modules: <ModulesPage />,
    pricing: <PricingPage />,
    about: <AboutPage />,
  };

  // Menerima permintaan navigasi dari komponen lama
  useEffect(() => {
    const handleLegacyNavigation = (event) => {
      const { page: targetPage, sectionId } = event.detail || {};

      const validPages = ["home", "usecase", "modules", "pricing", "about"];

      if (!validPages.includes(targetPage)) return;

      setPage(targetPage);

      setNavigationRequest((previous) => ({
        targetPage,
        sectionId,
        requestId: (previous?.requestId || 0) + 1,
      }));
    };

    window.addEventListener("trade2gov:navigate", handleLegacyNavigation);

    return () => {
      window.removeEventListener("trade2gov:navigate", handleLegacyNavigation);
    };
  }, []);

  // Scroll setelah halaman tujuan selesai dirender
  useEffect(() => {
    if (!navigationRequest) return;
    if (navigationRequest.targetPage !== page) return;

    let firstFrame;
    let secondFrame;

    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const { sectionId } = navigationRequest;

        if (sectionId) {
          const target = document.getElementById(sectionId);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);

      if (secondFrame) {
        cancelAnimationFrame(secondFrame);
      }
    };
  }, [page, navigationRequest]);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar currentPage={page} setPage={setPage} />

      {pageContent[page]}

      <Footer currentPage={page} setPage={setPage} />
    </div>
  );
}
