
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingIntro() {
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
          ← {t("pricingIntro.backToHome")}
        </button>

        <div
          className={
            "text-xs font-bold uppercase text-red-400 tracking-[.2em] mb-3"
          }
        >
          {t("pricingIntro.eyebrow")}
        </div>

        <h1 className={"text-3xl lg:text-5xl font-bold mb-4 leading-tight"}>
          {t("pricingIntro.title")}
        </h1>

        <p className={"text-slate-300 leading-relaxed max-w-3xl"}>
          {t("pricingIntro.description")}
        </p>
      </div>
    </section>
  );
}
