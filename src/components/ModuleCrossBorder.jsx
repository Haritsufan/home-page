import React from "react";
import { useTranslation } from "react-i18next";

export default function ModuleCrossBorder() {
  const { t } = useTranslation();

  return (
    <section
      className={"mod-sec bg-white border-t border-slate-200"}
      id={"module-cross-border"}
      aria-labelledby={"h-module-cross-border"}
    >
      <div className={"mod-wrap"}>
        <div className={"flex items-center gap-3 mb-4"}>
          <span className={"text-sm font-bold text-red-600"}>05</span>
        </div>
        <h2
          id={"h-module-cross-border"}
          className={
            "text-[34px] lg:text-5xl font-bold text-slate-900 tracking-tight"
          }
        >
          Cross Border
        </h2>
        <p
          className={
            "mt-3 text-xl lg:text-2xl font-semibold text-slate-700 leading-snug max-w-[760px]"
          }
        >
          {t("modules.crossBorder.subtitle")}
        </p>
        <div className={"grid md:grid-cols-2 gap-3 lg:gap-4 mt-8"}>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.crossBorder.whatYouGet")}</div>
            <p>{t("modules.crossBorder.description")}</p>
          </div>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.crossBorder.result")}</div>
            <p>{t("modules.crossBorder.resultDescription")}</p>
          </div>
        </div>
        <figure className={"mt-8 lg:mt-10"}>
          <div
            className={"mock"}
            role={"img"}
            aria-label={t("modules.crossBorder.ariaLabel")}
          >
            <div className={"mock-top"}>
              <div className={"flex items-center gap-3"}>
                <img
                  src="/assets/logo-t2g.png"
                  alt={""}
                  className={"h-6 w-auto"}
                />
                <span
                  className={"hidden sm:block h-5 w-px bg-slate-200"}
                ></span>
                <span className={"text-[13px] font-semibold text-slate-700"}>
                  Cross Border
                </span>
              </div>
              <span className={"text-[11px] text-slate-400"}>
                {t("modules.crossBorder.illustration")}
              </span>
            </div>
            <div
              className={
                "p-4 sm:p-5 bg-slate-50 grid md:grid-cols-[1.15fr_0.85fr] gap-3"
              }
            >
              <div className={"cb-net"}>
                <div className={"mock-card p-4 text-center"}>
                  <div
                    className={
                      "mx-auto w-11 h-11 rounded-full bg-red-600 text-white grid place-items-center font-bold text-sm"
                    }
                  >
                    ID
                  </div>
                  <div
                    className={"mt-2 text-[13px] font-semibold text-slate-800"}
                  >
                    Indonesia
                  </div>
                  <div className={"text-[11px] text-slate-500"}>Trade2Gov</div>
                </div>
                <div className={"cb-arrows"}>
                  <svg
                    className={"w-7 h-7"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    viewBox={"0 0 24 24"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={"M4 9h15M15 5l4 4-4 4M20 15H5M9 11l-4 4 4 4"}
                    ></path>
                  </svg>
                  <span className={"text-[10px] text-slate-500"}>
                    {t("modules.crossBorder.dataExchange")}
                  </span>
                </div>
                <div className={"mock-card p-3.5"}>
                  <div
                    className={
                      "text-[11px] font-semibold text-slate-500 mb-2.5"
                    }
                  >
                    {t("modules.crossBorder.partnerCountries")}
                  </div>
                  <div
                    className={
                      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-2.5"
                    }
                  >
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code"}>CN</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        China
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code is-on"}>JP</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        {t("modules.crossBorder.japan")}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code"}>KR</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        {t("modules.crossBorder.southKorea")}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code"}>PH</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        {t("modules.crossBorder.philippines")}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code"}>SG</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        {t("modules.crossBorder.singapore")}
                      </span>
                    </div>
                    <div className={"flex items-center gap-2 min-w-0"}>
                      <span className={"cb-code"}>EU</span>
                      <span className={"text-[12px] text-slate-700 truncate"}>
                        {t("modules.crossBorder.europeanUnion")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"mock-card px-4 py-2"}>
                <div
                  className={
                    "text-[12px] font-semibold text-slate-800 pt-1 pb-1"
                  }
                >
                  {t("modules.crossBorder.exchangeStatus")}
                </div>
                <ol className={"divide-y divide-slate-100"}>
                  <li className={"flex items-center gap-3 py-2"}>
                    <span
                      className={
                        "w-5 h-5 rounded-full grid place-items-center shrink-0 bg-emerald-500 text-white"
                      }
                    >
                      <svg
                        className={"w-3 h-3"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
                      </svg>
                    </span>
                    <span className={"text-[12px] text-slate-700 flex-1"}>
                      {t("modules.crossBorder.customsDataPrepared")}
                    </span>
                    <span className={"text-[11px] text-slate-400"}>09.12</span>
                  </li>
                  <li className={"flex items-center gap-3 py-2"}>
                    <span
                      className={
                        "w-5 h-5 rounded-full grid place-items-center shrink-0 bg-emerald-500 text-white"
                      }
                    >
                      <svg
                        className={"w-3 h-3"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
                      </svg>
                    </span>
                    <span className={"text-[12px] text-slate-700 flex-1"}>
                      {t("modules.crossBorder.dataSent")}
                    </span>
                    <span className={"text-[11px] text-slate-400"}>09.14</span>
                  </li>
                  <li className={"flex items-center gap-3 py-2"}>
                    <span
                      className={
                        "w-5 h-5 rounded-full grid place-items-center shrink-0 bg-emerald-500 text-white"
                      }
                    >
                      <svg
                        className={"w-3 h-3"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
                      </svg>
                    </span>
                    <span className={"text-[12px] text-slate-700 flex-1"}>
                      {t("modules.crossBorder.receivedInJapan")}
                    </span>
                    <span className={"text-[11px] text-slate-400"}>09.15</span>
                  </li>
                  <li className={"flex items-center gap-3 py-2"}>
                    <span
                      className={
                        "w-5 h-5 rounded-full grid place-items-center shrink-0 bg-red-600 text-white"
                      }
                    >
                      <svg
                        className={"w-3 h-3"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path
                          d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"}
                        ></path>
                        <circle cx={"12"} cy={"12"} r={"3"}></circle>
                      </svg>
                    </span>
                    <span className={"text-[12px] text-slate-700 flex-1"}>
                      {t("modules.crossBorder.statusUpdated")}
                    </span>
                    <span className={"text-[11px] text-slate-400"}>09.15</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>
            {t("modules.crossBorder.screenshotCaption")}
          </figcaption>
        </figure>
        <div className={"mt-10 lg:mt-14"}>
          <div className={"feat-head"} aria-hidden={"true"}>
            <span>{t("modules.crossBorder.features")}</span>
            <span>{t("modules.crossBorder.soYouCan")}</span>
            <span>{t("modules.crossBorder.benefits")}</span>
          </div>
          <div
            className={
              "divide-y divide-slate-200 border-y border-slate-200 lg:border-t-0"
            }
          >
            <div className={"feat-row"}>
              <div className={"flex items-center gap-3"}>
                <span className={"feat-ic !w-9 !h-9 !rounded-lg"}>
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
                    <path d={"M7 3h7l5 5v13H7z"}></path>
                    <path d={"M14 3v5h5M10 13h6M10 17h6"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.crossBorder.featurePrepare")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.soYouCan")}
                </span>
                {t("modules.crossBorder.prepareDescription")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.benefits")}
                </span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.crossBorder.prepareBenefit")}
                </span>
              </div>
            </div>
            <div className={"feat-row"}>
              <div className={"flex items-center gap-3"}>
                <span className={"feat-ic !w-9 !h-9 !rounded-lg"}>
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
                      d={"M4 9h15M15 5l4 4-4 4M20 15H5M9 11l-4 4 4 4"}
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.crossBorder.dataExchange")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.soYouCan")}
                </span>
                {t("modules.crossBorder.exchangeDescription")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.benefits")}
                </span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.crossBorder.exchangeBenefit")}
                </span>
              </div>
            </div>
            <div className={"feat-row"}>
              <div className={"flex items-center gap-3"}>
                <span className={"feat-ic !w-9 !h-9 !rounded-lg"}>
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
                      d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"}
                    ></path>
                    <circle cx={"12"} cy={"12"} r={"3"}></circle>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.crossBorder.monitorStatus")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.soYouCan")}
                </span>
                {t("modules.crossBorder.monitorDescription")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>
                  {t("modules.crossBorder.benefits")}
                </span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.crossBorder.monitorBenefit")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 sm:px-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          }
        >
          <div className={"flex-1"}>
            <div className={"aside-label"}>
              {t("modules.crossBorder.demoTitle")}
            </div>
            <p className={"text-sm text-slate-800 leading-relaxed"}>
              {t("modules.crossBorder.demoDescription")}
            </p>
          </div>
          <button
            type={"button"}
            onClick={() => {
              openDemoWhatsApp();
            }}
            className={
              "shrink-0 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold text-sm transition"
            }
          >
            {t("modules.crossBorder.scheduleDemo")}
          </button>
        </div>
      </div>
    </section>
  );
}
