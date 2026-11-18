import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  // Navigasi menggunakan React State
  const navigate = (targetPage, sectionId = null) => {
    setPage(targetPage);
    setMenuOpen(false);

    // Tunggu React selesai merender halaman tujuan
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sectionId && sectionId !== "top") {
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
  };

  // Menutup menu mobile menggunakan tombol Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleDemo = () => {
    openDemoWhatsApp();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav
        className="flex items-center justify-between gap-6 px-5 lg:px-8 xl:px-12 py-2.5"
        aria-label={t("navbar.mainNavigation")}
      >
        {/* Logo */}
        <a
          aria-label={t("navbar.home")}
          className="flex items-center shrink-0"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            navigate("home");
          }}
        >
          <img
            alt="Trade2Gov"
            className="h-12 lg:h-14 w-auto object-contain"
            src={`${import.meta.env.BASE_URL}assets/logo-t2g.png`}
          />
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-9 font-medium text-slate-700 text-[14px] xl:text-[15px] whitespace-nowrap">
          <a
            className="hover:text-red-600 transition"
            href="#solutions-overview"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "solutions-overview");
            }}
          >
            {t("navbar.solutions")}
          </a>

          <a
            className="hover:text-red-600 transition"
            href="#modules"
            onClick={(event) => {
              event.preventDefault();
              navigate("modules");
            }}
          >
            {t("navbar.modules")}
          </a>

          <a
            className="hover:text-red-600 transition"
            href="#news"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "news");
            }}
          >
            {t("navbar.blog")}
          </a>

          {/* <a
            className="hover:text-red-600 transition"
            href="#client"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "client");
            }}
          >
            {t("navbar.clients")}
          </a>

          <a
            className="hover:text-red-600 transition"
            href="#pricing"
            onClick={(event) => {
              event.preventDefault();
              navigate("pricing");
            }}
          >
            {t("navbar.pricing")}
          </a> */}

          <a
            className="hover:text-red-600 transition"
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              navigate("about");
            }}
          >
            {t("navbar.about")}
          </a>
        </div>

        {/* Menu Desktop Kanan */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[15px] whitespace-nowrap">
          {/* Pilihan Bahasa */}
          <div
            className="flex items-center text-sm font-semibold"
            aria-label={t("navbar.selectLanguage")}
          >
            <button
              type="button"
              onClick={() => changeLanguage("id")}
              className={`transition ${
                i18n.language.startsWith("id")
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              ID
            </button>

            <span className="mx-1.5 text-slate-300">/</span>

            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`transition ${
                i18n.language.startsWith("en")
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Tombol Masuk */}
          <a
            className="font-semibold text-slate-600 hover:text-slate-900 transition"
            href="https://www.trade2gov.com/login"
            
            
          >
            {t("navbar.login")}
          </a>

          {/* Tombol Demo */}
          <button
            type="button"
            onClick={handleDemo}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition"
          >
            {t("navbar.scheduleDemo")}
          </button>
        </div>
        {/* Tombol Menu Mobile */}
        <button
          id="menu-btn"
          type="button"
          aria-label={menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="lg:hidden p-2 -mr-2 text-slate-700"
        >
          {/* Icon Menu */}
          <svg
            id="menu-icon-open"
            className={`w-6 h-6 ${menuOpen ? "hidden" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>

          {/* Icon Close */}
          <svg
            id="menu-icon-close"
            className={`w-6 h-6 ${menuOpen ? "" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`${
          menuOpen ? "" : "hidden"
        } lg:hidden border-t border-slate-200 bg-white px-5 pb-5`}
      >
        <div className="flex flex-col py-2 text-[15px] font-medium text-slate-800">
          <a
            className="py-3 border-b border-slate-100"
            href="#solutions-overview"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "solutions-overview");
            }}
          >
            {t("navbar.solutions")}
          </a>

          <a
            className="py-3 border-b border-slate-100"
            href="#modules"
            onClick={(event) => {
              event.preventDefault();
              navigate("modules");
            }}
          >
            {t("navbar.modules")}
          </a>

          <a
            className="py-3 border-b border-slate-100"
            href="#news"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "news");
            }}
          >
            {t("navbar.blog")}
          </a>

          <a
            className="py-3 border-b border-slate-100"
            href="#client"
            onClick={(event) => {
              event.preventDefault();
              navigate("home", "client");
            }}
          >
            {t("navbar.clients")}
          </a>

          {/* <a
            className="py-3 border-b border-slate-100"
            href="#pricing"
            onClick={(event) => {
              event.preventDefault();
              navigate("pricing");
            }}
          >
            {t("navbar.pricing")}
          </a> */}

          <a
            className="py-3 border-b border-slate-100"
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              navigate("about");
            }}
          >
            {t("navbar.about")}
          </a>

          <a
            className="py-3 border-b border-slate-100"
            href="https://www.trade2gov.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navbar.login")}
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="text-sm font-semibold">
            <button
              type="button"
              onClick={() => changeLanguage("id")}
              className={`transition ${
                i18n.language.startsWith("id")
                  ? "text-slate-900"
                  : "text-slate-400"
              }`}
            >
              ID
            </button>

            <span className="mx-1.5 text-slate-300">/</span>

            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`transition ${
                i18n.language.startsWith("en")
                  ? "text-slate-900"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={handleDemo}
            className="flex-1 max-w-[220px] bg-red-600 text-white px-5 py-3 rounded-lg font-semibold"
          >
            {t("navbar.scheduleDemo")}
          </button>
        </div>
      </div>
    </header>
  );
}
