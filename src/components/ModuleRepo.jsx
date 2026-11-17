import React from "react";
import { useTranslation } from "react-i18next";

export default function ModuleRepo() {
  const { t } = useTranslation();

  return (
    <section
      className={"mod-sec bg-slate-50 border-t border-slate-200"}
      id={"module-drepo"}
      aria-labelledby={"h-module-drepo"}
    >
      <div className={"mod-wrap"}>
        <div className={"flex items-center gap-3 mb-4"}>
          <span className={"text-sm font-bold text-red-600"}>02</span>
        </div>
        <h2
          id={"h-module-drepo"}
          className={
            "text-[34px] lg:text-5xl font-bold text-slate-900 tracking-tight"
          }
        >
          {t("modules.repo.title")}
        </h2>
        <p
          className={
            "mt-3 text-xl lg:text-2xl font-semibold text-slate-700 leading-snug max-w-[760px]"
          }
        >
          {t("modules.repo.subtitle")}
        </p>
        <div className={"grid md:grid-cols-2 gap-3 lg:gap-4 mt-8"}>
          <div className={"tri-card bg-white"}>
            <div className={"tri-k"}>{t("modules.repo.whatYouGet")}</div>
            <p>{t("modules.repo.whatYouGetDesc")}</p>
          </div>
          <div className={"tri-card bg-white"}>
            <div className={"tri-k"}>{t("modules.repo.result")}</div>
            <p>{t("modules.repo.resultDesc")}</p>
          </div>
        </div>
        <figure className={"mt-8 lg:mt-10"}>
          <div
            className={"mock"}
            role={"img"}
            aria-label={t("modules.repo.mockupAria")}
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
                  {t("modules.repo.productName")}
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
                  <span className={"truncate"}>
                    {t("modules.repo.dashboard")}
                  </span>
                </div>
                <div className={"mock-side-label"}>
                  {t("modules.repo.module")}
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
                  <span className={"truncate"}>
                    {t("modules.repo.customsDocuments")}
                  </span>
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
                  <span className={"truncate"}>
                    {t("modules.repo.otherDocuments")}
                  </span>
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
                    <path
                      d={"M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"}
                    ></path>
                    <path d={"M9 12l2 2 4-4"}></path>
                  </svg>
                  <span className={"truncate"}>
                    {t("modules.repo.auditRequests")}
                  </span>
                </div>
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
                    <circle cx={"11"} cy={"11"} r={"7"}></circle>
                    <path d={"M20 20l-3.5-3.5"}></path>
                  </svg>
                  <span className={"truncate"}>{t("modules.repo.search")}</span>
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
                    <circle cx={"11"} cy={"11"} r={"6"}></circle>
                    <path d={"M20 20l-4.5-4.5M9 11h4M11 9v4"}></path>
                  </svg>
                  <span className={"truncate"}>
                    {t("modules.repo.locationSettings")}
                  </span>
                </div>
              </aside>
              <div className={"mock-main"}>
                <div
                  className={
                    "mock-card flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] text-slate-500 mb-3"
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
                    <circle cx={"11"} cy={"11"} r={"7"}></circle>
                    <path d={"M20 20l-3.5-3.5"}></path>
                  </svg>
                  <span className={"text-slate-800"}>invoice 0912</span>
                  <span className={"ml-auto text-[11px] text-slate-400"}>
                    {t("modules.repo.searchResults")}
                  </span>
                </div>
                <div className={"grid lg:grid-cols-[0.8fr_1.2fr] gap-3"}>
                  <div className={"mock-card p-4 flex items-center gap-4"}>
                    <svg
                      viewBox={"0 0 36 36"}
                      className={"w-20 h-20 shrink-0"}
                      aria-hidden={"true"}
                    >
                      <circle
                        cx={"18"}
                        cy={"18"}
                        r={"15"}
                        fill={"none"}
                        stroke={"#e2f3f8"}
                        strokeWidth={"4"}
                      ></circle>
                      <circle
                        cx={"18"}
                        cy={"18"}
                        r={"15"}
                        fill={"none"}
                        stroke={"#5bc0de"}
                        strokeWidth={"4"}
                        stroke-dasharray={"22.6 94.2"}
                        strokeLinecap={"round"}
                        transform={"rotate(-90 18 18)"}
                      ></circle>
                      <text
                        x={"18"}
                        y={"20.5"}
                        textAnchor={"middle"}
                        fontSize={"7"}
                        font-weight={"600"}
                        fill={"#334155"}
                      >
                        24%
                      </text>
                    </svg>
                    <div>
                      <div
                        className={"text-[12.5px] font-semibold text-slate-800"}
                      >
                        {t("modules.repo.storage")}
                      </div>
                      <div className={"text-[11px] text-slate-500 mt-0.5"}>
                        {t("modules.repo.storageUsage")}
                      </div>
                    </div>
                  </div>
                  <div className={"mock-card divide-y divide-slate-100"}>
                    <div className={"flex items-center gap-3 px-4 py-3"}>
                      <svg
                        className={"w-7 h-7 shrink-0"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path
                          fill={"#f59e0b"}
                          d={
                            "M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                        <path
                          fill={"#fcd34d"}
                          d={
                            "M3 9h18v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                      </svg>
                      <div className={"min-w-0 flex-1"}>
                        <div
                          className={
                            "text-[12.5px] font-semibold text-slate-800"
                          }
                        >
                          {t("modules.repo.customsDocuments")}
                        </div>
                        <div className={"text-[11px] text-slate-400 truncate"}>
                          PIB, PEB, PKBE
                        </div>
                      </div>
                      <div
                        className={"text-[12px] font-semibold text-slate-600"}
                      >
                        1.248
                      </div>
                    </div>
                    <div className={"flex items-center gap-3 px-4 py-3"}>
                      <svg
                        className={"w-7 h-7 shrink-0"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path
                          fill={"#f59e0b"}
                          d={
                            "M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                        <path
                          fill={"#fcd34d"}
                          d={
                            "M3 9h18v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                      </svg>
                      <div className={"min-w-0 flex-1"}>
                        <div
                          className={
                            "text-[12.5px] font-semibold text-slate-800"
                          }
                        >
                          {t("modules.repo.otherDocuments")}
                        </div>
                        <div className={"text-[11px] text-slate-400 truncate"}>
                          {t("modules.repo.legalInternalReports")}
                        </div>
                      </div>
                      <div
                        className={"text-[12px] font-semibold text-slate-600"}
                      >
                        312
                      </div>
                    </div>
                    <div className={"flex items-center gap-3 px-4 py-3"}>
                      <svg
                        className={"w-7 h-7 shrink-0"}
                        viewBox={"0 0 24 24"}
                        aria-hidden={"true"}
                      >
                        <path
                          fill={"#f59e0b"}
                          d={
                            "M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                        <path
                          fill={"#fcd34d"}
                          d={
                            "M3 9h18v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"
                          }
                        ></path>
                      </svg>
                      <div className={"min-w-0 flex-1"}>
                        <div
                          className={
                            "text-[12.5px] font-semibold text-slate-800"
                          }
                        >
                          {t("modules.repo.audit")}
                        </div>
                        <div className={"text-[11px] text-slate-400 truncate"}>
                          {t("modules.repo.auditDocuments")}
                        </div>
                      </div>
                      <div
                        className={"text-[12px] font-semibold text-slate-600"}
                      >
                        46
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"mock-card mt-3 overflow-x-auto"}>
                  <table className={"mock-table"}>
                    <thead>
                      <tr>
                        <th></th>
                        <th>{t("modules.repo.documentName")}</th>
                        <th className={"hidden sm:table-cell"}>
                          {t("modules.repo.category")}
                        </th>
                        <th>{t("modules.repo.access")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span
                            className={
                              "inline-grid place-items-center w-8 h-8 rounded-lg text-[9px] font-bold bg-red-50 text-red-600"
                            }
                          >
                            PDF
                          </span>
                        </td>
                        <td className={"font-medium text-slate-800"}>
                          Commercial Invoice INV-0912
                        </td>
                        <td className={"text-slate-500 hidden sm:table-cell"}>
                          {t("modules.repo.customsDocuments")}
                        </td>
                        <td>
                          <span
                            className={
                              "inline-flex items-center gap-1 text-slate-600"
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
                              <rect
                                x={"5"}
                                y={"11"}
                                width={"14"}
                                height={"10"}
                                rx={"2"}
                              ></rect>
                              <path d={"M8 11V8a4 4 0 0 1 8 0v3"}></path>
                            </svg>
                            {t("modules.repo.allTeam")}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className={
                              "inline-grid place-items-center w-8 h-8 rounded-lg text-[9px] font-bold bg-red-50 text-red-600"
                            }
                          >
                            PDF
                          </span>
                        </td>
                        <td className={"font-medium text-slate-800"}>
                          PIB …0412
                        </td>
                        <td className={"text-slate-500 hidden sm:table-cell"}>
                          {t("modules.repo.customsDocuments")}
                        </td>
                        <td>
                          <span
                            className={
                              "inline-flex items-center gap-1 text-slate-600"
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
                              <rect
                                x={"5"}
                                y={"11"}
                                width={"14"}
                                height={"10"}
                                rx={"2"}
                              ></rect>
                              <path d={"M8 11V8a4 4 0 0 1 8 0v3"}></path>
                            </svg>
                            {t("modules.repo.allTeam")}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className={
                              "inline-grid place-items-center w-8 h-8 rounded-lg text-[9px] font-bold bg-blue-50 text-blue-600"
                            }
                          >
                            DOC
                          </span>
                        </td>
                        <td className={"font-medium text-slate-800"}>
                          Kontrak pemasok 2026
                        </td>
                        <td className={"text-slate-500 hidden sm:table-cell"}>
                          {t("modules.repo.otherDocuments")}
                        </td>
                        <td>
                          <span
                            className={
                              "inline-flex items-center gap-1 text-slate-600"
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
                              <rect
                                x={"5"}
                                y={"11"}
                                width={"14"}
                                height={"10"}
                                rx={"2"}
                              ></rect>
                              <path d={"M8 11V8a4 4 0 0 1 8 0v3"}></path>
                            </svg>
                            {t("modules.repo.adminLegal")}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <figcaption className={"shot-cap"}>
            {t("modules.repo.caption")}
          </figcaption>
        </figure>
        <div className={"mt-10 lg:mt-14"}>
          <div className={"feat-head"} aria-hidden={"true"}>
            <span>{t("modules.repo.features")}</span>
            <span>{t("modules.repo.soYouCan")}</span>
            <span>{t("modules.repo.benefits")}</span>
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
                  {t("modules.repo.documentCategories")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.documentCategoriesAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.organizedArchives")}
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
                    <path d={"M12 16V4M7 9l5-5 5 5"}></path>
                    <path
                      d={"M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"}
                    ></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.repo.uploadDownload")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.uploadDownloadAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.reusableDocuments")}
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
                    <circle cx={"11"} cy={"11"} r={"7"}></circle>
                    <path d={"M20 20l-3.5-3.5"}></path>
                  </svg>
                </span>
                <span className={"font-semibold text-slate-900 text-[15px]"}>
                  {t("modules.repo.searchFeature")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.searchAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.fasterSearch")}
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
                  {t("modules.repo.auditRequestFeature")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.auditRequestAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.auditReady")}
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
                  {t("modules.repo.userAccess")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.userAccessAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.controlledDocuments")}
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
                  {t("modules.repo.storageMonitoring")}
                </span>
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.soYouCan")}</span>
                {t("modules.repo.storageMonitoringAction")}
              </div>
              <div className={"feat-cell"}>
                <span className={"feat-k"}>{t("modules.repo.benefits")}</span>
                <span className={"text-slate-900 font-medium"}>
                  {t("modules.repo.storagePlanning")}
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
            <div className={"aside-label"}>{t("modules.repo.demoLabel")}</div>
            <p className={"text-sm text-slate-800 leading-relaxed"}>
              {t("modules.repo.demoDescription")}
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
            {t("modules.repo.scheduleDemo")}
          </button>
        </div>
      </div>
    </section>
  );
}
