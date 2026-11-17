import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer({ setPage }) {
  const { t } = useTranslation();
  // Navigasi menggunakan React State
  const navigate = (targetPage, sectionId = null) => {
    setPage(targetPage);

    // Menunggu React selesai merender halaman tujuan
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sectionId) {
          const target = document.getElementById(sectionId);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      });
    });
  };

  return (
    <footer
      className={
        "bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800"
      }
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10"
        }
      >
        <div className={"md:pr-8 lg:col-span-3"}>
          <div className={"mb-6"}>
            <div className={"flex items-center gap-4 lg:gap-5 max-w-[300px]"}>
              <img
                src="/assets/iso-27001.png"
                alt={
                  "BSI ISO/IEC 27001 Information Security Management Certified"
                }
                className={
                  "h-[46px] lg:h-[54px] w-auto max-w-full object-contain brightness-0 invert opacity-90"
                }
              />

              <img
                src="/assets/iso-9001.png"
                alt={"BSI ISO 9001 Quality Management Systems Certified"}
                className={
                  "h-[46px] lg:h-[54px] w-auto max-w-full object-contain brightness-0 invert opacity-90"
                }
              />
            </div>
          </div>

          <div className={"flex items-center gap-3 mb-4"}>
            <img
              alt={"Trade2Gov"}
              className={"h-11 lg:h-12 w-auto object-contain shrink-0"}
              src="/assets/logo-t2g-dark.png"
            />

            <div
              className={
                "border-l border-slate-700 pl-3 text-[9px] lg:text-[10px] leading-[1.55] font-bold tracking-wide text-slate-500 uppercase"
              }
            >
              <div>Integrated</div>
              <div>Simplicity</div>
              <div>Innovative</div>
            </div>
          </div>
        </div>

        {/* Produk */}
        <div className={"lg:col-span-2"}>
          <h4 className={"text-white font-bold mb-4"}>
            <h4 className={"text-white font-bold mb-4"}>
              {t("footer.products")}
            </h4>
          </h4>

          <ul className={"space-y-2 text-sm"}>
            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#module-e-declaration"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("modules", "module-e-declaration");
                }}
              >
                e-Declaration
              </a>
            </li>

            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#module-drepo"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("modules", "module-drepo");
                }}
              >
                D’Repo
              </a>
            </li>

            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#module-scan-genius"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("modules", "module-scan-genius");
                }}
              >
                ScanGenius
              </a>
            </li>

            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#module-api"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("modules", "module-api");
                }}
              >
                API Trade2Gov
              </a>
            </li>

            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#module-cross-border"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("modules", "module-cross-border");
                }}
              >
                Cross Border
              </a>
            </li>

            <li>
              <a
                className={"hover:text-red-500 transition"}
                href={"#pricing"}
                onClick={(event) => {
                  event.preventDefault();
                  navigate("pricing");
                }}
              >
                {t("footer.packagePrice")}
              </a>
            </li>
          </ul>
        </div>

        {/* Dukungan */}
        <div className={"lg:col-span-2"}>
          <h4 className={"text-white font-bold mb-4"}>{t("footer.support")}</h4>

          <ul className={"space-y-2 text-sm"}>
            <li>
              <a
                href={
                  "mailto:marketing@edi-indonesia.co.id?subject=Konsultasi%20Integrasi%20API%20Trade2Gov"
                }
                className={"hover:text-red-500 transition"}
              >
                {t("footer.apiConsultation")}
              </a>
            </li>

            <li>
              <a
                href={
                  "mailto:support@edi-indonesia.co.id?subject=Dukungan%20Trade2Gov"
                }
                className={"hover:text-red-500 transition"}
              >
                {t("footer.contactSupport")}
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className={"lg:col-span-2"}>
          <h4 className={"text-white font-bold mb-4"}>{t("footer.legal")}</h4>

          <ul className={"space-y-2 text-sm"}>
            <li>
              <a
                href={"#"}
                onClick={(event) => event.preventDefault()}
                aria-disabled={"true"}
                className={"cursor-default"}
              >
                <mark className={"draft-hl"}>{t("footer.privacyPolicy")}</mark>
              </a>

              <span className={"draft-note"}>{t("footer.pendingConfirmation")}</span>
            </li>

            <li>
              <a
                href={"#"}
                onClick={(event) => event.preventDefault()}
                aria-disabled={"true"}
                className={"cursor-default"}
              >
                <mark className={"draft-hl"}>{t("footer.termsConditions")}</mark>
              </a>

              <span className={"draft-note"}>{t("footer.pendingConfirmation")}</span>
            </li>
          </ul>
        </div>

        {/* Kontak Perusahaan */}
        <div className={"lg:col-span-3"}>
          <h4 className={"text-white font-bold mb-4"}>{t("footer.companyContact")}</h4>

          <div className={"text-sm leading-6 text-slate-400"}>
            <p className={"font-bold text-slate-200 mb-1"}>
              PT Electronic Data Interchange Indonesia
            </p>

            <p>Wisma SMR Lt. 3</p>
            <p>Jl. Yos Sudarso, Kav. 89</p>
            <p>Sunter - Jakarta Utara 14360</p>

            <div className={"mt-3 space-y-1"}>
              <p>
                <span className={"text-slate-500"}>{t("footer.phone")}:</span>{" "}
                <a
                  className={"hover:text-red-400 transition"}
                  href={"tel:+62216505829"}
                >
                  +6221 650 5829
                </a>
              </p>

              <p>
                <span className={"text-slate-500"}>{t("footer.email")}:</span>{" "}
                <a
                  className={"hover:text-red-400 transition break-all"}
                  href={"mailto:marketing@edi-indonesia.co.id"}
                >
                  marketing@edi-indonesia.co.id
                </a>
              </p>
            </div>

            <a
              className={
                "mt-4 inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-red-400 transition"
              }
              href={"#about"}
              onClick={(event) => {
                event.preventDefault();
                navigate("about");
              }}
            >
              {t("footer.aboutUs")}
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          "max-w-screen-xl mx-auto text-center text-sm text-slate-600 pt-8 border-t border-slate-800"
        }
      >
        {t("footer.copyright")}{" "}
      </div>
    </footer>
  );
}
