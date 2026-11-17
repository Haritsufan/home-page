import React from "react";
import { useTranslation } from "react-i18next";

export default function ModuleApi() {
  const { t } = useTranslation();

  return (
    <section
      className={"mod-sec bg-slate-50 border-t border-slate-200"}
      id={"module-api"}
      aria-labelledby={"h-module-api"}
    >
      <div className={"mod-wrap"}>
        <div className={"flex items-center gap-3 mb-4"}>
          <span className={"text-sm font-bold text-red-600"}>04</span>
        </div>
        <h2
          id={"h-module-api"}
          className={
            "text-[34px] lg:text-5xl font-bold text-slate-900 tracking-tight"
          }
        >
          {t("modules.api.text01")}
        </h2>
        <p
          className={
            "mt-3 text-xl lg:text-2xl font-semibold text-slate-700 leading-snug max-w-[760px]"
          }
        >
          {t("modules.api.text02")}
        </p>
        <div className={"grid md:grid-cols-2 gap-3 lg:gap-4 mt-8"}>
          <div className={"tri-card bg-white"}>
            <div className={"tri-k"}>{t("modules.api.text03")}</div>
            <p>
              {t("modules.api.text04")}{" "}
              <span className={"whitespace-nowrap"}>e-Declaration</span>
              {t("modules.api.text05")}
            </p>
          </div>
          <div className={"tri-card bg-white"}>
            <div className={"tri-k"}>{t("modules.api.text06")}</div>
            <p>{t("modules.api.text07")}</p>
          </div>
        </div>
        <figure className={"mt-8 lg:mt-10"}>
          <div
            className={"mock"}
            role={"img"}
            aria-label={t("modules.api.ariaLabel")}
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
                  {t("modules.api.text01")}
                </span>
              </div>
              <span className={"text-[11px] text-slate-400"}>
                {t("modules.api.text08")}
              </span>
            </div>
            <div className={"p-4 sm:p-6 bg-slate-50"}>
              <div className={"grid sm:grid-cols-2 gap-3"}>
                <div
                  className={
                    "rounded-xl border border-red-100 bg-white px-4 py-3.5 flex items-center gap-4"
                  }
                >
                  <div
                    className={"flex items-center gap-1 shrink-0"}
                    aria-hidden={"true"}
                  >
                    <span className={"api-doc is-red"}></span>
                    <span className={"api-doc is-red"}></span>
                    <span className={"api-doc is-red"}></span>
                  </div>
                  <div>
                    <div className={"text-[11px] font-semibold text-red-600"}>
                      {t("modules.api.text09")}
                    </div>
                    <div
                      className={"text-[13.5px] font-semibold text-slate-900"}
                    >
                      {t("modules.api.text10")}
                    </div>
                    <div className={"text-[11.5px] text-slate-500 mt-0.5"}>
                      {t("modules.api.text11")}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "rounded-xl border border-emerald-200 bg-white px-4 py-3.5 flex items-center gap-4"
                  }
                >
                  <div
                    className={"flex items-center gap-1 shrink-0"}
                    aria-hidden={"true"}
                  >
                    <span className={"api-doc is-green"}></span>
                  </div>
                  <div>
                    <div
                      className={"text-[11px] font-semibold text-emerald-700"}
                    >
                      {t("modules.api.text12")}
                    </div>
                    <div
                      className={"text-[13.5px] font-semibold text-slate-900"}
                    >
                      {t("modules.api.text13")}
                    </div>
                    <div className={"text-[11.5px] text-slate-500 mt-0.5"}>
                      {t("modules.api.text14")}
                    </div>
                  </div>
                </div>
              </div>
              <div className={"api-flow mt-4"}>
                <div className={"mock-card p-4"}>
                  <div className={"flex items-center gap-2 mb-3"}>
                    <span className={"api-step"}>1</span>
                    <div>
                      <div
                        className={"text-[12.5px] font-semibold text-slate-900"}
                      >
                        {t("modules.api.text15")}
                      </div>
                      <div className={"text-[10.5px] text-slate-500"}>
                        {t("modules.api.text16")}
                      </div>
                    </div>
                  </div>
                  <div className={"space-y-2"}>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text17")}
                      </div>
                      <div
                        className={
                          "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] text-slate-800"
                        }
                      >
                        INV-0912
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text18")}
                      </div>
                      <div
                        className={
                          "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] text-slate-800"
                        }
                      >
                        PT Contoh Pemasok
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text19")}
                      </div>
                      <div
                        className={
                          "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] text-slate-800"
                        }
                      >
                        USD 45.200
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"api-bridge"}>
                  <span className={"api-arrow"}>
                    <svg
                      className={"w-6 h-6"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2.2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      viewBox={"0 0 24 24"}
                      aria-hidden={"true"}
                    >
                      <path d={"M4 12h15M14 6l6 6-6 6"}></path>
                    </svg>
                  </span>
                  <div
                    className={"flex flex-col items-center text-center gap-2"}
                  >
                    <span className={"api-step"}>2</span>
                    <div
                      className={
                        "w-16 h-16 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-lg"
                      }
                    >
                      <svg
                        className={"w-7 h-7"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path d={"M20 11a8 8 0 0 0-14.3-4.9L4 8"}></path>
                        <path
                          d={"M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16"}
                        ></path>
                        <path d={"M20 20v-4h-4"}></path>
                      </svg>
                    </div>
                    <div
                      className={"text-[12.5px] font-semibold text-slate-900"}
                    >
                      {t("modules.api.text01")}
                    </div>
                    <div
                      className={
                        "text-[11px] text-slate-500 max-w-[140px] leading-snug"
                      }
                    >
                      {t("modules.api.text20")}
                    </div>
                  </div>
                  <span className={"api-arrow"}>
                    <svg
                      className={"w-6 h-6"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2.2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      viewBox={"0 0 24 24"}
                      aria-hidden={"true"}
                    >
                      <path d={"M4 12h15M14 6l6 6-6 6"}></path>
                    </svg>
                  </span>
                </div>
                <div className={"mock-card p-4"}>
                  <div className={"flex items-center gap-2 mb-3"}>
                    <span className={"api-step"}>3</span>
                    <div>
                      <div
                        className={"text-[12.5px] font-semibold text-slate-900"}
                      >
                        {t("modules.api.text21")}{" "}
                        <span className={"whitespace-nowrap"}>
                          e-Declaration
                        </span>
                      </div>
                      <div className={"text-[10.5px] text-slate-500"}>
                        {t("modules.api.text22")}
                      </div>
                    </div>
                  </div>
                  <div className={"space-y-2"}>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text17")}
                      </div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-1.5"
                        }
                      >
                        <span
                          className={"text-[12.5px] text-slate-800 truncate"}
                        >
                          INV-0912
                        </span>
                        <span
                          className={
                            "w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"
                          }
                        >
                          <svg
                            className={"w-2.5 h-2.5"}
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
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text18")}
                      </div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-1.5"
                        }
                      >
                        <span
                          className={"text-[12.5px] text-slate-800 truncate"}
                        >
                          PT Contoh Pemasok
                        </span>
                        <span
                          className={
                            "w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"
                          }
                        >
                          <svg
                            className={"w-2.5 h-2.5"}
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
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>
                        {t("modules.api.text19")}
                      </div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/70 px-3 py-1.5"
                        }
                      >
                        <span
                          className={"text-[12.5px] text-slate-800 truncate"}
                        >
                          USD 45.200
                        </span>
                        <span
                          className={
                            "w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"
                          }
                        >
                          <svg
                            className={"w-2.5 h-2.5"}
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
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      "mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[12px] font-semibold text-emerald-700"
                    }
                  >
                    <span
                      className={
                        "w-5 h-5 rounded-full bg-emerald-500 text-white grid place-items-center"
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
                    {t("modules.api.text23")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>
            {t("modules.api.text24")}
          </figcaption>
        </figure>
        <div className={"mt-10 lg:mt-14"}>
          <div className={"feat-head"} aria-hidden={"true"}>
            <span>{t("modules.api.text25")}</span>
            <span>{t("modules.api.text26")}</span>
            <span>{t("modules.api.text27")}</span>
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
                    <path d={"M20 11a8 8 0 0 0-14.3-4.9L4 8"}></path>
                    <path d={"M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16"}></path>
                    <path d={"M20 20v-4h-4"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.api.text28")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text26")}</span>
                {t("modules.api.text29")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text27")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.api.text30")}
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
                    <path d={"M4 7h3l10 10h3M4 17h3l3-3M14 10l3-3h3"}></path>
                    <path d={"M18 5l2 2-2 2M18 15l2 2-2 2"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.api.text31")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text26")}</span>
                {t("modules.api.text32")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text27")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.api.text33")}
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
                      d={"M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"}
                    ></path>
                    <path d={"M9 12l2 2 4-4"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.api.text34")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text26")}</span>
                {t("modules.api.text35")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text27")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.api.text36")}
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
                    <path d={"M12 9v4M12 17h.01"}></path>
                    <path
                      d={
                        "M10.3 3.9L2.5 17.5A2 2 0 0 0 4.2 20.5h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
                      }
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.api.text37")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text26")}</span>
                {t("modules.api.text38")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text27")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.api.text39")}
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
                    <path d={"M7 3h7l5 5v13H7z"}></path>
                    <path d={"M14 3v5h5M10 13h6M10 17h6"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.api.text40")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text26")}</span>
                {t("modules.api.text41")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.api.text27")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.api.text42")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-5 sm:px-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          }
        >
          <div className={"flex-1"}>
            <div className={"aside-label"}>{t("modules.api.text43")}</div>
            <p className={"text-sm text-slate-800 leading-relaxed"}>
              {t("modules.api.text44")}
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
            {t("modules.api.text45")}
          </button>
        </div>
      </div>
    </section>
  );
}
