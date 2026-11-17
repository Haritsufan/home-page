import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutNetwork() {
  const { t } = useTranslation();   
  return (
    <section
      id={"about-network"}
      className={
        "bg-slate-950 text-white px-5 lg:px-12 py-20 lg:py-24 scroll-mt-20"
      }
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        }
      >
        <div className={"lg:col-span-5"}>
          <div
            className={
              "text-xs font-bold uppercase text-red-400 tracking-[.18em] mb-3"
            }
          >
            {t("about.networkLabel")}
          </div>
          <h2 className={"text-3xl lg:text-4xl font-bold leading-tight"}>
            {t("about.networkTitle")}
          </h2>
          <p className={"mt-5 text-slate-300 leading-relaxed"}>
            {t("about.networkDescription")}
          </p>
          <a
            href={"#module-cross-border"}
            onClick={() => {
              showModuleDetail("module-cross-border");
            }}
            className={
              "mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-300 transition"
            }
          >
            {t("about.networkLink")}{" "}
            <svg
              className={"w-4 h-4"}
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
        <div className={"lg:col-span-7"}>
          <div className={"grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3"}>
            <div className={"about-country"}>
              <span className={"about-code"}>CN</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countryChina")}</div>
                <div className={"text-[12.5px] text-slate-400"}>{t("about.regionEastAsia")}</div>
              </div>
            </div>
            <div className={"about-country"}>
              <span className={"about-code"}>JP</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countryJapan")}</div>
                <div className={"text-[12.5px] text-slate-400"}>{t("about.regionEastAsia")}</div>
              </div>
            </div>
            <div className={"about-country"}>
              <span className={"about-code"}>KR</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countryKorea")}</div>
                <div className={"text-[12.5px] text-slate-400"}>{t("about.regionEastAsia")}</div>
              </div>
            </div>
            <div className={"about-country"}>
              <span className={"about-code"}>PH</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countryPhilippines")}</div>
                <div className={"text-[12.5px] text-slate-400"}>
                  {t("about.regionSoutheastAsia")}
                </div>
              </div>
            </div>
            <div className={"about-country"}>
              <span className={"about-code"}>SG</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countrySingapore")}</div>
                <div className={"text-[12.5px] text-slate-400"}>
                  {t("about.regionSoutheastAsia")}
                </div>
              </div>
            </div>
            <div className={"about-country"}>
              <span className={"about-code"}>EU</span>
              <div className={"min-w-0"}>
                <div className={"font-semibold text-white"}>{t("about.countryEurope")}</div>
                <div className={"text-[12.5px] text-slate-400"}>
                  {t("about.regionSwedenPartner")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
