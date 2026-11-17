import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutFacts() {
  const { t } = useTranslation();
  return (
    <section
      id={"about-facts"}
      className={"px-5 lg:px-12 -mt-20 lg:-mt-24 relative z-10 scroll-mt-28"}
      aria-label={t("about.factsAriaLabel")}
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
        }
      >
        <div className={"about-stat"}>
          <div
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none"
            }
          >
            1995
          </div>
          <p
            className={
              "mt-3 text-[13px] lg:text-sm text-slate-600 leading-relaxed"
            }
          >
            {t("about.fact1995")}
          </p>
        </div>
        <div className={"about-stat"}>
          <div
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none"
            }
          >
            250+
          </div>
          <p
            className={
              "mt-3 text-[13px] lg:text-sm text-slate-600 leading-relaxed"
            }
          >
            {t("about.factCompanies")}
          </p>
        </div>
        <div className={"about-stat"}>
          <div
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none"
            }
          >
            99,5%
          </div>
          <p
            className={
              "mt-3 text-[13px] lg:text-sm text-slate-600 leading-relaxed"
            }
          >
            {t("about.factSla")}
          </p>
        </div>
        <div className={"about-stat"}>
          <div
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none"
            }
          >
            24/7
          </div>
          <p
            className={
              "mt-3 text-[13px] lg:text-sm text-slate-600 leading-relaxed"
            }
          >
            {t("about.factSupport")}
          </p>
        </div>
      </div>
    </section>
  );
}
