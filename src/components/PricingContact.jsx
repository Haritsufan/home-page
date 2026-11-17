
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingContact() {
  const { t } = useTranslation();

  return (
    <div className={"py-14 px-6 lg:px-12 bg-slate-950 text-center"}>
      <h2 className={"text-2xl font-bold text-white mb-3"}>
        {t("pricingContact.title")}
      </h2>

      <p className={"text-slate-300 max-w-2xl mx-auto mb-6"}>
        {t("pricingContact.description")}
      </p>

      <button
        type={"button"}
        onClick={() => {
          openDemoWhatsApp();
        }}
        className={
          "rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3"
        }
      >
        {t("pricingContact.button")}
      </button>
    </div>
  );
}
