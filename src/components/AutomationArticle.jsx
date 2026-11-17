import React from "react";
import { useTranslation } from "react-i18next";

export default function AutomationArticle() {
  const { t } = useTranslation();

  return (
    <article
      id={"usecase-otomasi"}
      className={"usecase-article hidden"}
      aria-labelledby={"h-uc-otomasi"}
    >
      <div className={"max-w-screen-xl mx-auto px-5 lg:px-12 py-10 lg:py-14"}>
        <a
          href={"#news"}
          className={
            "inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
          }
        >
          {t("articles.automation.backToBlog")}
        </a>
        <p className={"mt-8 mb-3 text-sm font-semibold text-red-600"}>
          {t("articles.automation.category")}
        </p>
        <h1
          id={"h-uc-otomasi"}
          className={
            "text-3xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mb-6"
          }
        >
          {t("articles.automation.title")}
        </h1>
        <p
          className={
            "text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10"
          }
        >
          {t("articles.automation.intro")}
        </p>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-start"
          }
        >
          <figure className={"lg:col-span-5"}>
            <div className={"shot"}>
              <div className={"shot-bar"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img
                alt={t("articles.automation.imageAlt")}
                src="/assets/thumb-scangenius.jpg"
              />
            </div>
            <figcaption className={"shot-cap"}>
              {t("articles.automation.imageCaption")}
            </figcaption>
          </figure>
          <div
            className={
              "lg:col-span-7 bg-white rounded-2xl border border-slate-200 px-6 lg:px-9 py-3 lg:py-5"
            }
          >
            <section className={"py-6 border-b border-slate-100"}>
              <h2
                className={
                  "text-xl lg:text-2xl font-semibold text-slate-900 mb-3"
                }
              >
                {t("articles.automation.problemTitle")}
              </h2>
              <p className={"text-slate-600 leading-relaxed lg:text-lg"}>
                {t("articles.automation.problemDescription")}
              </p>
            </section>
            <section className={"py-6 border-b border-slate-100"}>
              <h2
                className={
                  "text-xl lg:text-2xl font-semibold text-slate-900 mb-3"
                }
              >
                {t("articles.automation.solutionTitle")}
              </h2>
              <p className={"text-slate-600 leading-relaxed lg:text-lg"}>
                {t("articles.automation.solutionDescription")}
              </p>
            </section>
            <section className={"py-6"}>
              <h2
                className={
                  "text-xl lg:text-2xl font-semibold text-slate-900 mb-3"
                }
              >
                {t("articles.automation.metricsTitle")}
              </h2>
              <ul
                className={
                  "text-slate-600 leading-relaxed lg:text-lg list-disc pl-5 space-y-1"
                }
              >
                <li>{t("articles.automation.metric1")}</li>
                <li>{t("articles.automation.metric2")}</li>
                <li>{t("articles.automation.metric3")}</li>
              </ul>
            </section>
          </div>
        </div>
        <div
          className={
            "rounded-2xl bg-slate-900 text-white px-7 lg:px-10 py-8 mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          }
        >
          <div>
            <h2 className={"font-semibold text-xl lg:text-2xl mb-2"}>
              {t("articles.automation.ctaTitle")}
            </h2>
            <p className={"text-slate-300 text-sm lg:text-base"}>
              {t("articles.automation.ctaDescription")}
            </p>
          </div>
          <button
            type={"button"}
            onClick={() => {
              openDemoWhatsApp();
            }}
            className={
              "shrink-0 bg-red-600 hover:bg-red-500 text-white rounded-lg px-6 py-3 font-semibold"
            }
          >
            {t("articles.automation.demoButton")}
          </button>
        </div>
      </div>
    </article>
  );
}
