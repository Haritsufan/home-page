import React from "react";
import { useTranslation } from "react-i18next";

export default function Clients() {
  const { t } = useTranslation();

  return (
    <section
      id={"client"}
      className={
        "py-20 lg:py-24 px-5 lg:px-12 max-w-screen-xl mx-auto border-b border-slate-200 bg-white scroll-mt-20"
      }
    >
      <div className={"grid lg:grid-cols-12 gap-10 lg:gap-12 items-start"}>
        <div className={"lg:col-span-5 min-w-0"}>
          <h2
            className={"text-3xl font-bold text-slate-900 mb-4 leading-tight"}
          >
            {t("clients.heading")}
          </h2>
          <p className={"text-slate-600 mb-8 leading-relaxed"}>
            {t("clients.description")}
          </p>
          <div
            className={
              "bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200"
            }
            aria-label={t("clients.testimonialsLabel")}
            aria-roledescription={"carousel"}
          >
            <div
              id={"client-testimonial-one"}
              className={"client-testimonial"}
              aria-hidden={"false"}
            >
              <div className={"flex items-baseline gap-3 mb-4"}>
                <span
                  className={"text-4xl font-bold text-red-600 leading-none"}
                >
                  33%
                </span>
                <span className={"text-sm text-slate-600"}>
                  {t("clients.efficiencyIncrease")}
                </span>
              </div>
              <blockquote
                className={"text-slate-700 mb-6 text-[16px] leading-relaxed"}
              >
                {t("clients.testimonialOne")}
              </blockquote>
              <div className={"flex gap-4 items-center"}>
                <div
                  className={
                    "shrink-0 w-28 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center px-2.5 py-1.5"
                  }
                >
                  <img
                    src="/assets/client-lnj.png"
                    alt={t("clients.logoLnj")}
                    className={"max-w-full max-h-full object-contain"}
                  />
                </div>
                <div>
                  <div className={"font-semibold text-slate-900"}>
                    PT Lintas Niaga Jaya
                  </div>
                  <div className={"text-sm text-slate-500"}>
                    {t("clients.testimonialOneUsage")}
                  </div>
                </div>
              </div>
            </div>
            <div
              id={"client-testimonial-two"}
              className={"client-testimonial hidden"}
              aria-hidden={"true"}
            >
              <blockquote
                className={"text-slate-700 mb-6 text-[16px] leading-relaxed"}
              >
                {t("clients.testimonialTwo")}
              </blockquote>
              <div className={"flex gap-4 items-center"}>
                <div
                  className={
                    "shrink-0 w-28 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center px-2.5 py-1.5"
                  }
                >
                  <img
                    src="/assets/client-dermaga.png"
                    alt={t("clients.logoDermaga")}
                    className={"max-w-full max-h-full object-contain"}
                  />
                </div>
                <div>
                  <div className={"font-semibold text-slate-900"}>
                    PT Dermaga Indonesia
                  </div>
                  <div className={"text-sm text-slate-500"}>
                    {t("clients.testimonialTwoUsage")}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "flex items-center justify-between gap-3 pt-5 mt-6 border-t border-slate-200"
              }
            >
              <span
                className={"text-xs font-semibold text-slate-500"}
                id={"client-review-counter"}
                aria-live={"polite"}
              >
                1 / 2
              </span>
              <div className={"flex items-center gap-2"}>
                <button
                  type={"button"}
                  aria-label={t("clients.previousTestimonial")}
                  onClick={() => {
                    shiftClientReview(-1);
                  }}
                  className={
                    "w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition"
                  }
                >
                  <svg
                    className={"w-[18px] h-[18px]"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    viewBox={"0 0 24 24"}
                    aria-hidden={"true"}
                  >
                    <path d={"M19 12H5M11 18l-6-6 6-6"}></path>
                  </svg>
                </button>
                <button
                  type={"button"}
                  aria-label={t("clients.nextTestimonial")}
                  onClick={() => {
                    shiftClientReview(1);
                  }}
                  className={
                    "w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition"
                  }
                >
                  <svg
                    className={"w-[18px] h-[18px]"}
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
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={"lg:col-span-7 min-w-0"}>
          <div className={"grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"}>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-bridgestone.png"
                alt={t("clients.logoBridgestone")}
                title={"PT Bridgestone Tire Indonesia"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-ahm.png"
                alt={t("clients.logoAhm")}
                title={"PT Astra Honda Motor"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-hino.png"
                alt={t("clients.logoHino")}
                title={"PT Hino Motors Sales Indonesia"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-kawasaki.png"
                alt={t("clients.logoKawasaki")}
                title={"PT Kawasaki Motor Indonesia"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-komatsu.png"
                alt={t("clients.logoKomatsu")}
                title={"PT Komatsu Undercarriage Indonesia"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-nestle.png"
                alt={t("clients.logoNestle")}
                title={"PT Nestlé Indonesia"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-panasonic.png"
                alt={t("clients.logoPanasonic")}
                title={"Panasonic"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-lnj.png"
                alt={t("clients.logoLnjLogistics")}
                title={"PT Lintas Niaga Jaya (LNJ Logistics)"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
              }
            >
              <img
                src="/assets/client-merck.png"
                alt={t("clients.logoMerck")}
                title={"PT Merck Chemicals and Life Sciences"}
                loading={"lazy"}
                className={
                  "w-full h-[56px] sm:h-[64px] max-w-[200px] object-contain"
                }
              />
            </div>
            <div
              className={
                "bg-slate-900 text-white rounded-2xl px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center justify-center gap-1 text-center col-span-1 md:col-span-3"
              }
            >
              <span
                className={
                  "text-4xl md:text-5xl font-bold leading-none tracking-tight"
                }
              >
                250+
              </span>
              <span className={"text-sm md:text-base text-slate-200"}>
                {t("clients.otherCompanies")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
