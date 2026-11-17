import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutIntro() {
  const { t } = useTranslation();
  return (
    <section
      className={
        "bg-slate-950 text-white px-5 lg:px-12 pt-14 pb-28 lg:pt-16 lg:pb-32"
      }
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <button
          type={"button"}
          onClick={() => {
            showHomeSection("top");
          }}
          className={"text-sm text-slate-300 hover:text-white transition mb-7"}
        >
          {t("about.backHome")}
        </button>
        <div
          className={
            "text-xs font-bold uppercase text-red-400 tracking-[.2em] mb-3"
          }
        >
          {t("about.label")}
        </div>
        <h1
          className={
            "text-3xl lg:text-5xl font-bold mb-4 leading-tight max-w-4xl"
          }
        >
          {t("about.introTitle")}
        </h1>
        <p className={"text-slate-300 leading-relaxed max-w-3xl"}>
          {t("about.introDescription")}
        </p>
        <div className={"mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"}>
          <span
            className={
              "inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-[13px] font-medium text-slate-200"
            }
          >
            <span
              className={"w-1.5 h-1.5 rounded-full bg-red-500"}
              aria-hidden={"true"}
            ></span>
            {t("about.pelindoGroup")}
          </span>
          <a
            href={"https://edi-indonesia.co.id/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={
              "inline-flex items-center gap-1.5 text-[13px] font-semibold text-white underline decoration-slate-600 underline-offset-4 hover:decoration-red-400 transition"
            }
          >
            {t("about.visitEdii")}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path
                d={
                  "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
                }
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
