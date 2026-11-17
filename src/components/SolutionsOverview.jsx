import React from "react";
import { useTranslation } from "react-i18next";

export default function SolutionsOverview() {
  const { t } = useTranslation();
  return (
    <section
      id={"solutions-overview"}
      className={
        "bg-slate-50 py-16 lg:py-20 px-5 lg:px-12 border-b border-slate-200 scroll-mt-20"
      }
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"max-w-4xl mb-10"}>
          <h2
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight"
            }
          >
            {t("solutions.heading")}
          </h2>
          <p
            className={
              "max-w-3xl text-base lg:text-lg leading-relaxed text-slate-600"
            }
          >
            {t("solutions.description")}
          </p>
        </div>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 lg:items-stretch"
          }
        >
          <div
            id={"tab-buttons"}
            className={"lg:col-span-5 flex flex-col gap-1.5"}
            role={"tablist"}
            aria-label={t("solutions.ariaSolutions")}
          >
            <div
              className={
                "solution-choice rounded-xl border-l-4 border-red-600 bg-white shadow-sm px-4 py-3.5 transition"
              }
              id={"sol-choice-edecl"}
            >
              <button
                type={"button"}
                id={"btn-edecl"}
                className={"tab-btn text-left w-full"}
                role={"tab"}
                aria-controls={"content-edecl"}
                aria-selected={"true"}
                onClick={() => {
                  changeTab("edecl");
                }}
              >
                <div className={"flex gap-3 items-baseline"}>
                  <span className={"text-xs text-red-600 font-bold"}>01</span>
                  <h3 className={"text-slate-900 font-semibold text-base"}>
                    {t("solutions.edeclTitle")}
                  </h3>
                </div>
                <p
                  className={
                    "text-[13px] leading-relaxed text-slate-600 mt-1 pl-7"
                  }
                >
                  {t("solutions.edeclDescription")}
                </p>
              </button>
              <a
                href={"#module-e-declaration"}
                onClick={() => {
                  showModuleDetail("module-e-declaration");
                }}
                className={
                  "inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800 ml-7 mt-2"
                }
                aria-label={t("solutions.ariaLearnEdecl")}
              >
                {t("solutions.learnMore")}{" "}
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
            <div
              className={
                "solution-choice rounded-xl border-l-4 border-transparent hover:bg-white px-4 py-3.5 transition"
              }
              id={"sol-choice-repo"}
            >
              <button
                type={"button"}
                id={"btn-repo"}
                className={"tab-btn text-left w-full"}
                role={"tab"}
                aria-controls={"content-repo"}
                aria-selected={"false"}
                onClick={() => {
                  changeTab("repo");
                }}
              >
                <div className={"flex gap-3 items-baseline"}>
                  <span className={"text-xs text-red-600 font-bold"}>02</span>
                  <h3 className={"text-slate-900 font-semibold text-base"}>
                    {t("solutions.repoTitle")}
                  </h3>
                </div>
                <p
                  className={
                    "text-[13px] leading-relaxed text-slate-600 mt-1 pl-7"
                  }
                >
                  {t("solutions.repoDescription")}
                </p>
              </button>
              <a
                href={"#module-drepo"}
                onClick={() => {
                  showModuleDetail("module-drepo");
                }}
                className={
                  "inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800 ml-7 mt-2"
                }
                aria-label={t("solutions.ariaLearnRepo")}
              >
                {t("solutions.learnMore")}{" "}
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
            <div
              className={
                "solution-choice rounded-xl border-l-4 border-transparent hover:bg-white px-4 py-3.5 transition"
              }
              id={"sol-choice-scan"}
            >
              <button
                type={"button"}
                id={"btn-scan"}
                className={"tab-btn text-left w-full"}
                role={"tab"}
                aria-controls={"content-scan"}
                aria-selected={"false"}
                onClick={() => {
                  changeTab("scan");
                }}
              >
                <div className={"flex gap-3 items-baseline"}>
                  <span className={"text-xs text-red-600 font-bold"}>03</span>
                  <h3 className={"text-slate-900 font-semibold text-base"}>
                    {t("solutions.scanTitle")}
                  </h3>
                </div>
                <p
                  className={
                    "text-[13px] leading-relaxed text-slate-600 mt-1 pl-7"
                  }
                >
                  {t("solutions.scanDescription")}
                </p>
              </button>
              <a
                href={"#module-scan-genius"}
                onClick={() => {
                  showModuleDetail("module-scan-genius");
                }}
                className={
                  "inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800 ml-7 mt-2"
                }
                aria-label={t("solutions.ariaLearnScan")}
              >
                {t("solutions.learnMore")}{" "}
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
            <div
              className={
                "solution-choice rounded-xl border-l-4 border-transparent hover:bg-white px-4 py-3.5 transition"
              }
              id={"sol-choice-api"}
            >
              <button
                type={"button"}
                id={"btn-api"}
                className={"tab-btn text-left w-full"}
                role={"tab"}
                aria-controls={"content-api"}
                aria-selected={"false"}
                onClick={() => {
                  changeTab("api");
                }}
              >
                <div className={"flex gap-3 items-baseline"}>
                  <span className={"text-xs text-red-600 font-bold"}>04</span>
                  <h3 className={"text-slate-900 font-semibold text-base"}>
                    {t("solutions.apiTitle")}
                  </h3>
                </div>
                <p
                  className={
                    "text-[13px] leading-relaxed text-slate-600 mt-1 pl-7"
                  }
                >
                  {t("solutions.apiDescription")}
                </p>
              </button>
              <a
                href={"#module-api"}
                onClick={() => {
                  showModuleDetail("module-api");
                }}
                className={
                  "inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800 ml-7 mt-2"
                }
                aria-label={t("solutions.ariaLearnApi")}
              >
                {t("solutions.learnMore")}{" "}
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
            <div
              className={
                "solution-choice rounded-xl border-l-4 border-transparent hover:bg-white px-4 py-3.5 transition"
              }
              id={"sol-choice-cross"}
            >
              <button
                type={"button"}
                id={"btn-cross"}
                className={"tab-btn text-left w-full"}
                role={"tab"}
                aria-controls={"content-cross"}
                aria-selected={"false"}
                onClick={() => {
                  changeTab("cross");
                }}
              >
                <div className={"flex gap-3 items-baseline"}>
                  <span className={"text-xs text-red-600 font-bold"}>05</span>
                  <h3 className={"text-slate-900 font-semibold text-base"}>
                    {t("solutions.crossTitle")}
                  </h3>
                </div>
                <p
                  className={
                    "text-[13px] leading-relaxed text-slate-600 mt-1 pl-7"
                  }
                >
                  {t("solutions.crossDescription")}
                </p>
              </button>
              <a
                href={"#module-cross-border"}
                onClick={() => {
                  showModuleDetail("module-cross-border");
                }}
                className={
                  "inline-flex items-center gap-1 text-[13px] font-semibold text-red-700 hover:text-red-800 ml-7 mt-2"
                }
                aria-label={t("solutions.ariaLearnCross")}
              >
                {t("solutions.learnMore")}{" "}
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
          </div>
          <div id={"tab-panel-wrap"} className={"lg:col-span-7 min-w-0 flex"}>
            <div
              id={"content-edecl"}
              className={"tab-content sol-panel"}
              role={"tabpanel"}
              aria-labelledby={"btn-edecl"}
            >
              <div className={"flex items-center justify-between gap-2 mb-4"}>
                <span className={"text-sm font-semibold text-slate-900"}>
                  e-Declaration
                </span>
                <span
                  className={
                    "text-[11px] text-slate-500 font-medium border border-slate-200 rounded-full py-1 px-2.5"
                  }
                >
                  01 / 05
                </span>
              </div>
              <div className={"sol-visual ill-bg"}>
                <svg
                  className={"ill-svg"}
                  viewBox={"36 36 448 236"}
                  role={"img"}
                  aria-label={t("solutions.ariaEdeclIllustration")}
                  fontFamily={"Poppins, ui-sans-serif, sans-serif"}
                >
                  <defs>
                    <filter
                      id={"ill-sh-edecl"}
                      x={"-20%"}
                      y={"-20%"}
                      width={"140%"}
                      height={"140%"}
                    >
                      <fedropshadow
                        dx={"0"}
                        dy={"6"}
                        stdDeviation={"8"}
                        floodColor={"#0f172a"}
                        floodOpacity={".10"}
                      ></fedropshadow>
                    </filter>
                    <marker
                      id={"ill-ar-edecl"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#dc2626"}></path>
                    </marker>
                    <marker
                      id={"ill-ar2-edecl"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#94a3b8"}></path>
                    </marker>
                  </defs>
                  <g
                    transform={"rotate(-9 120.0 141.0)"}
                    filter={"url(#ill-sh-edecl)"}
                  >
                    <rect
                      x={"62"}
                      y={"66"}
                      width={"116"}
                      height={"150"}
                      rx={"12"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"76"}
                      y={"82"}
                      width={"50"}
                      height={"20"}
                      rx={"10"}
                      fill={"#fee2e2"}
                    ></rect>
                    <text
                      x={"101.0"}
                      y={"96"}
                      fontSize={"10.5"}
                      fill={"#dc2626"}
                      fontWeight={"700"}
                      textAnchor={"middle"}
                    >
                      PIBK
                    </text>
                    <rect
                      x={"76"}
                      y={"116"}
                      width={"76"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"76"}
                      y={"128"}
                      width={"60"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"76"}
                      y={"140"}
                      width={"68"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"76"}
                      y={"152"}
                      width={"44"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                  </g>
                  <g
                    transform={"rotate(-4 124.0 139.0)"}
                    filter={"url(#ill-sh-edecl)"}
                  >
                    <rect
                      x={"66"}
                      y={"64"}
                      width={"116"}
                      height={"150"}
                      rx={"12"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"80"}
                      width={"41"}
                      height={"20"}
                      rx={"10"}
                      fill={"#fee2e2"}
                    ></rect>
                    <text
                      x={"100.5"}
                      y={"94"}
                      fontSize={"10.5"}
                      fill={"#dc2626"}
                      fontWeight={"700"}
                      textAnchor={"middle"}
                    >
                      PEB
                    </text>
                    <rect
                      x={"80"}
                      y={"114"}
                      width={"76"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"126"}
                      width={"60"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"138"}
                      width={"68"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"150"}
                      width={"44"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                  </g>
                  <g
                    transform={"rotate(0 128.0 137.0)"}
                    filter={"url(#ill-sh-edecl)"}
                  >
                    <rect
                      x={"70"}
                      y={"62"}
                      width={"116"}
                      height={"150"}
                      rx={"12"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"84"}
                      y={"78"}
                      width={"41"}
                      height={"20"}
                      rx={"10"}
                      fill={"#fee2e2"}
                    ></rect>
                    <text
                      x={"104.5"}
                      y={"92"}
                      fontSize={"10.5"}
                      fill={"#dc2626"}
                      fontWeight={"700"}
                      textAnchor={"middle"}
                    >
                      PIB
                    </text>
                    <rect
                      x={"84"}
                      y={"112"}
                      width={"76"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"84"}
                      y={"124"}
                      width={"60"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"84"}
                      y={"136"}
                      width={"68"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"84"}
                      y={"148"}
                      width={"44"}
                      height={"6"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                  </g>
                  <circle
                    cx={"170"}
                    cy={"196"}
                    r={"12"}
                    fill={"#10b981"}
                  ></circle>
                  <path
                    d={
                      "M164.96 196.24 l3.5999999999999996 3.5999999999999996 l6.6000000000000005 -7.199999999999999"
                    }
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  ></path>
                  <text
                    x={"128"}
                    y={"252"}
                    fontSize={"12"}
                    fill={"#64748b"}
                    fontWeight={"500"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.documentTypes")}
                  </text>
                  <path
                    d={"M208 122 H316"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"6 6"}
                    markerEnd={"url(#ill-ar-edecl)"}
                  ></path>
                  <text
                    x={"262"}
                    y={"110"}
                    fontSize={"11.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.send")}
                  </text>
                  <path
                    d={"M316 172 H208"}
                    stroke={"#94a3b8"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"6 6"}
                    markerEnd={"url(#ill-ar2-edecl)"}
                  ></path>
                  <text
                    x={"262"}
                    y={"194"}
                    fontSize={"11.5"}
                    fill={"#64748b"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.response")}
                  </text>
                  <circle
                    cx={"400"}
                    cy={"146"}
                    r={"60"}
                    fill={"#fff"}
                    stroke={"#e2e8f0"}
                    filter={"url(#ill-sh-edecl)"}
                  ></circle>
                  <circle
                    cx={"400"}
                    cy={"146"}
                    r={"46"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"400"}
                    y={"151"}
                    fontSize={"15"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    CEISA
                  </text>
                  <circle
                    cx={"446"}
                    cy={"98"}
                    r={"17"}
                    fill={"#dc2626"}
                    stroke={"#fff"}
                    strokeWidth={"3"}
                  ></circle>
                  <g
                    transform={"translate(437,89) scale(0.75)"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.6666666666666665"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path
                      d={"M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"}
                    ></path>
                    <path d={"M10 20a2 2 0 0 0 4 0"}></path>
                  </g>
                  <text
                    x={"400"}
                    y={"236"}
                    fontSize={"12"}
                    fill={"#64748b"}
                    fontWeight={"500"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.customsAuthority")}
                  </text>
                </svg>
              </div>
              <ol
                className={"sol-steps"}
                aria-label={t("solutions.ariaEdeclSteps")}
              >
                <li className={"sol-step"}>
                  <span className={"n"}>1</span>
                  <div>
                    <b>{t("solutions.stepCreateDraft")}</b>
                    <p>{t("solutions.stepCreateDraftDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>2</span>
                  <div>
                    <b>{t("solutions.stepSendCeisa")}</b>
                    <p>{t("solutions.stepSendCeisaDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>3</span>
                  <div>
                    <b>{t("solutions.stepReceiveResponse")}</b>
                    <p>{t("solutions.stepReceiveResponseDesc")}</p>
                  </div>
                </li>
              </ol>
            </div>
            <div
              id={"content-repo"}
              className={"tab-content sol-panel hidden"}
              role={"tabpanel"}
              aria-labelledby={"btn-repo"}
            >
              <div className={"flex items-center justify-between gap-2 mb-4"}>
                <span className={"text-sm font-semibold text-slate-900"}>
                  D’Repo
                </span>
                <span
                  className={
                    "text-[11px] text-slate-500 font-medium border border-slate-200 rounded-full py-1 px-2.5"
                  }
                >
                  02 / 05
                </span>
              </div>
              <div className={"sol-visual ill-bg"}>
                <svg
                  className={"ill-svg"}
                  viewBox={"24 30 486 236"}
                  role={"img"}
                  aria-label={t("solutions.ariaRepoIllustration")}
                  fontFamily={"Poppins, ui-sans-serif, sans-serif"}
                >
                  <defs>
                    <filter
                      id={"ill-sh-repo"}
                      x={"-20%"}
                      y={"-20%"}
                      width={"140%"}
                      height={"140%"}
                    >
                      <fedropshadow
                        dx={"0"}
                        dy={"6"}
                        stdDeviation={"8"}
                        floodColor={"#0f172a"}
                        floodOpacity={".10"}
                      ></fedropshadow>
                    </filter>
                    <marker
                      id={"ill-ar-repo"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#dc2626"}></path>
                    </marker>
                    <marker
                      id={"ill-ar2-repo"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#94a3b8"}></path>
                    </marker>
                  </defs>
                  <g filter={"url(#ill-sh-repo)"}>
                    <path
                      d={
                        "M40 108 a10 10 0 0 1 10 -10 h46.24 l12 14 h57.760000000000005 a10 10 0 0 1 10 10 v84 a10 10 0 0 1 -10 10 h-116 a10 10 0 0 1 -10 -10 z"
                      }
                      fill={"#f59e0b"}
                    ></path>
                    <rect
                      x={"58"}
                      y={"82"}
                      width={"90"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                      transform={"rotate(-5 108.0 112)"}
                    ></rect>
                    <rect
                      x={"68"}
                      y={"88"}
                      width={"86"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"102"}
                      width={"56"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"80"}
                      y={"112"}
                      width={"40"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"40"}
                      y={"122"}
                      width={"136"}
                      height={"86"}
                      rx={"10"}
                      fill={"#fbbf24"}
                    ></rect>
                  </g>
                  <text
                    x={"108"}
                    y={"232"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.customsDocuments")}
                  </text>
                  <text
                    x={"108"}
                    y={"250"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    PIB, PEB, PKBE
                  </text>
                  <g filter={"url(#ill-sh-repo)"}>
                    <path
                      d={
                        "M192 108 a10 10 0 0 1 10 -10 h46.24 l12 14 h57.760000000000005 a10 10 0 0 1 10 10 v84 a10 10 0 0 1 -10 10 h-116 a10 10 0 0 1 -10 -10 z"
                      }
                      fill={"#f59e0b"}
                    ></path>
                    <rect
                      x={"210"}
                      y={"82"}
                      width={"90"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                      transform={"rotate(-5 260.0 112)"}
                    ></rect>
                    <rect
                      x={"220"}
                      y={"88"}
                      width={"86"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"232"}
                      y={"102"}
                      width={"56"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"232"}
                      y={"112"}
                      width={"40"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"192"}
                      y={"122"}
                      width={"136"}
                      height={"86"}
                      rx={"10"}
                      fill={"#fbbf24"}
                    ></rect>
                  </g>
                  <text
                    x={"260"}
                    y={"232"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.otherDocuments")}
                  </text>
                  <text
                    x={"260"}
                    y={"250"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.otherDocumentsDesc")}
                  </text>
                  <g filter={"url(#ill-sh-repo)"}>
                    <path
                      d={
                        "M344 108 a10 10 0 0 1 10 -10 h46.24 l12 14 h57.760000000000005 a10 10 0 0 1 10 10 v84 a10 10 0 0 1 -10 10 h-116 a10 10 0 0 1 -10 -10 z"
                      }
                      fill={"#f59e0b"}
                    ></path>
                    <rect
                      x={"362"}
                      y={"82"}
                      width={"90"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                      transform={"rotate(-5 412.0 112)"}
                    ></rect>
                    <rect
                      x={"372"}
                      y={"88"}
                      width={"86"}
                      height={"60"}
                      rx={"6"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"384"}
                      y={"102"}
                      width={"56"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"384"}
                      y={"112"}
                      width={"40"}
                      height={"5"}
                      rx={"3"}
                      fill={"#e2e8f0"}
                    ></rect>
                    <rect
                      x={"344"}
                      y={"122"}
                      width={"136"}
                      height={"86"}
                      rx={"10"}
                      fill={"#fbbf24"}
                    ></rect>
                  </g>
                  <circle
                    cx={"474"}
                    cy={"126"}
                    r={"17"}
                    fill={"#0f172a"}
                    stroke={"#fff"}
                    strokeWidth={"3"}
                  ></circle>
                  <g
                    transform={"translate(465,117) scale(0.75)"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.6666666666666665"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <rect
                      x={"5"}
                      y={"11"}
                      width={"14"}
                      height={"10"}
                      rx={"2"}
                    ></rect>
                    <path d={"M8 11V8a4 4 0 0 1 8 0v3"}></path>
                  </g>
                  <text
                    x={"412"}
                    y={"232"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    Audit
                  </text>
                  <text
                    x={"412"}
                    y={"250"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.auditDocuments")}
                  </text>
                  <g filter={"url(#ill-sh-repo)"}>
                    <circle
                      cx={"300"}
                      cy={"74"}
                      r={"30"}
                      fill={"#fff"}
                    ></circle>
                    <circle
                      cx={"300"}
                      cy={"74"}
                      r={"20"}
                      fill={"none"}
                      stroke={"#dc2626"}
                      strokeWidth={"6"}
                    ></circle>
                    <path
                      d={"M315 89 L334 108"}
                      stroke={"#dc2626"}
                      strokeWidth={"8"}
                      strokeLinecap={"round"}
                    ></path>
                  </g>
                </svg>
              </div>
              <ol
                className={"sol-steps"}
                aria-label={t("solutions.ariaRepoSteps")}
              >
                <li className={"sol-step"}>
                  <span className={"n"}>1</span>
                  <div>
                    <b>{t("solutions.stepUpload")}</b>
                    <p>{t("solutions.stepUploadDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>2</span>
                  <div>
                    <b>{t("solutions.stepCategorized")}</b>
                    <p>{t("solutions.stepCategorizedDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>3</span>
                  <div>
                    <b>{t("solutions.stepRetrieve")}</b>
                    <p>{t("solutions.stepRetrieveDesc")}</p>
                  </div>
                </li>
              </ol>
            </div>
            <div
              id={"content-scan"}
              className={"tab-content sol-panel hidden"}
              role={"tabpanel"}
              aria-labelledby={"btn-scan"}
            >
              <div className={"flex items-center justify-between gap-2 mb-4"}>
                <span className={"text-sm font-semibold text-slate-900"}>
                  ScanGenius
                </span>
                <span
                  className={
                    "text-[11px] text-slate-500 font-medium border border-slate-200 rounded-full py-1 px-2.5"
                  }
                >
                  03 / 05
                </span>
              </div>
              <div className={"sol-visual ill-bg"}>
                <svg
                  className={"ill-svg"}
                  viewBox={"24 30 476 256"}
                  role={"img"}
                  aria-label={t("solutions.ariaScanIllustration")}
                  fontFamily={"Poppins, ui-sans-serif, sans-serif"}
                >
                  <defs>
                    <filter
                      id={"ill-sh-scan"}
                      x={"-20%"}
                      y={"-20%"}
                      width={"140%"}
                      height={"140%"}
                    >
                      <fedropshadow
                        dx={"0"}
                        dy={"6"}
                        stdDeviation={"8"}
                        floodColor={"#0f172a"}
                        floodOpacity={".10"}
                      ></fedropshadow>
                    </filter>
                    <marker
                      id={"ill-ar-scan"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#dc2626"}></path>
                    </marker>
                    <marker
                      id={"ill-ar2-scan"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#94a3b8"}></path>
                    </marker>
                  </defs>
                  <g filter={"url(#ill-sh-scan)"}>
                    <rect
                      x={"46"}
                      y={"42"}
                      width={"150"}
                      height={"200"}
                      rx={"12"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                  </g>
                  <rect
                    x={"62"}
                    y={"60"}
                    width={"54"}
                    height={"8"}
                    rx={"4"}
                    fill={"#0f172a"}
                  ></rect>
                  <text
                    x={"180"}
                    y={"68"}
                    fontSize={"9"}
                    fill={"#64748b"}
                    fontWeight={"700"}
                    textAnchor={"end"}
                  >
                    {t("solutions.invoice")}
                  </text>
                  <rect
                    x={"62"}
                    y={"88"}
                    width={"110"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"106"}
                    width={"84"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"124"}
                    width={"118"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"142"}
                    width={"70"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"160"}
                    width={"100"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"178"}
                    width={"90"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"62"}
                    y={"196"}
                    width={"60"}
                    height={"7"}
                    rx={"3"}
                    fill={"#e2e8f0"}
                  ></rect>
                  <rect
                    x={"58"}
                    y={"84"}
                    width={"118"}
                    height={"15"}
                    rx={"4"}
                    fill={"#fde68a"}
                    opacity={".75"}
                  ></rect>
                  <rect
                    x={"58"}
                    y={"120"}
                    width={"126"}
                    height={"15"}
                    rx={"4"}
                    fill={"#fde68a"}
                    opacity={".75"}
                  ></rect>
                  <rect
                    x={"58"}
                    y={"156"}
                    width={"108"}
                    height={"15"}
                    rx={"4"}
                    fill={"#fde68a"}
                    opacity={".75"}
                  ></rect>
                  <rect
                    x={"40"}
                    y={"148"}
                    width={"162"}
                    height={"4"}
                    rx={"2"}
                    fill={"#dc2626"}
                    opacity={".85"}
                  ></rect>
                  <rect
                    x={"40"}
                    y={"132"}
                    width={"162"}
                    height={"20"}
                    fill={"#dc2626"}
                    opacity={".08"}
                  ></rect>
                  <path
                    d={"M212 142 H300"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"6 6"}
                    markerEnd={"url(#ill-ar-scan)"}
                  ></path>
                  <text
                    x={"256"}
                    y={"130"}
                    fontSize={"11.5"}
                    fill={"#0f172a"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    OCR
                  </text>
                  <g filter={"url(#ill-sh-scan)"}>
                    <rect
                      x={"314"}
                      y={"42"}
                      width={"164"}
                      height={"200"}
                      rx={"12"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                  </g>
                  <text
                    x={"332"}
                    y={"72"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"700"}
                    textAnchor={"start"}
                  >
                    {t("solutions.draftPib")}
                  </text>
                  <text
                    x={"332"}
                    y={"100"}
                    fontSize={"10"}
                    fill={"#64748b"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.invoiceNumber")}
                  </text>
                  <rect
                    x={"332"}
                    y={"106"}
                    width={"128"}
                    height={"20"}
                    rx={"6"}
                    fill={"#ecfdf5"}
                  ></rect>
                  <rect
                    x={"342"}
                    y={"113"}
                    width={"64"}
                    height={"6"}
                    rx={"3"}
                    fill={"#6ee7b7"}
                  ></rect>
                  <circle
                    cx={"448"}
                    cy={"116"}
                    r={"7.5"}
                    fill={"#10b981"}
                  ></circle>
                  <path
                    d={"M444.85 116.15 l2.25 2.25 l4.125 -4.5"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  ></path>
                  <text
                    x={"332"}
                    y={"146"}
                    fontSize={"10"}
                    fill={"#64748b"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.supplier")}
                  </text>
                  <rect
                    x={"332"}
                    y={"152"}
                    width={"128"}
                    height={"20"}
                    rx={"6"}
                    fill={"#ecfdf5"}
                  ></rect>
                  <rect
                    x={"342"}
                    y={"159"}
                    width={"78"}
                    height={"6"}
                    rx={"3"}
                    fill={"#6ee7b7"}
                  ></rect>
                  <circle
                    cx={"448"}
                    cy={"162"}
                    r={"7.5"}
                    fill={"#10b981"}
                  ></circle>
                  <path
                    d={"M444.85 162.15 l2.25 2.25 l4.125 -4.5"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  ></path>
                  <text
                    x={"332"}
                    y={"192"}
                    fontSize={"10"}
                    fill={"#64748b"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.value")}
                  </text>
                  <rect
                    x={"332"}
                    y={"198"}
                    width={"128"}
                    height={"20"}
                    rx={"6"}
                    fill={"#ecfdf5"}
                  ></rect>
                  <rect
                    x={"342"}
                    y={"205"}
                    width={"54"}
                    height={"6"}
                    rx={"3"}
                    fill={"#6ee7b7"}
                  ></rect>
                  <circle
                    cx={"448"}
                    cy={"208"}
                    r={"7.5"}
                    fill={"#10b981"}
                  ></circle>
                  <path
                    d={"M444.85 208.15 l2.25 2.25 l4.125 -4.5"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2.2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  ></path>
                  <circle
                    cx={"323.7"}
                    cy={"266"}
                    r={"12"}
                    fill={"#0f172a"}
                  ></circle>
                  <g
                    transform={"translate(316.7,259) scale(0.5833333333333334)"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"3.4285714285714284"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <circle cx={"9"} cy={"8"} r={"3.5"}></circle>
                    <path d={"M2.5 20a6.5 6.5 0 0 1 13 0"}></path>
                    <path
                      d={"M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"}
                    ></path>
                  </g>
                  <text
                    x={"341.7"}
                    y={"270"}
                    fontSize={"11.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"start"}
                  >
                    {t("solutions.userConfirmation")}
                  </text>
                </svg>
              </div>
              <ol
                className={"sol-steps"}
                aria-label={t("solutions.ariaScanSteps")}
              >
                <li className={"sol-step"}>
                  <span className={"n"}>1</span>
                  <div>
                    <b>{t("solutions.stepUpload")}</b>
                    <p>{t("solutions.stepScanUploadDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>2</span>
                  <div>
                    <b>{t("solutions.stepAutoFilled")}</b>
                    <p>{t("solutions.stepAutoFilledDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>3</span>
                  <div>
                    <b>{t("solutions.stepReview")}</b>
                    <p>{t("solutions.stepReviewDesc")}</p>
                  </div>
                </li>
              </ol>
            </div>
            <div
              id={"content-api"}
              className={"tab-content sol-panel hidden"}
              role={"tabpanel"}
              aria-labelledby={"btn-api"}
            >
              <div className={"flex items-center justify-between gap-2 mb-4"}>
                <span className={"text-sm font-semibold text-slate-900"}>
                  API Trade2Gov
                </span>
                <span
                  className={
                    "text-[11px] text-slate-500 font-medium border border-slate-200 rounded-full py-1 px-2.5"
                  }
                >
                  04 / 05
                </span>
              </div>
              <div className={"sol-visual ill-bg"}>
                <svg
                  className={"ill-svg"}
                  viewBox={"14 70 492 166"}
                  role={"img"}
                  aria-label={t("solutions.ariaApiIllustration")}
                  fontFamily={"Poppins, ui-sans-serif, sans-serif"}
                >
                  <defs>
                    <filter
                      id={"ill-sh-api"}
                      x={"-20%"}
                      y={"-20%"}
                      width={"140%"}
                      height={"140%"}
                    >
                      <fedropshadow
                        dx={"0"}
                        dy={"6"}
                        stdDeviation={"8"}
                        floodColor={"#0f172a"}
                        floodOpacity={".10"}
                      ></fedropshadow>
                    </filter>
                    <marker
                      id={"ill-ar-api"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#dc2626"}></path>
                    </marker>
                    <marker
                      id={"ill-ar2-api"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#94a3b8"}></path>
                    </marker>
                  </defs>
                  <path
                    d={"M112 128 H148"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"5 6"}
                    markerEnd={"url(#ill-ar-api)"}
                  ></path>
                  <path
                    d={"M242 128 H278"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"5 6"}
                    markerEnd={"url(#ill-ar-api)"}
                  ></path>
                  <path
                    d={"M372 128 H408"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"5 6"}
                    markerEnd={"url(#ill-ar-api)"}
                  ></path>
                  <circle
                    cx={"66"}
                    cy={"128"}
                    r={"42"}
                    fill={"#fff"}
                    stroke={"#e2e8f0"}
                    strokeWidth={"1.5"}
                    filter={"url(#ill-sh-api)"}
                  ></circle>
                  <text
                    x={"66"}
                    y={"133"}
                    fontSize={"15"}
                    fill={"#0f172a"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    ERP
                  </text>
                  <text
                    x={"66"}
                    y={"200"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.yourSystem")}
                  </text>
                  <text
                    x={"66"}
                    y={"218"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    ERP · WMS
                  </text>
                  <circle
                    cx={"196"}
                    cy={"128"}
                    r={"42"}
                    fill={"#0f172a"}
                    stroke={"#0f172a"}
                    strokeWidth={"1.5"}
                    filter={"url(#ill-sh-api)"}
                  ></circle>
                  <text
                    x={"196"}
                    y={"133"}
                    fontSize={"15"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    API
                  </text>
                  <text
                    x={"196"}
                    y={"200"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    API Trade2Gov
                  </text>
                  <text
                    x={"196"}
                    y={"218"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.apiProcess")}
                  </text>
                  <circle
                    cx={"326"}
                    cy={"128"}
                    r={"42"}
                    fill={"#dc2626"}
                    stroke={"#dc2626"}
                    strokeWidth={"1.5"}
                    filter={"url(#ill-sh-api)"}
                  ></circle>
                  <g
                    transform={"translate(312,114) scale(1.1666666666666667)"}
                    fill={"none"}
                    stroke={"#fff"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"M7 3h7l5 5v13H7z"}></path>
                    <path d={"M14 3v5h5M10 13h6M10 17h6"}></path>
                  </g>
                  <text
                    x={"326"}
                    y={"200"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    e-Declaration
                  </text>
                  <text
                    x={"326"}
                    y={"218"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.documentDraft")}
                  </text>
                  <circle
                    cx={"456"}
                    cy={"128"}
                    r={"42"}
                    fill={"#fff"}
                    stroke={"#e2e8f0"}
                    strokeWidth={"1.5"}
                    filter={"url(#ill-sh-api)"}
                  ></circle>
                  <text
                    x={"456"}
                    y={"132"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    CEISA
                  </text>
                  <text
                    x={"456"}
                    y={"200"}
                    fontSize={"12.5"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    CEISA
                  </text>
                  <text
                    x={"456"}
                    y={"218"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.customsAuthority")}
                  </text>
                </svg>
              </div>
              <ol
                className={"sol-steps"}
                aria-label={t("solutions.ariaApiSteps")}
              >
                <li className={"sol-step"}>
                  <span className={"n"}>1</span>
                  <div>
                    <b>{t("solutions.stepErpData")}</b>
                    <p>{t("solutions.stepErpDataDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>2</span>
                  <div>
                    <b>{t("solutions.stepIntoEdecl")}</b>
                    <p>{t("solutions.stepIntoEdeclDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>3</span>
                  <div>
                    <b>{t("solutions.stepForwardCeisa")}</b>
                    <p>{t("solutions.stepForwardCeisaDesc")}</p>
                  </div>
                </li>
              </ol>
            </div>
            <div
              id={"content-cross"}
              className={"tab-content sol-panel hidden"}
              role={"tabpanel"}
              aria-labelledby={"btn-cross"}
            >
              <div className={"flex items-center justify-between gap-2 mb-4"}>
                <span className={"text-sm font-semibold text-slate-900"}>
                  Cross Border
                </span>
                <span
                  className={
                    "text-[11px] text-slate-500 font-medium border border-slate-200 rounded-full py-1 px-2.5"
                  }
                >
                  05 / 05
                </span>
              </div>
              <div className={"sol-visual ill-bg"}>
                <svg
                  className={"ill-svg"}
                  viewBox={"22 36 492 216"}
                  role={"img"}
                  aria-label={
                    "Ilustrasi pertukaran data Cross Border dengan negara mitra"
                  }
                  fontFamily={"Poppins, ui-sans-serif, sans-serif"}
                >
                  <defs>
                    <filter
                      id={"ill-sh-cross"}
                      x={"-20%"}
                      y={"-20%"}
                      width={"140%"}
                      height={"140%"}
                    >
                      <fedropshadow
                        dx={"0"}
                        dy={"6"}
                        stdDeviation={"8"}
                        floodColor={"#0f172a"}
                        floodOpacity={".10"}
                      ></fedropshadow>
                    </filter>
                    <marker
                      id={"ill-ar-cross"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#dc2626"}></path>
                    </marker>
                    <marker
                      id={"ill-ar2-cross"}
                      viewBox={"0 0 10 10"}
                      refX={"8"}
                      refY={"5"}
                      markerWidth={"7"}
                      markerHeight={"7"}
                      orient={"auto-start-reverse"}
                    >
                      <path d={"M0 0 L10 5 L0 10 z"} fill={"#94a3b8"}></path>
                    </marker>
                  </defs>
                  <circle
                    cx={"88"}
                    cy={"136"}
                    r={"56"}
                    fill={"#fff"}
                    stroke={"#e2e8f0"}
                    filter={"url(#ill-sh-cross)"}
                  ></circle>
                  <circle
                    cx={"88"}
                    cy={"136"}
                    r={"42"}
                    fill={"#dc2626"}
                  ></circle>
                  <text
                    x={"88"}
                    y={"143"}
                    fontSize={"20"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    ID
                  </text>
                  <text
                    x={"88"}
                    y={"216"}
                    fontSize={"13"}
                    fill={"#0f172a"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.indonesia")}
                  </text>
                  <text
                    x={"88"}
                    y={"234"}
                    fontSize={"11"}
                    fill={"#64748b"}
                    fontWeight={"400"}
                    textAnchor={"middle"}
                  >
                    Trade2Gov
                  </text>
                  <path
                    d={"M154 118 H244"}
                    stroke={"#dc2626"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"6 6"}
                    markerEnd={"url(#ill-ar-cross)"}
                  ></path>
                  <path
                    d={"M244 154 H154"}
                    stroke={"#94a3b8"}
                    strokeWidth={"2.2"}
                    strokeDasharray={"6 6"}
                    markerEnd={"url(#ill-ar2-cross)"}
                  ></path>
                  <text
                    x={"199"}
                    y={"140"}
                    fontSize={"10"}
                    fill={"#64748b"}
                    fontWeight={"600"}
                    textAnchor={"middle"}
                  >
                    {t("solutions.dataExchange")}
                  </text>
                  <g filter={"url(#ill-sh-cross)"}>
                    <rect
                      x={"258"}
                      y={"52"}
                      width={"250"}
                      height={"178"}
                      rx={"14"}
                      fill={"#fff"}
                      stroke={"#e2e8f0"}
                    ></rect>
                  </g>
                  <text
                    x={"276"}
                    y={"80"}
                    fontSize={"11.5"}
                    fill={"#64748b"}
                    fontWeight={"600"}
                    textAnchor={"start"}
                  >
                    {t("solutions.partnerCountries")}
                  </text>
                  <circle
                    cx={"286"}
                    cy={"116"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"286"}
                    y={"119.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    CN
                  </text>
                  <text
                    x={"307"}
                    y={"120"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    China
                  </text>
                  <circle
                    cx={"286"}
                    cy={"158"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"286"}
                    y={"161.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    KR
                  </text>
                  <text
                    x={"307"}
                    y={"162"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.southKorea")}
                  </text>
                  <circle
                    cx={"286"}
                    cy={"200"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"286"}
                    y={"203.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    SG
                  </text>
                  <text
                    x={"307"}
                    y={"204"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.singapore")}
                  </text>
                  <circle
                    cx={"414"}
                    cy={"116"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"414"}
                    y={"119.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    JP
                  </text>
                  <text
                    x={"435"}
                    y={"120"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.japan")}
                  </text>
                  <circle
                    cx={"414"}
                    cy={"158"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"414"}
                    y={"161.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    PH
                  </text>
                  <text
                    x={"435"}
                    y={"162"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.philippines")}
                  </text>
                  <circle
                    cx={"414"}
                    cy={"200"}
                    r={"14"}
                    fill={"#0f172a"}
                  ></circle>
                  <text
                    x={"414"}
                    y={"203.6"}
                    fontSize={"9.5"}
                    fill={"#fff"}
                    fontWeight={"700"}
                    textAnchor={"middle"}
                  >
                    EU
                  </text>
                  <text
                    x={"435"}
                    y={"204"}
                    fontSize={"11"}
                    fill={"#0f172a"}
                    fontWeight={"500"}
                    textAnchor={"start"}
                  >
                    {t("solutions.europeanUnion")}
                  </text>
                </svg>
              </div>
              <ol
                className={"sol-steps"}
                aria-label={t("solutions.ariaCrossSteps")}
              >
                <li className={"sol-step"}>
                  <span className={"n"}>1</span>
                  <div>
                    <b>{t("solutions.stepPrepareData")}</b>
                    <p>{t("solutions.stepPrepareDataDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>2</span>
                  <div>
                    <b>{t("solutions.stepExchangeData")}</b>
                    <p>{t("solutions.stepExchangeDataDesc")}</p>
                  </div>
                </li>
                <li className={"sol-step"}>
                  <span className={"n"}>3</span>
                  <div>
                    <b>{t("solutions.stepMonitorStatus")}</b>
                    <p>{t("solutions.stepMonitorStatusDesc")}</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
