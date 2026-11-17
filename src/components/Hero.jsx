
import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header
      className={
        "hero-digital text-white min-h-[640px] lg:min-h-[690px] flex items-center"
      }
      aria-label={t("hero.ariaLabel")}
    >
      <video
        aria-hidden={"true"}
        autoPlay
        className={"hero-video"}
        loop
        muted
        playsInline
        preload={"auto"}
        poster={"/assets/hero-poster.jpg"}
      >
        <source
          src={"/assets/4151e860488d4a.mp4"}
          type={"video/mp4"}
        />
      </video>

      <div
        aria-hidden={"true"}
        className={"hero-video-overlay"}
      ></div>

      <div
        className={
          "w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24"
        }
      >
        <div className={"max-w-4xl relative z-10"}>
          <div
            className={
              "inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-white/95 text-slate-800 text-xs font-extrabold uppercase tracking-wider shadow-lg"
            }
          >
            <span
              className={"w-2 h-2 rounded-full bg-red-500"}
            ></span>

            {t("hero.badge")}
          </div>

          <h1
            className={
              "text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black leading-[1.10] tracking-tight mb-7 max-w-[900px]"
            }
          >
            <span className={"block"}>
              {t("hero.title")}
            </span>

            <span className={"block text-green-100 mt-2"}>
              {t("hero.subtitle")}
            </span>
          </h1>

          <p
            className={
              "text-lg lg:text-xl text-slate-100/95 leading-relaxed max-w-3xl mb-9"
            }
          >
            {t("hero.description")}
          </p>

          <div className={"flex flex-col sm:flex-row gap-4"}>
            <button
              type={"button"}
              onClick={() => {
                openDemoWhatsApp();
              }}
              className={
                "bg-red-600 hover:bg-red-500 text-white px-9 py-4 rounded-md font-bold shadow-xl shadow-red-950/20 transition"
              }
            >
              {t("hero.button")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
