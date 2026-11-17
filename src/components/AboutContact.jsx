import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutContact() {
  const { t } = useTranslation();
  return (
    <section
      id={"about-contact"}
      className={
        "bg-slate-50 border-t border-slate-200 px-5 lg:px-12 py-20 lg:py-24 scroll-mt-20"
      }
    >
      <div
        className={"max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-4 lg:gap-6"}
      >
        <div
          className={"rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"}
        >
          <div
            className={
              "text-xs font-bold uppercase text-red-600 tracking-[.18em] mb-3"
            }
          >
            {t("about.contactLabel")}
          </div>
          <h2
            className={
              "text-2xl lg:text-3xl font-bold text-slate-900 leading-tight"
            }
          >
            {t("about.officeTitle")}
          </h2>
          <dl className={"mt-6 grid gap-5 text-[15px]"}>
            <div>
              <dt className={"text-xs font-semibold text-slate-500 mb-1"}>
                {t("about.address")}
              </dt>
              <dd className={"text-slate-800 leading-relaxed"}>
                <span className={"block font-semibold text-slate-900"}>
                  PT Electronic Data Interchange Indonesia
                </span>
                <span className={"block"}>Wisma SMR Lt. 3</span>
                <span className={"block"}>Jl. Yos Sudarso, Kav. 89</span>
                <span className={"block"}>Sunter - Jakarta Utara 14360</span>
              </dd>
            </div>
            <div className={"grid sm:grid-cols-2 gap-5"}>
              <div>
                <dt className={"text-xs font-semibold text-slate-500 mb-1"}>
                  {t("about.phone")}
                </dt>
                <dd>
                  <a
                    className={"text-slate-800 hover:text-red-600 transition"}
                    href={"tel:+62216505829"}
                  >
                    +6221 650 5829
                  </a>
                </dd>
              </div>
              <div>
                <dt className={"text-xs font-semibold text-slate-500 mb-1"}>
                  {t("about.email")}
                </dt>
                <dd>
                  <a
                    className={
                      "text-slate-800 hover:text-red-600 transition break-all"
                    }
                    href={"mailto:marketing@edi-indonesia.co.id"}
                  >
                    marketing@edi-indonesia.co.id
                  </a>
                </dd>
              </div>
            </div>
            <div>
              <dt className={"text-xs font-semibold text-slate-500 mb-1"}>
                {t("about.companyWebsite")}
              </dt>
              <dd>
                <a
                  className={
                    "inline-flex items-center gap-1.5 text-slate-800 hover:text-red-600 transition"
                  }
                  href={"https://edi-indonesia.co.id/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  edi-indonesia.co.id{" "}
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
                    <path
                      d={
                        "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
                      }
                    ></path>
                  </svg>
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div
          className={
            "relative overflow-hidden rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between gap-8"
          }
        >
          <div
            className={
              "absolute -top-24 -right-24 w-72 h-72 bg-red-600 rounded-full blur-[90px] opacity-25"
            }
            aria-hidden={"true"}
          ></div>
          <div className={"relative"}>
            <h2 className={"text-2xl lg:text-3xl font-bold leading-tight"}>
              {t("about.demoTitle")}
            </h2>
            <p className={"mt-4 text-slate-300 leading-relaxed"}>
              {t("about.demoDescription")}
            </p>
          </div>
          <div className={"relative"}>
            <button
              type={"button"}
              onClick={() => {
                openDemoWhatsApp();
              }}
              className={
                "bg-red-600 hover:bg-red-500 text-white px-7 py-3.5 rounded-lg font-semibold transition"
              }
            >
              {t("about.scheduleDemo")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
