
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingDraftNotice() {
  const { t } = useTranslation();

  return (
    <div className={"draft-ribbon"} role={"note"}>
      <div
        className={
          "max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
        }
      >
        <span className={"inline-flex items-center gap-2 font-bold"}>
          <svg
            className={"w-4 h-4"}
            fill={"none"}
            stroke={"currentColor"}
            strokeWidth={"2"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            viewBox={"0 0 24 24"}
            aria-hidden={"true"}
          >
            <path d={"M12 9v4M12 17h.01"}></path>
            <path
              d={
                "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
              }
            ></path>
          </svg>

          {t("pricingDraftNotice.title")}
        </span>

        <span className={"sm:border-l sm:border-amber-300 sm:pl-3"}>
          {t("pricingDraftNotice.description")}
        </span>
      </div>
    </div>
  );
}
