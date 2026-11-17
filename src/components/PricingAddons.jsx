
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingAddons() {
  const { t } = useTranslation();

  return (
    <section
      id={"pricing-addons"}
      className={"px-5 lg:px-12 pt-20 lg:pt-24 pb-16 lg:pb-20 scroll-mt-20"}
      aria-labelledby={"h-pricing-addons"}
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"max-w-3xl mb-8"}>
          <h2
            id={"h-pricing-addons"}
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight"
            }
          >
            {t("pricingAddons.title")}
          </h2>

          <p className={"text-base lg:text-lg text-slate-600 leading-relaxed"}>
            {t("pricingAddons.subtitle")}
          </p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
          {/* Kelebihan Kuota */}
          <div
            className={"rounded-2xl border border-slate-200 p-6 flex flex-col"}
          >
            <span className={"feat-ic"}>
              <svg
                className={"w-5 h-5"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                viewBox={"0 0 24 24"}
                aria-hidden={"true"}
              >
                <path d={"M3 17l6-6 4 4 8-8"}></path>
                <path d={"M14 7h7v7"}></path>
              </svg>
            </span>

            <h3 className={"mt-4 font-semibold text-slate-900"}>
              {t("pricingAddons.quota.title")}
            </h3>

            <div className={"mt-2"}>
              <span className={"text-2xl font-bold text-slate-900"}>
                Rp10.000
              </span>
              <span className={"text-sm text-slate-500"}>
                {t("pricingAddons.perDocument")}
              </span>
            </div>

            <p className={"mt-3 text-[14px] text-slate-600 leading-relaxed"}>
              {t("pricingAddons.quota.description")}
            </p>
          </div>

          {/* ScanGenius */}
          <div
            className={"rounded-2xl border border-slate-200 p-6 flex flex-col"}
          >
            <span className={"feat-ic"}>
              <svg
                className={"w-5 h-5"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                viewBox={"0 0 24 24"}
                aria-hidden={"true"}
              >
                <path
                  d={
                    "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
                  }
                ></path>
                <path d={"M4 12h16"}></path>
              </svg>
            </span>

            <h3 className={"mt-4 font-semibold text-slate-900"}>
              ScanGenius
            </h3>

            <div className={"mt-2"}>
              <span className={"text-2xl font-bold text-slate-900"}>
                Rp25.000
              </span>
              <span className={"text-sm text-slate-500"}>
                {t("pricingAddons.perDocument")}
              </span>
            </div>

            <p
              className={
                "mt-3 text-[14px] text-slate-600 leading-relaxed flex-1"
              }
            >
              {t("pricingAddons.scanGenius.description")}
            </p>

            <a
              href={"#module-scan-genius"}
              onClick={() => {
                showModuleDetail("module-scan-genius");
              }}
              className={
                "mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800"
              }
            >
              {t("pricingAddons.scanGenius.link")}

              {" "}

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
                <path d={"M5 12h14M13 6l6 6-6 6"}></path>
              </svg>
            </a>
          </div>

          {/* Kontrak Tahunan */}
          <div
            className={"rounded-2xl border border-slate-200 p-6 flex flex-col"}
          >
            <span className={"feat-ic"}>
              <svg
                className={"w-5 h-5"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                viewBox={"0 0 24 24"}
                aria-hidden={"true"}
              >
                <rect
                  x={"3"}
                  y={"5"}
                  width={"18"}
                  height={"16"}
                  rx={"2"}
                ></rect>
                <path d={"M3 10h18M8 3v4M16 3v4"}></path>
              </svg>
            </span>

            <h3 className={"mt-4 font-semibold text-slate-900"}>
              {t("pricingAddons.contract.title")}
            </h3>

            <div className={"mt-2"}>
              <span className={"text-2xl font-bold text-slate-900"}>
                12 ×
              </span>
              <span className={"text-sm text-slate-500"}>
                {t("pricingAddons.contract.monthlyPrice")}
              </span>
            </div>

            <p className={"mt-3 text-[14px] text-slate-600 leading-relaxed"}>
              {t("pricingAddons.contract.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
