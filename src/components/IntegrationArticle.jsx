import React from "react";
import { useTranslation } from "react-i18next";

export default function IntegrationArticle() {
  const { t } = useTranslation();

  return (
    <article
      id={"usecase-integrasi"}
      className={"usecase-article hidden"}
      aria-labelledby={"h-uc-integrasi"}
    >
      <div className={"max-w-screen-xl mx-auto px-5 lg:px-12 py-10 lg:py-14"}>
        <a
          href={"#news"}
          className={
            "inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
          }
        >
          ← {t("articles.integration.backToBlog")}
        </a>
        <p className={"mt-8 mb-3 text-sm font-semibold text-red-600"}>
          {t("articles.integration.category")}
        </p>
        <h1
          id={"h-uc-integrasi"}
          className={
            "text-3xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mb-6"
          }
        >
          {t("articles.integration.title")}
        </h1>
        <p
          className={
            "text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10"
          }
        >
          {t("articles.integration.intro")}
        </p>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-start"
          }
        >
          <figure className={"lg:col-span-5"}>
            <div
              className={
                "rounded-2xl overflow-hidden border border-slate-200 bg-white"
              }
            >
              <img
                alt={t("articles.integration.imageAlt")}
                className={"w-full h-auto"}
                src="/assets/usecase-api.jpg"
              />
            </div>
            <figcaption className={"shot-cap"}>
              {t("articles.integration.imageCaption")}
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
                {t("articles.integration.problemTitle")}
              </h2>
              <p className={"text-slate-600 leading-relaxed lg:text-lg"}>
                {t("articles.integration.problemText")}
              </p>
            </section>
            <section className={"py-6 border-b border-slate-100"}>
              <h2
                className={
                  "text-xl lg:text-2xl font-semibold text-slate-900 mb-3"
                }
              >
                {t("articles.integration.solutionTitle")}
              </h2>
              <p className={"text-slate-600 leading-relaxed lg:text-lg"}>
                {t("articles.integration.solutionText")}
              </p>
            </section>
            <section className={"py-6"}>
              <h2
                className={
                  "text-xl lg:text-2xl font-semibold text-slate-900 mb-3"
                }
              >
                {t("articles.integration.metricsTitle")}
              </h2>
              <ul
                className={
                  "text-slate-600 leading-relaxed lg:text-lg list-disc pl-5 space-y-1"
                }
              >
                <li>{t("articles.integration.metricOne")}</li>
                <li>{t("articles.integration.metricTwo")}</li>
                <li>{t("articles.integration.metricThree")}</li>
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
              {t("articles.integration.ctaTitle")}
            </h2>
            <p className={"text-slate-300 text-sm lg:text-base"}>
              {t("articles.integration.ctaText")}
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
            {t("articles.integration.ctaButton")}
          </button>
        </div>
      </div>
    </article>
  );
}
