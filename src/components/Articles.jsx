import React from "react";
import { useTranslation } from "react-i18next";

export default function Articles() {
  const { t } = useTranslation();

  return (
    <section
      className={"bg-white py-24 px-6 lg:px-12 scroll-mt-20"}
      id={"news"}
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"max-w-4xl mb-12"}>
          <h2
            className={
              "text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4"
            }
          >
            {t("articles.heading")}
          </h2>
          <p className={"max-w-3xl text-lg text-slate-600 leading-relaxed"}>
            {t("articles.description")}
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
          <a
            aria-label={t("articles.cards.integration.ariaLabel")}
            className={
              "block h-full no-underline focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 rounded-2xl"
            }
            href={"#usecase-integrasi"}
          >
            <article
              className={
                "group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              }
            >
              <div className={"h-56 overflow-hidden bg-slate-100 relative"}>
                <img
                  alt={t("articles.cards.integration.imageAlt")}
                  className={
                    "w-full h-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  }
                  src={"/assets/usecase-api.jpg"}
                />
              </div>
              <div className={"p-7"}>
                <div
                  className={
                    "text-xs uppercase tracking-wider font-bold text-red-600 mb-2"
                  }
                >
                  {t("articles.cards.integration.category")}
                </div>
                <h3 className={"text-xl font-extrabold text-slate-900 mb-3"}>
                  {t("articles.cards.integration.title")}
                </h3>
                <p className={"text-slate-600 text-sm leading-relaxed mb-5"}>
                  {t("articles.cards.integration.challenge")}
                </p>
                <div className={"pt-5 border-t border-slate-100"}>
                  <div
                    className={
                      "text-xs uppercase tracking-wider font-bold text-slate-400 mb-2"
                    }
                  >
                    {t("articles.solutionLabel")}
                  </div>
                  <p className={"text-sm text-slate-700"}>
                    <span className={"font-bold"}>API Trade2Gov</span>{" "}
                    {t("articles.cards.integration.solution")}
                  </p>
                </div>
                <div
                  className={
                    "mt-5 text-sm font-bold text-red-600 group-hover:text-red-700"
                  }
                >
                  {t("articles.readMore")}
                </div>
              </div>
            </article>
          </a>
          <a
            aria-label={t("articles.cards.automation.ariaLabel")}
            className={
              "block h-full no-underline focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 rounded-2xl"
            }
            href={"#usecase-otomasi"}
          >
            <article
              className={
                "group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              }
            >
              <div className={"h-56 overflow-hidden bg-slate-100 relative"}>
                <img
                  alt={t("articles.cards.automation.imageAlt")}
                  className={
                    "w-full h-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  }
                  src="/assets/usecase-scan-photo.jpg"
                />
              </div>
              <div className={"p-7"}>
                <div
                  className={
                    "text-xs uppercase tracking-wider font-bold text-red-600 mb-2"
                  }
                >
                  {t("articles.cards.automation.category")}
                </div>
                <h3 className={"text-xl font-extrabold text-slate-900 mb-3"}>
                  {t("articles.cards.automation.title")}
                </h3>
                <p className={"text-slate-600 text-sm leading-relaxed mb-5"}>
                  {t("articles.cards.automation.challenge")}
                </p>
                <div className={"pt-5 border-t border-slate-100"}>
                  <div
                    className={
                      "text-xs uppercase tracking-wider font-bold text-slate-400 mb-2"
                    }
                  >
                    {t("articles.solutionLabel")}
                  </div>
                  <p className={"text-sm text-slate-700"}>
                    <span className={"font-bold"}>ScanGenius</span>{" "}
                    {t("articles.cards.automation.solution")}
                  </p>
                </div>
                <div
                  className={
                    "mt-5 text-sm font-bold text-red-600 group-hover:text-red-700"
                  }
                >
                  {t("articles.readMore")}
                </div>
              </div>
            </article>
          </a>
          <a
            aria-label={t("articles.cards.monitoring.ariaLabel")}
            className={
              "block h-full no-underline focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 rounded-2xl"
            }
            href={"#usecase-monitoring"}
          >
            <article
              className={
                "group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              }
            >
              <div className={"h-56 overflow-hidden bg-slate-100 relative"}>
                <img
                  alt={t("articles.cards.monitoring.imageAlt")}
                  className={
                    "absolute inset-0 w-full h-full object-cover object-left-top transition duration-500 group-hover:scale-[1.03]"
                  }
                  src="/assets/thumb-edeclaration.jpg"
                />
                <div
                  className={
                    "absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/5 to-transparent"
                  }
                  aria-hidden={"true"}
                ></div>
                <div
                  className={
                    "absolute left-3 right-3 bottom-3 bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-2.5"
                  }
                >
                  <div
                    className={
                      "flex items-center justify-between gap-2 text-[11px] mb-2"
                    }
                  >
                    <span className={"font-semibold text-slate-900"}>
                      {t("articles.cards.monitoring.documentStatus")}
                    </span>
                    <span
                      className={
                        "inline-flex items-center gap-1 text-red-600 font-semibold"
                      }
                    >
                      <span
                        className={"w-1.5 h-1.5 rounded-full bg-red-600"}
                      ></span>
                      {t("articles.cards.monitoring.notification")}
                    </span>
                  </div>
                  <ol className={"flex items-center text-[10.5px]"}>
                    <li className={"flex items-center gap-1.5 min-w-0"}>
                      <span
                        className={
                          "w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"
                        }
                      >
                        <svg
                          className={"w-2.5 h-2.5"}
                          fill={"none"}
                          stroke={"currentColor"}
                          strokeWidth={"3"}
                          strokeLinecap={"round"}
                          strokeLinejoin={"round"}
                          viewBox={"0 0 24 24"}
                          aria-hidden={"true"}
                        >
                          <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
                        </svg>
                      </span>
                      <span className={"text-slate-700 truncate"}>
                        {t("articles.cards.monitoring.statusDraft")}
                      </span>
                    </li>
                    <li
                      className={"flex-1 h-px bg-slate-200 mx-1.5 min-w-[10px]"}
                      aria-hidden={"true"}
                    ></li>
                    <li className={"flex items-center gap-1.5 min-w-0"}>
                      <span
                        className={
                          "w-4 h-4 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"
                        }
                      >
                        <svg
                          className={"w-2.5 h-2.5"}
                          fill={"none"}
                          stroke={"currentColor"}
                          strokeWidth={"3"}
                          strokeLinecap={"round"}
                          strokeLinejoin={"round"}
                          viewBox={"0 0 24 24"}
                          aria-hidden={"true"}
                        >
                          <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
                        </svg>
                      </span>
                      <span className={"text-slate-700 truncate"}>
                        {t("articles.cards.monitoring.statusSent")}
                      </span>
                    </li>
                    <li
                      className={"flex-1 h-px bg-slate-200 mx-1.5 min-w-[10px]"}
                      aria-hidden={"true"}
                    ></li>
                    <li className={"flex items-center gap-1.5 min-w-0"}>
                      <span
                        className={
                          "w-4 h-4 rounded-full bg-red-600 text-white grid place-items-center shrink-0"
                        }
                      >
                        <svg
                          className={"w-2.5 h-2.5"}
                          fill={"none"}
                          stroke={"currentColor"}
                          strokeWidth={"2.4"}
                          strokeLinecap={"round"}
                          strokeLinejoin={"round"}
                          viewBox={"0 0 24 24"}
                          aria-hidden={"true"}
                        >
                          <path
                            d={
                              "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0"
                            }
                          ></path>
                        </svg>
                      </span>
                      <span className={"font-semibold text-slate-900 truncate"}>
                        {t("articles.cards.monitoring.statusReceived")}
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className={"p-7"}>
                <div
                  className={
                    "text-xs uppercase tracking-wider font-bold text-red-600 mb-2"
                  }
                >
                  {t("articles.cards.monitoring.category")}
                </div>
                <h3 className={"text-xl font-extrabold text-slate-900 mb-3"}>
                  {t("articles.cards.monitoring.title")}
                </h3>
                <p className={"text-slate-600 text-sm leading-relaxed mb-5"}>
                  {t("articles.cards.monitoring.challenge")}
                </p>
                <div className={"pt-5 border-t border-slate-100"}>
                  <div
                    className={
                      "text-xs uppercase tracking-wider font-bold text-slate-400 mb-2"
                    }
                  >
                    {t("articles.solutionLabel")}
                  </div>
                  <p className={"text-sm text-slate-700"}>
                    <span className={"font-bold"}>e-Declaration</span>{" "}
                    {t("articles.cards.monitoring.solution")}
                  </p>
                </div>
                <div
                  className={
                    "mt-5 text-sm font-bold text-red-600 group-hover:text-red-700"
                  }
                >
                  {t("articles.readMore")}
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}
