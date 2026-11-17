import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id={"contact"}
      className={
        "bg-slate-900 py-24 px-6 relative overflow-hidden scroll-mt-20"
      }
    >
      <div
        className={
          "absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40"
        }
        aria-hidden={"true"}
      ></div>
      <div className={"max-w-4xl mx-auto text-center relative z-10"}>
        <h2
          className={
            "text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          }
        >
          <span className={"block"}>{t("contact.headingLineOne")}</span>
          <span className={"block"}>{t("contact.headingLineTwo")}</span>
        </h2>
        <p className={"text-lg text-slate-300 mb-10 max-w-2xl mx-auto"}>
          {t("contact.description")}
        </p>
        <button
          type={"button"}
          onClick={() => {
            openDemoWhatsApp();
          }}
          className={
            "inline-flex justify-center items-center bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-md font-bold text-lg shadow-xl shadow-red-600/30 transition"
          }
        >
          {t("contact.ctaButton")}
        </button>
      </div>
    </section>
  );
}
