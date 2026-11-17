import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutStory() {
  const { t } = useTranslation();
  return (
    <section
      id={"about-story"}
      className={"px-5 lg:px-12 py-20 lg:py-24 scroll-mt-20"}
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16"
        }
      >
        <div className={"lg:col-span-5"}>
          <div
            className={
              "text-xs font-bold uppercase text-red-600 tracking-[.18em] mb-3"
            }
          >
            {t("about.storyLabel")}{" "}
          </div>
          <h2
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
            }
          >
            {t("about.storyTitle")}{" "}
          </h2>
          <ol className={"about-miles mt-10"}>
            <li className={"about-mile"}>
              <span className={"about-mile-dot"} aria-hidden={"true"}></span>
              <div className={"text-xs font-bold text-red-600"}>1995</div>
              <div className={"mt-1 font-semibold text-slate-900"}>
                {t("about.story1995Title")}{" "}
              </div>
              <p className={"mt-1 text-sm text-slate-600 leading-relaxed"}>
                {t("about.story1995Description")}
              </p>
            </li>
            <li className={"about-mile"}>
              <span className={"about-mile-dot"} aria-hidden={"true"}></span>
              <div className={"text-xs font-bold text-red-600"}>
                {t("about.storyInternationalLabel")}
              </div>
              <div className={"mt-1 font-semibold text-slate-900"}>
                {t("about.storyInternationalTitle")}
              </div>
              <p className={"mt-1 text-sm text-slate-600 leading-relaxed"}>
                {t("about.storyInternationalDescription")}
              </p>
            </li>
            <li className={"about-mile"}>
              <span className={"about-mile-dot"} aria-hidden={"true"}></span>
              <div className={"text-xs font-bold text-red-600"}>
                {t("about.storyTodayLabel")}
              </div>
              <div className={"mt-1 font-semibold text-slate-900"}>
                Trade2Gov
              </div>
              <p className={"mt-1 text-sm text-slate-600 leading-relaxed"}>
                {t("about.storyTodayDescription")}
              </p>
            </li>
          </ol>
        </div>
        <div className={"lg:col-span-7 lg:pt-10"}>
          <div
            className={
              "space-y-5 text-[16px] lg:text-[17px] text-slate-700 leading-relaxed"
            }
          >
            <p>{t("about.storyParagraph1")}</p>
            <p>{t("about.storyParagraph2")}</p>
            <p className={"text-slate-600 text-[15px]"}>
              {t("about.storyParagraph3")}
            </p>
          </div>
          <div
            className={
              "mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
            }
          >
            <div className={"flex items-center gap-5 shrink-0"}>
              <img
                src={
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
                src="/assets/iso-27001.png"
                alt={
                  "BSI ISO/IEC 27001 Information Security Management Certified"
                }
                className={"h-12 w-auto object-contain"}
              />
              <img
                src={
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                }
                src="/assets/iso-9001.png"
                alt={"BSI ISO 9001 Quality Management Systems Certified"}
                className={"h-12 w-auto object-contain"}
              />
            </div>
            <p className={"text-sm text-slate-600 leading-relaxed"}>
              {t("about.certification")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
