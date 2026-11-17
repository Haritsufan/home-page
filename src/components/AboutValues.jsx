import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutValues() {
  const { t } = useTranslation();
  return (
    <section
      id={"about-values"}
      className={
        "bg-slate-50 border-y border-slate-200 px-5 lg:px-12 py-20 lg:py-24 scroll-mt-20"
      }
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"max-w-2xl"}>
          <div
            className={
              "text-xs font-bold uppercase text-red-600 tracking-[.18em] mb-3"
            }
          >
            {t("about.valuesLabel")}
          </div>
          <h2
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
            }
          >
            {t("about.valuesTitle")}
          </h2>
        </div>
        <div className={"mt-10 grid md:grid-cols-3 gap-4 lg:gap-6"}>
          <div className={"about-value"}>
            <div className={"text-sm font-bold text-red-600"}>01</div>
            <h3
              className={
                "mt-3 text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight"
              }
            >
              {t("about.valueIntegrated")}
            </h3>
            <div className={"mt-0.5 text-sm font-medium text-slate-500"}>
              {t("about.valueIntegratedSubtitle")}
            </div>
            <p className={"mt-3 text-[15px] text-slate-600 leading-relaxed"}>
              {t("about.valueIntegratedDescription")}
            </p>
          </div>
          <div className={"about-value"}>
            <div className={"text-sm font-bold text-red-600"}>02</div>
            <h3
              className={
                "mt-3 text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight"
              }
            >
              {t("about.valueSimplicity")}
            </h3>
            <div className={"mt-0.5 text-sm font-medium text-slate-500"}>
              {t("about.valueSimplicitySubtitle")}
            </div>
            <p className={"mt-3 text-[15px] text-slate-600 leading-relaxed"}>
              {t("about.valueSimplicityDescription")}
            </p>
          </div>
          <div className={"about-value"}>
            <div className={"text-sm font-bold text-red-600"}>03</div>
            <h3
              className={
                "mt-3 text-2xl lg:text-[28px] font-bold text-slate-900 tracking-tight"
              }
            >
              {t("about.valueInnovative")}
            </h3>
            <div className={"mt-0.5 text-sm font-medium text-slate-500"}>
              {t("about.valueInnovativeSubtitle")}
            </div>
            <p className={"mt-3 text-[15px] text-slate-600 leading-relaxed"}>
              {t("about.valueInnovativeDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
