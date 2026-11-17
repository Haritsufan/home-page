import React from "react";
import { useTranslation } from "react-i18next";

export default function ModuleScanGenius() {
  const { t } = useTranslation();

  return (
    <section
      className={"mod-sec bg-white border-t border-slate-200"}
      id={"module-scan-genius"}
      aria-labelledby={"h-module-scan-genius"}
    >
      <div className={"mod-wrap"}>
        <div className={"flex items-center gap-3 mb-4"}>
          <span className={"text-sm font-bold text-red-600"}>03</span>
        </div>
        <h2
          id={"h-module-scan-genius"}
          className={
            "text-[34px] lg:text-5xl font-bold text-slate-900 tracking-tight"
          }
        >
          ScanGenius
        </h2>
        <p
          className={
            "mt-3 text-xl lg:text-2xl font-semibold text-slate-700 leading-snug max-w-[760px]"
          }
        >{t("modules.scanGenius.tagline")}</p>
        <div className={"grid md:grid-cols-3 gap-3 lg:gap-4 mt-8"}>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.scanGenius.whatYouGet")}</div>
            <p>{t("modules.scanGenius.whatYouGetDesc")}</p>
          </div>
          <div className={"tri-card bg-slate-50"}>
            <div className={"tri-k"}>{t("modules.scanGenius.result")}</div>
            <p>{t("modules.scanGenius.resultDesc")}</p>
          </div>
          <div className={"tri-card bg-slate-900 !border-slate-900 text-white"}>
            <div className={"tri-k !text-red-300"}>{t("modules.scanGenius.proven")}</div>
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
              {t("modules.scanGenius.improvementInOperationalEfficiency")}
            </p>
          </div>
        </div>
        <figure className={"mt-8 lg:mt-10"}>
          <div
            className={"mock"}
            role={"img"}
            aria-label={t("modules.scanGenius.mockupAlt")}
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
                  ScanGenius
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
                    <path d={"M4 20h16"}></path>
                    <path d={"M7 16v-5M12 16V7M17 16v-8"}></path>
                  </svg>
                  <span className={"truncate"}>{t("modules.scanGenius.dashboard")}</span>
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
                  <span className={"truncate"}>{t("modules.scanGenius.userGuide")}</span>
                </div>
                <div
                  className={"mock-side-item !text-violet-600 font-semibold"}
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
                <div className={"mock-side-item is-active pl-7"}>
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
                    <path d={"M12 16V4M7 9l5-5 5 5"}></path>
                    <path
                      d={"M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"}
                    ></path>
                  </svg>
                  <span className={"truncate"}>{t("modules.scanGenius.geniusUpload")}</span>
                </div>
                <div className={"mock-side-item pl-7"}>
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
                    <path d={"M3 12a9 9 0 1 0 3-6.7L3 8"}></path>
                    <path d={"M3 3v5h5M12 7v5l3 2"}></path>
                  </svg>
                  <span className={"truncate"}>{t("modules.scanGenius.history")}</span>
                </div>
                <div className={"mock-side-label"}>{t("modules.scanGenius.module")}</div>
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
                  <span className={"truncate"}>{t("modules.scanGenius.pibDocument")}</span>
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
                  <span className={"truncate"}>{t("modules.scanGenius.pebDocument")}</span>
                </div>
              </aside>
              <div className={"mock-main"}>
                <div
                  className={
                    "rounded-xl px-4 py-3 mb-3 flex items-center justify-between text-white"
                  }
                  style={{
                    background: "linear-gradient(90deg,#a63de8,#5b5bf0)",
                  }}
                >
                  <span className={"text-[13px] font-semibold"}>{t("modules.scanGenius.uploadDocument")}</span>
                  <span
                    className={
                      "inline-flex items-center gap-1 text-[11px] bg-white/20 rounded-md px-2 py-0.5"
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
                      <path d={"M3 12a9 9 0 1 0 3-6.7L3 8"}></path>
                      <path d={"M3 3v5h5M12 7v5l3 2"}></path>
                    </svg>{t("modules.scanGenius.history")}</span>
                </div>
                <div className={"grid md:grid-cols-[0.9fr_1.1fr] gap-3"}>
                  <div className={"mock-card p-4"}>
                    <div className={"flex items-center justify-between mb-3"}>
                      <span
                        className={"text-[11px] font-semibold text-slate-600"}
                      >
                        invoice_0912.pdf
                      </span>
                      <span
                        className={"mock-badge bg-emerald-50 text-emerald-700"}
                      >{t("modules.scanGenius.read")}</span>
                    </div>
                    <div
                      className={
                        "rounded-lg border border-slate-200 p-4 space-y-2 bg-white"
                      }
                    >
                      <div className={"flex justify-between"}>
                        <div
                          className={"h-2.5 w-1/3 rounded bg-slate-700"}
                        ></div>
                        <div className={"text-[9px] font-bold text-slate-500"}>{t("modules.scanGenius.invoice")}</div>
                      </div>
                      <div
                        className={
                          "h-2 rounded bg-amber-200/80 ring-2 ring-amber-300/60"
                        }
                        style={{ width: "42%" }}
                      ></div>
                      <div
                        className={"h-1.5 rounded bg-slate-200"}
                        style={{ width: "70%" }}
                      ></div>
                      <div
                        className={"h-1.5 rounded bg-slate-200"}
                        style={{ width: "55%" }}
                      ></div>
                      <div
                        className={
                          "h-2 rounded bg-amber-200/80 ring-2 ring-amber-300/60"
                        }
                        style={{ width: "58%" }}
                      ></div>
                      <div
                        className={"h-1.5 rounded bg-slate-200"}
                        style={{ width: "80%" }}
                      ></div>
                      <div
                        className={"h-1.5 rounded bg-slate-200"}
                        style={{ width: "64%" }}
                      ></div>
                      <div className={"pt-2 grid grid-cols-3 gap-1.5"}>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                        <div
                          className={"h-1.5 rounded bg-slate-200"}
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className={"flex justify-end pt-1"}>
                        <div
                          className={
                            "h-2 rounded bg-amber-200/80 ring-2 ring-amber-300/60"
                          }
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                    <div className={"mt-2 text-[10px] text-slate-400"}>{t("modules.scanGenius.ocrHighlight")}</div>
                  </div>
                  <div className={"mock-card p-4 space-y-2.5"}>
                    <div className={"flex items-center justify-between"}>
                      <span
                        className={"text-[12.5px] font-semibold text-slate-800"}
                      >{t("modules.scanGenius.customsDraft")}</span>
                      <span className={"text-[10.5px] text-slate-500"}>{t("modules.scanGenius.formType")}<b className={"text-slate-700"}>PIB</b>
                      </span>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>{t("modules.scanGenius.invoiceNumber")}</div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-1.5"
                        }
                      >
                        <span
                          className={
                            "text-[12px] font-medium text-slate-800 truncate"
                          }
                        >
                          INV-0912
                        </span>
                        <span
                          className={
                            "shrink-0 text-[9.5px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5"
                          }
                        >{t("modules.scanGenius.automatic")}</span>
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>{t("modules.scanGenius.supplier")}</div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-1.5"
                        }
                      >
                        <span
                          className={
                            "text-[12px] font-medium text-slate-800 truncate"
                          }
                        >
                          PT Contoh Pemasok
                        </span>
                        <span
                          className={
                            "shrink-0 text-[9.5px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5"
                          }
                        >{t("modules.scanGenius.automatic")}</span>
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>{t("modules.scanGenius.goodsDescription")}</div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-1.5"
                        }
                      >
                        <span
                          className={
                            "text-[12px] font-medium text-slate-800 truncate"
                          }
                        >{t("modules.scanGenius.spareParts")}</span>
                        <span
                          className={
                            "shrink-0 text-[9.5px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5"
                          }
                        >{t("modules.scanGenius.automatic")}</span>
                      </div>
                    </div>
                    <div>
                      <div className={"text-[10.5px] text-slate-500 mb-1"}>{t("modules.scanGenius.invoiceValue")}</div>
                      <div
                        className={
                          "flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-1.5"
                        }
                      >
                        <span
                          className={
                            "text-[12px] font-medium text-slate-800 truncate"
                          }
                        >
                          USD 45.200,00
                        </span>
                        <span
                          className={
                            "shrink-0 text-[9.5px] font-semibold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5"
                          }
                        >{t("modules.scanGenius.automatic")}</span>
                      </div>
                    </div>
                    <div className={"flex gap-2 pt-1"}>
                      <span
                        className={
                          "flex-1 text-center rounded-lg bg-red-600 text-white text-[12px] font-semibold py-2"
                        }
                      >{t("modules.scanGenius.confirm")}</span>
                      <span
                        className={
                          "text-center rounded-lg border border-slate-200 text-slate-600 text-[12px] font-medium py-2 px-3"
                        }
                      >{t("modules.scanGenius.edit")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>{t("modules.scanGenius.mockupAlt")}</figcaption>
        </figure>
        <div className={"mt-10 lg:mt-14"}>
          <div className={"feat-head"} aria-hidden={"true"}>
            <span>{t("modules.scanGenius.features")}</span>
            <span>{t("modules.scanGenius.soYouCan")}</span>
            <span>{t("modules.scanGenius.benefit")}</span>
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
                    <path d={"M12 16V4M7 9l5-5 5 5"}></path>
                    <path
                      d={"M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"}
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>{t("modules.scanGenius.uploadSupportingDocs")}</span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.soYouCan")}</span>{t("modules.scanGenius.uploadSupportingDocsDesc")}</div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.benefit")}</span>
                <span className={"text-slate-900 font-medium"}>{t("modules.scanGenius.uploadSupportingDocsBenefit")}</span>
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
                        "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"
                      }
                    ></path>
                    <path d={"M4 12h16"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>{t("modules.scanGenius.autoReadFill")}</span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.soYouCan")}</span>{t("modules.scanGenius.autoReadFillDesc")}</div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.benefit")}</span>
                <span className={"text-slate-900 font-medium"}>{t("modules.scanGenius.autoReadFillBenefit")}</span>
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
                <span className={"font-semibold text-slate-900 text-[15px]"}>{t("modules.scanGenius.reviewConfirm")}</span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.soYouCan")}</span>{t("modules.scanGenius.reviewConfirmDesc")}</div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.benefit")}</span>
                <span className={"text-slate-900 font-medium"}>{t("modules.scanGenius.reviewConfirmBenefit")}</span>
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
                      x={"3"}
                      y={"4"}
                      width={"6"}
                      height={"6"}
                      rx={"1"}
                    ></rect>
                    <rect
                      x={"15"}
                      y={"14"}
                      width={"6"}
                      height={"6"}
                      rx={"1"}
                    ></rect>
                    <path d={"M9 7h4a2 2 0 0 1 2 2v5"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  Terhubung ke{" "}
                  <span className={"whitespace-nowrap"}>e-Declaration</span>
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.soYouCan")}</span>{t("modules.scanGenius.declarationIntegrationDesc")}</div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.benefit")}</span>
                <span className={"text-slate-900 font-medium"}>{t("modules.scanGenius.declarationIntegrationBenefit")}</span>
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
                    <path d={"M3 12a9 9 0 1 0 3-6.7L3 8"}></path>
                    <path d={"M3 3v5h5M12 7v5l3 2"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>{t("modules.scanGenius.historyFeature")}</span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.soYouCan")}</span>{t("modules.scanGenius.historyFeatureDesc")}</div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.scanGenius.benefit")}</span>
                <span className={"text-slate-900 font-medium"}>{t("modules.scanGenius.historyFeatureBenefit")}</span>
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
            <div className={"aside-label"}>{t("modules.scanGenius.demoShows")}</div>
            <p className={"text-sm text-slate-800 leading-relaxed"}>{t("modules.scanGenius.demoDescription")}</p>
          </div>
          <button
            type={"button"}
            onClick={() => {
              openDemoWhatsApp();
            }}
            className={
              "shrink-0 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold text-sm transition"
            }
          >{t("modules.scanGenius.scheduleDemo")}</button>
        </div>
      </div>
    </section>
  );
}
