import React from "react";
import { useTranslation } from "react-i18next";

export default function ModuleDeclaration() {
  const { t } = useTranslation();

  return (
    <section
      className={"mod-sec bg-white border-t border-slate-200"}
      id={"module-e-declaration"}
      aria-labelledby={"h-module-e-declaration"}
    >
      <div className={"mod-wrap"}>
        <div className={"flex items-center gap-3 mb-4"}>
          <span className={"text-sm font-bold text-red-600"}>01</span>
        </div>
        <h2
          id={"h-module-e-declaration"}
          className={
            "text-[34px] lg:text-5xl font-bold text-slate-900 tracking-tight"
          }
        >
          <span className={"whitespace-nowrap"}>e-Declaration</span>
        </h2>
        <p
          className={
            "mt-3 text-xl lg:text-2xl font-semibold text-slate-700 leading-snug max-w-[760px]"
          }
        >
          {t("modules.declaration.text001")}
        </p>
        <div className={"grid sm:grid-cols-2 gap-3 mt-6 max-w-[760px]"}>
          <div
            className={
              "flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
            }
          >
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
            <div>
              <div className={"font-semibold text-slate-900 text-[15px]"}>
                {t("modules.declaration.text002")}
              </div>
              <p
                className={"text-[13px] text-slate-600 leading-relaxed mt-0.5"}
              >
                {t("modules.declaration.text003")}
              </p>
            </div>
          </div>
          <div
            className={
              "flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
            }
          >
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
                <circle cx={"9"} cy={"8"} r={"3.5"}></circle>
                <path d={"M2.5 20a6.5 6.5 0 0 1 13 0"}></path>
                <path
                  d={"M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"}
                ></path>
              </svg>
            </span>
            <div>
              <div className={"font-semibold text-slate-900 text-[15px]"}>
                PPJK (IPPJK)
              </div>
              <p
                className={"text-[13px] text-slate-600 leading-relaxed mt-0.5"}
              >
                {t("modules.declaration.text004")}
              </p>
            </div>
          </div>
        </div>
        <div className={"grid md:grid-cols-3 gap-3 lg:gap-4 mt-8"}>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.declaration.text005")}</div>
            <p>
              {t("modules.declaration.text006")}
            </p>
          </div>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.declaration.text007")}</div>
            <p>
              {t("modules.declaration.text008")}
            </p>
          </div>
          <div className={"tri-card bg-slate-900 !border-slate-900 text-white"}>
            <div className={"tri-k !text-red-300"}>{t("modules.declaration.text009")}</div>
            <div className={"flex items-center gap-2.5 mt-1"}>
              <span className={"text-red-300"}>
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
              <span className={"text-2xl font-bold leading-none"}>33%</span>
            </div>
            <p className={"!text-slate-300 mt-2"}>
              {t("modules.declaration.text010")}
              <span className={"whitespace-nowrap"}>e-Declaration</span> {t("modules.declaration.text011")}
            </p>
          </div>
        </div>
        <figure className={"mt-8 lg:mt-10"}>
          <div className={"mock-duo"}>
            <div className={"mock-duo-main"}>
              <div
                className={"mock"}
                role={"img"}
                aria-label={t("modules.declaration.ariaDashboard")}
              >
                <div className={"mock-top"}>
                  <div className={"flex items-center gap-3 min-w-0"}>
                    <img
                      src="/assets/logo-t2g.png"
                      alt={""}
                      className={"h-6 w-auto"}
                    />
                    <span
                      className={"hidden sm:block h-5 w-px bg-slate-200"}
                    ></span>
                    <span
                      className={
                        "hidden sm:block text-[13px] font-semibold text-slate-700 truncate"
                      }
                    >
                      <span className={"whitespace-nowrap"}>e-Declaration</span>
                    </span>
                  </div>
                  <div className={"flex items-center gap-2.5"}>
                    <span
                      className={
                        "hidden sm:inline-flex items-center rounded-full border border-red-300 text-red-600 text-[11px] font-medium px-2.5 py-0.5"
                      }
                    >
                      Trade2Gov
                    </span>
                    <span
                      className={
                        "w-7 h-7 rounded-full bg-slate-100 text-slate-500 grid place-items-center"
                      }
                    >
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <circle cx={"9"} cy={"8"} r={"3.5"}></circle>
                        <path d={"M2.5 20a6.5 6.5 0 0 1 13 0"}></path>
                        <path
                          d={"M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"}
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={"mock-body"}>
                  <aside className={"mock-side"}>
                    <div className={"mock-side-item is-active"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path d={"M4 20h16"}></path>
                        <path d={"M7 16v-5M12 16V7M17 16v-8"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text012")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
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
                      <span className={"truncate"}>{t("modules.declaration.text013")}</span>
                    </div>
                    <div
                      className={
                        "mock-side-item !text-violet-600 font-semibold"
                      }
                    >
                      <svg
                        className={"w-4 h-4"}
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
                      <span className={"truncate"}>ScanGenius</span>
                    </div>
                    <div className={"mock-side-label"}>{t("modules.declaration.text014")}</div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
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
                      <span className={"truncate"}>{t("modules.declaration.text015")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"4"}
                          y={"3"}
                          width={"16"}
                          height={"18"}
                          rx={"2"}
                        ></rect>
                        <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text016")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"4"}
                          y={"3"}
                          width={"16"}
                          height={"18"}
                          rx={"2"}
                        ></rect>
                        <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text017")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"4"}
                          y={"3"}
                          width={"16"}
                          height={"18"}
                          rx={"2"}
                        ></rect>
                        <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text018")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"4"}
                          y={"3"}
                          width={"16"}
                          height={"18"}
                          rx={"2"}
                        ></rect>
                        <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text019")}</span>
                    </div>
                    <div className={"mock-side-item"}>
                      <svg
                        className={"w-4 h-4"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"4"}
                          y={"3"}
                          width={"16"}
                          height={"18"}
                          rx={"2"}
                        ></rect>
                        <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                      </svg>
                      <span className={"truncate"}>{t("modules.declaration.text020")}</span>
                    </div>
                  </aside>
                  <div className={"mock-main"}>
                    <div
                      className={
                        "flex flex-wrap items-center justify-between gap-3 mb-4"
                      }
                    >
                      <div
                        className={"text-[15px] font-semibold text-slate-800"}
                      >
                        {t("modules.declaration.text012")}
                      </div>
                      <div className={"mock-toast"}>
                        <span
                          className={
                            "w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center shrink-0"
                          }
                        >
                          <svg
                            className={"w-4 h-4"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={"1.8"}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            viewBox={"0 0 24 24"}
                            aria-hidden={"true"}
                          >
                            <path
                              d={"M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"}
                            ></path>
                            <path d={"M10 20a2 2 0 0 0 4 0"}></path>
                          </svg>
                        </span>
                        <div>
                          <div
                            className={
                              "text-[12.5px] font-semibold text-slate-900"
                            }
                          >
                            {t("modules.declaration.text021")}
                          </div>
                          <div className={"text-[11px] text-slate-500"}>
                            {t("modules.declaration.pibJustNow")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"grid grid-cols-2 lg:grid-cols-4 gap-3"}>
                      <div className={"mock-stat"}>
                        <div
                          className={"flex items-start justify-between gap-2"}
                        >
                          <div>
                            <div
                              className={
                                "text-[12px] font-semibold text-slate-700"
                              }
                            >
                              PIB
                            </div>
                            <div className={"text-[10.5px] text-slate-400"}>
                              {t("modules.declaration.text023")}
                            </div>
                          </div>
                          <div
                            className={"text-xl font-semibold"}
                            style={{ color: "#5b8def" }}
                          >
                            907
                          </div>
                        </div>
                        <div className={"mt-3 h-1.5 rounded-full bg-slate-100"}>
                          <div
                            className={"h-1.5 rounded-full"}
                            style={{ width: "22.0%", background: "#5b8def" }}
                          ></div>
                        </div>
                        <div
                          className={
                            "mt-1.5 flex justify-between text-[10px] text-slate-400"
                          }
                        >
                          <span>{t("modules.declaration.text024")}</span>
                          <span>22,0%</span>
                        </div>
                      </div>
                      <div className={"mock-stat"}>
                        <div
                          className={"flex items-start justify-between gap-2"}
                        >
                          <div>
                            <div
                              className={
                                "text-[12px] font-semibold text-slate-700"
                              }
                            >
                              PIBK
                            </div>
                            <div className={"text-[10.5px] text-slate-400"}>
                              {t("modules.declaration.text025")}
                            </div>
                          </div>
                          <div
                            className={"text-xl font-semibold"}
                            style={{ color: "#7367f0" }}
                          >
                            2.706
                          </div>
                        </div>
                        <div className={"mt-3 h-1.5 rounded-full bg-slate-100"}>
                          <div
                            className={"h-1.5 rounded-full"}
                            style={{ width: "65.7%", background: "#7367f0" }}
                          ></div>
                        </div>
                        <div
                          className={
                            "mt-1.5 flex justify-between text-[10px] text-slate-400"
                          }
                        >
                          <span>{t("modules.declaration.text024")}</span>
                          <span>65,7%</span>
                        </div>
                      </div>
                      <div className={"mock-stat"}>
                        <div
                          className={"flex items-start justify-between gap-2"}
                        >
                          <div>
                            <div
                              className={
                                "text-[12px] font-semibold text-slate-700"
                              }
                            >
                              PKBE
                            </div>
                            <div className={"text-[10.5px] text-slate-400"}>
                              {t("modules.declaration.text026")}
                            </div>
                          </div>
                          <div
                            className={"text-xl font-semibold"}
                            style={{ color: "#f0b429" }}
                          >
                            2
                          </div>
                        </div>
                        <div className={"mt-3 h-1.5 rounded-full bg-slate-100"}>
                          <div
                            className={"h-1.5 rounded-full"}
                            style={{ width: "1.5%", background: "#f0b429" }}
                          ></div>
                        </div>
                        <div
                          className={
                            "mt-1.5 flex justify-between text-[10px] text-slate-400"
                          }
                        >
                          <span>{t("modules.declaration.text024")}</span>
                          <span>0,1%</span>
                        </div>
                      </div>
                      <div className={"mock-stat"}>
                        <div
                          className={"flex items-start justify-between gap-2"}
                        >
                          <div>
                            <div
                              className={
                                "text-[12px] font-semibold text-slate-700"
                              }
                            >
                              TPB
                            </div>
                            <div className={"text-[10.5px] text-slate-400"}>
                              {t("modules.declaration.text027")}
                            </div>
                          </div>
                          <div
                            className={"text-xl font-semibold"}
                            style={{ color: "#10b981" }}
                          >
                            266
                          </div>
                        </div>
                        <div className={"mt-3 h-1.5 rounded-full bg-slate-100"}>
                          <div
                            className={"h-1.5 rounded-full"}
                            style={{ width: "6.5%", background: "#10b981" }}
                          ></div>
                        </div>
                        <div
                          className={
                            "mt-1.5 flex justify-between text-[10px] text-slate-400"
                          }
                        >
                          <span>{t("modules.declaration.text024")}</span>
                          <span>6,5%</span>
                        </div>
                      </div>
                    </div>
                    <div className={"mock-card mt-3 overflow-x-auto"}>
                      <div
                        className={
                          "px-4 pt-3 pb-1 text-[12px] font-semibold text-slate-700"
                        }
                      >
                        {t("modules.declaration.text028")}
                      </div>
                      <table className={"mock-table"}>
                        <thead>
                          <tr>
                            <th>{t("modules.declaration.text029")}</th>
                            <th>{t("modules.declaration.text030")}</th>
                            <th className={"hidden sm:table-cell"}>{t("modules.declaration.text031")}</th>
                            <th>{t("modules.declaration.text032")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={"font-semibold text-slate-800"}>
                              PIB
                            </td>
                            <td className={"text-slate-500"}>…0412</td>
                            <td
                              className={"text-slate-600 hidden sm:table-cell"}
                            >
                              {t("modules.declaration.text033")}
                            </td>
                            <td>
                              <span
                                className={
                                  "mock-badge bg-emerald-50 text-emerald-700"
                                }
                              >
                                {t("modules.declaration.responseReceived")}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className={"font-semibold text-slate-800"}>
                              PEB
                            </td>
                            <td className={"text-slate-500"}>…0398</td>
                            <td
                              className={"text-slate-600 hidden sm:table-cell"}
                            >
                              {t("modules.declaration.text033")}
                            </td>
                            <td>
                              <span
                                className={
                                  "mock-badge bg-amber-50 text-amber-700"
                                }
                              >
                                {t("modules.declaration.text034")}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className={"font-semibold text-slate-800"}>
                              PIBK
                            </td>
                            <td className={"text-slate-500"}>…0377</td>
                            <td
                              className={"text-slate-600 hidden sm:table-cell"}
                            >
                              {t("modules.declaration.text035")}
                            </td>
                            <td>
                              <span
                                className={
                                  "mock-badge bg-slate-100 text-slate-600"
                                }
                              >
                                {t("modules.declaration.text036")}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className={"font-semibold text-slate-800"}>
                              TPB
                            </td>
                            <td className={"text-slate-500"}>…0351</td>
                            <td
                              className={"text-slate-600 hidden sm:table-cell"}
                            >
                              {t("modules.declaration.text033")}
                            </td>
                            <td>
                              <span
                                className={"mock-badge bg-red-50 text-red-700"}
                              >
                                {t("modules.declaration.text037")}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"mock-duo-side"}>
              <div
                className={"phone"}
                role={"img"}
                aria-label={t("modules.declaration.ariaMobile")}
              >
                <div className={"phone-screen"}>
                  <div
                    className={
                      "flex items-center justify-between px-4 pt-2.5 pb-1 text-[9px] font-semibold text-slate-700"
                    }
                  >
                    <span>09.41</span>
                    <span className={"phone-notch"} aria-hidden={"true"}></span>
                    <span
                      className={"flex gap-1 items-center"}
                      aria-hidden={"true"}
                    >
                      <span
                        className={"w-3 h-1.5 rounded-sm bg-slate-700"}
                      ></span>
                    </span>
                  </div>
                  <div className={"flex items-center gap-2 px-4 pt-2 pb-3"}>
                    <span className={"w-2 h-2 rounded-full bg-red-600"}></span>
                    <span className={"text-[13px] font-bold text-slate-900"}>
                      EDII Mobile
                    </span>
                  </div>
                  <div
                    className={
                      "mx-3 rounded-xl bg-white border border-slate-200 p-2.5 flex gap-2 items-start shadow-sm"
                    }
                  >
                    <span
                      className={
                        "w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center shrink-0"
                      }
                    >
                      <svg
                        className={"w-3.5 h-3.5"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path
                          d={"M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"}
                        ></path>
                        <path d={"M10 20a2 2 0 0 0 4 0"}></path>
                      </svg>
                    </span>
                    <div className={"min-w-0"}>
                      <div
                        className={
                          "text-[10.5px] font-semibold text-slate-900 leading-tight"
                        }
                      >
                        {t("modules.declaration.text021")}
                      </div>
                      <div className={"text-[9.5px] text-slate-500 mt-0.5"}>
                        {t("modules.declaration.pibJustNow")}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      "mx-3 mt-3 rounded-xl bg-white border border-slate-200 px-3 py-1"
                    }
                  >
                    <div
                      className={
                        "text-[10px] font-semibold text-slate-500 pt-1.5 pb-0.5"
                      }
                    >
                      {t("modules.declaration.text038")}
                    </div>
                    <div
                      className={
                        "flex items-center justify-between gap-2 py-2 border-b border-slate-100 last:border-0"
                      }
                    >
                      <div>
                        <div
                          className={"text-[11px] font-semibold text-slate-800"}
                        >
                          PIB
                        </div>
                        <div className={"text-[9.5px] text-slate-400"}>
                          …0412
                        </div>
                      </div>
                      <span
                        className={
                          "mock-badge !text-[9px] !px-1.5 bg-emerald-50 text-emerald-700"
                        }
                      >
                        {t("modules.declaration.responseReceived")}
                      </span>
                    </div>
                    <div
                      className={
                        "flex items-center justify-between gap-2 py-2 border-b border-slate-100 last:border-0"
                      }
                    >
                      <div>
                        <div
                          className={"text-[11px] font-semibold text-slate-800"}
                        >
                          PEB
                        </div>
                        <div className={"text-[9.5px] text-slate-400"}>
                          …0398
                        </div>
                      </div>
                      <span
                        className={
                          "mock-badge !text-[9px] !px-1.5 bg-amber-50 text-amber-700"
                        }
                      >
                        {t("modules.declaration.text034")}
                      </span>
                    </div>
                    <div
                      className={
                        "flex items-center justify-between gap-2 py-2 border-b border-slate-100 last:border-0"
                      }
                    >
                      <div>
                        <div
                          className={"text-[11px] font-semibold text-slate-800"}
                        >
                          TPB
                        </div>
                        <div className={"text-[9.5px] text-slate-400"}>
                          …0351
                        </div>
                      </div>
                      <span
                        className={
                          "mock-badge !text-[9px] !px-1.5 bg-red-50 text-red-700"
                        }
                      >
                        {t("modules.declaration.text037")}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      "flex justify-around items-center mt-auto px-6 py-3 text-slate-400"
                    }
                    aria-hidden={"true"}
                  >
                    <svg
                      className={"w-4 h-4"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      viewBox={"0 0 24 24"}
                      aria-hidden={"true"}
                    >
                      <path d={"M4 20h16"}></path>
                      <path d={"M7 16v-5M12 16V7M17 16v-8"}></path>
                    </svg>
                    <svg
                      className={"w-4 h-4"}
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
                    <svg
                      className={"w-4 h-4"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      viewBox={"0 0 24 24"}
                      aria-hidden={"true"}
                    >
                      <path
                        d={"M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"}
                      ></path>
                      <path d={"M10 20a2 2 0 0 0 4 0"}></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={
                  "mt-3 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-slate-700"
                }
              >
                <svg
                  className={"w-4 h-4"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.8"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  viewBox={"0 0 24 24"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"7"}
                    y={"2.5"}
                    width={"10"}
                    height={"19"}
                    rx={"2"}
                  ></rect>
                  <path d={"M11 18.5h2"}></path>
                </svg>
                {t("modules.declaration.text039")}
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>
            {t("modules.declaration.captionScreen")}{" "}
            <span className={"whitespace-nowrap"}>e-Declaration</span>
          </figcaption>
        </figure>
        <figure className={"mt-8 lg:mt-12"}>
          <div
            className={"mock"}
            role={"img"}
            aria-label={t("modules.declaration.ariaReport")}
          >
            <div className={"mock-top"}>
              <div className={"flex items-center gap-3 min-w-0"}>
                <img
                  src="/assets/logo-t2g.png"
                  alt={""}
                  className={"h-6 w-auto"}
                />
                <span
                  className={"hidden sm:block h-5 w-px bg-slate-200"}
                ></span>
                <span
                  className={
                    "hidden sm:block text-[13px] font-semibold text-slate-700 truncate"
                  }
                >
                  <span className={"whitespace-nowrap"}>e-Declaration</span>
                </span>
              </div>
              <div className={"flex items-center gap-2.5"}>
                <span
                  className={
                    "hidden sm:inline-flex items-center rounded-full border border-red-300 text-red-600 text-[11px] font-medium px-2.5 py-0.5"
                  }
                >
                  Trade2Gov
                </span>
                <span
                  className={
                    "w-7 h-7 rounded-full bg-slate-100 text-slate-500 grid place-items-center"
                  }
                >
                  <svg
                    className={"w-4 h-4"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    viewBox={"0 0 24 24"}
                    aria-hidden={"true"}
                  >
                    <circle cx={"9"} cy={"8"} r={"3.5"}></circle>
                    <path d={"M2.5 20a6.5 6.5 0 0 1 13 0"}></path>
                    <path
                      d={"M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"}
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className={"p-3 sm:p-5 bg-[#f4f5fa]"}>
              <div
                className={
                  "flex flex-wrap items-center justify-between gap-3 mb-4"
                }
              >
                <div className={"text-[15px] font-semibold text-slate-800"}>
                  {t("modules.declaration.text040")}
                </div>
                <span
                  className={
                    "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700"
                  }
                >
                  Tahun 2026{" "}
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
                    <path d={"M6 9l6 6 6-6"}></path>
                  </svg>
                </span>
              </div>
              <div className={"grid lg:grid-cols-[1.55fr_1fr] gap-3"}>
                <div className={"mock-card p-4"}>
                  <div className={"text-[12.5px] font-semibold text-slate-800"}>
                    {t("modules.declaration.text041")}
                  </div>
                  <div className={"text-[11px] text-slate-400 mb-2"}>
                    {t("modules.declaration.text042")}
                  </div>
                  <svg
                    viewBox={"0 0 520 226"}
                    className={"w-full h-auto"}
                    aria-hidden={"true"}
                    font-family={"Poppins, ui-sans-serif, sans-serif"}
                  >
                    <line
                      x1={"40"}
                      x2={"512"}
                      y1={"196.0"}
                      y2={"196.0"}
                      stroke={"#eef0f4"}
                    ></line>
                    <text
                      x={"32"}
                      y={"200.0"}
                      fontSize={"11"}
                      fill={"#94a3b8"}
                      textAnchor={"end"}
                    >
                      0
                    </text>
                    <line
                      x1={"40"}
                      x2={"512"}
                      y1={"134.7"}
                      y2={"134.7"}
                      stroke={"#eef0f4"}
                    ></line>
                    <text
                      x={"32"}
                      y={"138.7"}
                      fontSize={"11"}
                      fill={"#94a3b8"}
                      textAnchor={"end"}
                    >
                      100
                    </text>
                    <line
                      x1={"40"}
                      x2={"512"}
                      y1={"73.3"}
                      y2={"73.3"}
                      stroke={"#eef0f4"}
                    ></line>
                    <text
                      x={"32"}
                      y={"77.3"}
                      fontSize={"11"}
                      fill={"#94a3b8"}
                      textAnchor={"end"}
                    >
                      200
                    </text>
                    <line
                      x1={"40"}
                      x2={"512"}
                      y1={"12.0"}
                      y2={"12.0"}
                      stroke={"#eef0f4"}
                    ></line>
                    <text
                      x={"32"}
                      y={"16.0"}
                      fontSize={"11"}
                      fill={"#94a3b8"}
                      textAnchor={"end"}
                    >
                      300
                    </text>
                    <rect
                      x={"44.4"}
                      y={"148.2"}
                      width={"6.5"}
                      height={"47.8"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"52.4"}
                      y={"43.9"}
                      width={"6.5"}
                      height={"152.1"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"60.4"}
                      y={"183.1"}
                      width={"6.5"}
                      height={"12.9"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"59.7"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text043")}
                    </text>
                    <rect
                      x={"83.8"}
                      y={"143.9"}
                      width={"6.5"}
                      height={"52.1"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"91.8"}
                      y={"35.3"}
                      width={"6.5"}
                      height={"160.7"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"99.8"}
                      y={"181.9"}
                      width={"6.5"}
                      height={"14.1"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"99.0"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text044")}
                    </text>
                    <rect
                      x={"123.1"}
                      y={"139.6"}
                      width={"6.5"}
                      height={"56.4"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"131.1"}
                      y={"23.7"}
                      width={"6.5"}
                      height={"172.3"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"139.1"}
                      y={"180.1"}
                      width={"6.5"}
                      height={"15.9"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <rect
                      x={"147.1"}
                      y={"195.4"}
                      width={"6.5"}
                      height={"0.6"}
                      rx={"1.5"}
                      fill={"#f0b429"}
                    ></rect>
                    <text
                      x={"138.3"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text045")}
                    </text>
                    <rect
                      x={"162.4"}
                      y={"142.0"}
                      width={"6.5"}
                      height={"54.0"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"170.4"}
                      y={"30.4"}
                      width={"6.5"}
                      height={"165.6"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"178.4"}
                      y={"182.5"}
                      width={"6.5"}
                      height={"13.5"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"177.7"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text046")}
                    </text>
                    <rect
                      x={"201.8"}
                      y={"137.1"}
                      width={"6.5"}
                      height={"58.9"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"209.8"}
                      y={"18.7"}
                      width={"6.5"}
                      height={"177.3"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"217.8"}
                      y={"180.7"}
                      width={"6.5"}
                      height={"15.3"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"217.0"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text047")}
                    </text>
                    <rect
                      x={"241.1"}
                      y={"138.3"}
                      width={"6.5"}
                      height={"57.7"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"249.1"}
                      y={"26.7"}
                      width={"6.5"}
                      height={"169.3"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"257.1"}
                      y={"181.3"}
                      width={"6.5"}
                      height={"14.7"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"256.3"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text048")}
                    </text>
                    <rect
                      x={"280.4"}
                      y={"140.8"}
                      width={"6.5"}
                      height={"55.2"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"288.4"}
                      y={"31.6"}
                      width={"6.5"}
                      height={"164.4"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"296.4"}
                      y={"179.4"}
                      width={"6.5"}
                      height={"16.6"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"295.7"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text049")}
                    </text>
                    <rect
                      x={"319.8"}
                      y={"136.5"}
                      width={"6.5"}
                      height={"59.5"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"327.8"}
                      y={"21.8"}
                      width={"6.5"}
                      height={"174.2"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"335.8"}
                      y={"180.1"}
                      width={"6.5"}
                      height={"15.9"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <rect
                      x={"343.8"}
                      y={"195.4"}
                      width={"6.5"}
                      height={"0.6"}
                      rx={"1.5"}
                      fill={"#f0b429"}
                    ></rect>
                    <text
                      x={"335.0"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text050")}
                    </text>
                    <rect
                      x={"359.1"}
                      y={"139.0"}
                      width={"6.5"}
                      height={"57.0"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"367.1"}
                      y={"37.1"}
                      width={"6.5"}
                      height={"158.9"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"375.1"}
                      y={"182.5"}
                      width={"6.5"}
                      height={"13.5"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"374.3"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text051")}
                    </text>
                    <rect
                      x={"398.4"}
                      y={"138.3"}
                      width={"6.5"}
                      height={"57.7"}
                      rx={"1.5"}
                      fill={"#5b8def"}
                    ></rect>
                    <rect
                      x={"406.4"}
                      y={"31.0"}
                      width={"6.5"}
                      height={"165.0"}
                      rx={"1.5"}
                      fill={"#7367f0"}
                    ></rect>
                    <rect
                      x={"414.4"}
                      y={"181.3"}
                      width={"6.5"}
                      height={"14.7"}
                      rx={"1.5"}
                      fill={"#ef4444"}
                    ></rect>
                    <text
                      x={"413.7"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text052")}
                    </text>
                    <text
                      x={"453.0"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text053")}
                    </text>
                    <text
                      x={"492.3"}
                      y={"216"}
                      fontSize={"11.5"}
                      fill={"#64748b"}
                      textAnchor={"middle"}
                    >
                      {t("modules.declaration.text054")}
                    </text>
                    <line
                      x1={"40"}
                      x2={"512"}
                      y1={"196"}
                      y2={"196"}
                      stroke={"#cbd5e1"}
                    ></line>
                  </svg>
                  <div
                    className={
                      "mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11.5px] font-medium text-slate-600"
                    }
                  >
                    <span className={"inline-flex items-center gap-1.5"}>
                      <span
                        className={"w-2.5 h-2.5 rounded-full"}
                        style={{ background: "#5b8def" }}
                      ></span>
                      PIB
                    </span>
                    <span className={"inline-flex items-center gap-1.5"}>
                      <span
                        className={"w-2.5 h-2.5 rounded-full"}
                        style={{ background: "#7367f0" }}
                      ></span>
                      PIBK
                    </span>
                    <span className={"inline-flex items-center gap-1.5"}>
                      <span
                        className={"w-2.5 h-2.5 rounded-full"}
                        style={{ background: "#ef4444" }}
                      ></span>
                      PEB
                    </span>
                    <span className={"inline-flex items-center gap-1.5"}>
                      <span
                        className={"w-2.5 h-2.5 rounded-full"}
                        style={{ background: "#f0b429" }}
                      ></span>
                      PKBE
                    </span>
                  </div>
                </div>
                <div className={"mock-card p-4 flex flex-col"}>
                  <div
                    className={
                      "text-[12.5px] font-semibold text-slate-800 mb-3"
                    }
                  >
                    {t("modules.declaration.text055")}
                  </div>
                  <div className={"flex-1 flex items-center"}>
                    <div
                      className={
                        "flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5 sm:gap-6 lg:gap-4 xl:gap-6"
                      }
                    >
                      <svg
                        viewBox={"0 0 160 160"}
                        className={
                          "w-[150px] h-[150px] xl:w-[170px] xl:h-[170px] shrink-0"
                        }
                        aria-hidden={"true"}
                        font-family={"Poppins. ui-sans-serif. sans-serif"}
                      >
                        <g transform={"rotate(-90 80 80)"}>
                          <circle
                            cx={"80"}
                            cy={"80"}
                            r={"54"}
                            fill={"none"}
                            stroke={"#7367f0"}
                            strokeWidth={"22"}
                            stroke-dasharray={"221.59 339.29"}
                            stroke-dashoffset={"-0.00"}
                          ></circle>
                          <circle
                            cx={"80"}
                            cy={"80"}
                            r={"54"}
                            fill={"none"}
                            stroke={"#5b8def"}
                            strokeWidth={"22"}
                            stroke-dasharray={"73.48 339.29"}
                            stroke-dashoffset={"-222.79"}
                          ></circle>
                          <circle
                            cx={"80"}
                            cy={"80"}
                            r={"54"}
                            fill={"none"}
                            stroke={"#10b981"}
                            strokeWidth={"22"}
                            stroke-dasharray={"20.70 339.29"}
                            stroke-dashoffset={"-297.47"}
                          ></circle>
                          <circle
                            cx={"80"}
                            cy={"80"}
                            r={"54"}
                            fill={"none"}
                            stroke={"#ef4444"}
                            strokeWidth={"22"}
                            stroke-dasharray={"18.56 339.29"}
                            stroke-dashoffset={"-319.37"}
                          ></circle>
                        </g>
                        <text
                          x={"80"}
                          y={"80"}
                          fontSize={"20"}
                          font-weight={"700"}
                          fill={"#0f172a"}
                          textAnchor={"middle"}
                        >
                          4.121
                        </text>
                        <text
                          x={"80"}
                          y={"98"}
                          fontSize={"10.5"}
                          fill={"#64748b"}
                          textAnchor={"middle"}
                        >
                          {t("modules.declaration.text056")}
                        </text>
                      </svg>
                      <ul className={"w-full divide-y divide-slate-100"}>
                        <li className={"flex items-center gap-2.5 py-1.5"}>
                          <span
                            className={"w-2.5 h-2.5 rounded-full shrink-0"}
                            style={{ background: "#7367f0" }}
                          ></span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-700 w-11"
                            }
                          >
                            PIBK
                          </span>
                          <span
                            className={"text-[11.5px] text-slate-500 flex-1"}
                          >
                            2.706
                          </span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-800"
                            }
                          >
                            65,7%
                          </span>
                        </li>
                        <li className={"flex items-center gap-2.5 py-1.5"}>
                          <span
                            className={"w-2.5 h-2.5 rounded-full shrink-0"}
                            style={{ background: "#5b8def" }}
                          ></span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-700 w-11"
                            }
                          >
                            PIB
                          </span>
                          <span
                            className={"text-[11.5px] text-slate-500 flex-1"}
                          >
                            907
                          </span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-800"
                            }
                          >
                            22,0%
                          </span>
                        </li>
                        <li className={"flex items-center gap-2.5 py-1.5"}>
                          <span
                            className={"w-2.5 h-2.5 rounded-full shrink-0"}
                            style={{ background: "#10b981" }}
                          ></span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-700 w-11"
                            }
                          >
                            TPB
                          </span>
                          <span
                            className={"text-[11.5px] text-slate-500 flex-1"}
                          >
                            266
                          </span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-800"
                            }
                          >
                            6,5%
                          </span>
                        </li>
                        <li className={"flex items-center gap-2.5 py-1.5"}>
                          <span
                            className={"w-2.5 h-2.5 rounded-full shrink-0"}
                            style={{ background: "#ef4444" }}
                          ></span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-700 w-11"
                            }
                          >
                            PEB
                          </span>
                          <span
                            className={"text-[11.5px] text-slate-500 flex-1"}
                          >
                            240
                          </span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-800"
                            }
                          >
                            5,8%
                          </span>
                        </li>
                        <li className={"flex items-center gap-2.5 py-1.5"}>
                          <span
                            className={"w-2.5 h-2.5 rounded-full shrink-0"}
                            style={{ background: "#f0b429" }}
                          ></span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-700 w-11"
                            }
                          >
                            PKBE
                          </span>
                          <span
                            className={"text-[11.5px] text-slate-500 flex-1"}
                          >
                            2
                          </span>
                          <span
                            className={
                              "text-[12px] font-semibold text-slate-800"
                            }
                          >
                            0,1%
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>
            {t("modules.declaration.captionReport")}{" "}
            <span className={"whitespace-nowrap"}>e-Declaration</span>
          </figcaption>
        </figure>
        <div className={"mt-10 lg:mt-14"}>
          <div className={"feat-head"} aria-hidden={"true"}>
            <span>{t("modules.declaration.text057")}</span>
            <span>{t("modules.declaration.text058")}</span>
            <span>{t("modules.declaration.text059")}</span>
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
                  {t("modules.declaration.text060")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text061")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text062")}
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
                      d={"M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"}
                    ></path>
                    <path d={"M10 20a2 2 0 0 0 4 0"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text063")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text064")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text065")}
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
                  {t("modules.declaration.text066")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text067")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text068")}
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
                    <circle cx={"11"} cy={"11"} r={"6"}></circle>
                    <path d={"M20 20l-4.5-4.5M9 11h4M11 9v4"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text069")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text070")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text071")}
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
                    <path d={"M4 20h16"}></path>
                    <path d={"M7 16v-5M12 16V7M17 16v-8"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text072")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text073")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text074")}
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
                    <rect
                      x={"4"}
                      y={"3"}
                      width={"16"}
                      height={"18"}
                      rx={"2"}
                    ></rect>
                    <path d={"M8 8h8M8 12h8M8 16h4"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text075")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text076")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text077")}
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
                    <circle cx={"9"} cy={"8"} r={"3.5"}></circle>
                    <path d={"M2.5 20a6.5 6.5 0 0 1 13 0"}></path>
                    <path
                      d={"M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"}
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text078")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text079")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text080")}
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
                    <rect
                      x={"7"}
                      y={"2.5"}
                      width={"10"}
                      height={"19"}
                      rx={"2"}
                    ></rect>
                    <path d={"M11 18.5h2"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  EDII Mobile
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text081")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text082")}
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
                      d={
                        "M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"
                      }
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.declaration.text083")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text058")}</span>{t("modules.declaration.text084")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.declaration.text059")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.declaration.text085")}
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
            <div className={"aside-label"}>{t("modules.declaration.text086")}</div>
            <p className={"text-sm text-slate-800 leading-relaxed"}>
              {t("modules.declaration.text087")}
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
            {t("modules.declaration.text088")}
          </button>
        </div>
      </div>
    </section>
  );
}
