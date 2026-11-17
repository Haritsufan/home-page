import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutClients() {
  const { t } = useTranslation();
  return (
    <section
      id={"about-clients"}
      className={"px-5 lg:px-12 py-20 lg:py-24 scroll-mt-20"}
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"grid lg:grid-cols-12 gap-6 lg:gap-14 items-end"}>
          <div className={"lg:col-span-6"}>
            <div
              className={
                "text-xs font-bold uppercase text-red-600 tracking-[.18em] mb-3"
              }
            >
              {t("about.clientsLabel")}
            </div>
            <h2
              className={
                "text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
              }
            >
              	{t("about.clientsTitle")}
            </h2>
          </div>
          <p className={"lg:col-span-6 text-slate-600 leading-relaxed"}>
            {t("about.clientsDescription")}
          </p>
        </div>
        <ul
          className={"mt-8 flex flex-wrap gap-2"}
          aria-label={t("about.clientsAriaLabel")}
        >
          <li className={"about-sector"}>{t("about.sectorGovernment")}</li>
          <li className={"about-sector"}>{t("about.sectorSOE")}</li>
          <li className={"about-sector"}>{t("about.sectorImportersExporters")}</li>
          <li className={"about-sector"}>{t("about.sectorBanking")}</li>
          <li className={"about-sector"}>{t("about.sectorPharmaceuticals")}</li>
          <li className={"about-sector"}>{t("about.sectorRetail")}</li>
          <li className={"about-sector"}>{t("about.sectorAutomotive")}</li>
        </ul>
        <div
          className={
            "mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
          }
        >
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-bridgestone.png"
              alt={"Logo PT Bridgestone Tire Indonesia"}
              title={"PT Bridgestone Tire Indonesia"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-ahm.png"
              alt={"Logo PT Astra Honda Motor"}
              title={"PT Astra Honda Motor"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-hino.png"
              alt={"Logo PT Hino Motors Sales Indonesia"}
              title={"PT Hino Motors Sales Indonesia"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-kawasaki.png"
              alt={"Logo PT Kawasaki Motor Indonesia"}
              title={"PT Kawasaki Motor Indonesia"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-komatsu.png"
              alt={"Logo PT Komatsu Undercarriage Indonesia"}
              title={"PT Komatsu Undercarriage Indonesia"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-nestle.png"
              alt={"Logo PT Nestlé Indonesia"}
              title={"PT Nestlé Indonesia"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-panasonic.png"
              alt={"Logo Panasonic"}
              title={"Panasonic"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-lnj.png"
              alt={"Logo PT Lintas Niaga Jaya (LNJ Logistics)"}
              title={"PT Lintas Niaga Jaya (LNJ Logistics)"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-white h-24 sm:h-28 rounded-2xl border border-slate-200 px-4 py-4 flex items-center justify-center overflow-hidden"
            }
          >
            <img
              src={
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              }
              src="/assets/client-merck.png"
              alt={"Logo PT Merck Chemicals and Life Sciences"}
              title={"PT Merck Chemicals and Life Sciences"}
              loading={"lazy"}
              className={
                "w-full h-[52px] sm:h-[60px] max-w-[180px] object-contain"
              }
            />
          </div>
          <div
            className={
              "bg-slate-900 text-white rounded-2xl px-4 py-4 flex flex-col items-center justify-center text-center h-24 sm:h-28"
            }
          >
            <span className={"text-3xl font-bold leading-none tracking-tight"}>
              250+
            </span>
            <span className={"mt-1.5 text-[12.5px] text-slate-300"}>
              {t("about.clientsCount")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
