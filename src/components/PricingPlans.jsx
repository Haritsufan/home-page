
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingPlans() {
  const { t } = useTranslation();

  const plans = [
    {
      id: "payg",
      name: "PAYG",
      subtitle: "pricingPlans.payg.subtitle",
      description: "pricingPlans.payg.description",
      price: "Rp25.000",
      pricePeriod: "pricingPlans.perDocument",
      quota: "pricingPlans.payg.quota",
      quotaDescription: "pricingPlans.payg.quotaDescription",
      included: "pricingPlans.payg.included",
      button: "pricingPlans.payg.button",
      features: [
        { key: "pricingPlans.features.customsDocument" },
        {
          key: "pricingPlans.features.importCalculator",
          draft: true,
        },
        { key: "pricingPlans.features.oneUser" },
        { key: "pricingPlans.features.emailSupport" },
      ],
    },
    {
      id: "essential",
      name: "Essential",
      subtitle: "pricingPlans.essential.subtitle",
      price: "Rp750.000",
      pricePeriod: "pricingPlans.perMonth",
      quota: "pricingPlans.essential.quota",
      quotaDescription: "pricingPlans.essential.quotaDescription",
      included: "pricingPlans.essential.included",
      button: "pricingPlans.essential.button",
      features: [
        { key: "pricingPlans.features.threeUsers" },
        {
          key: "pricingPlans.features.whatsappNotification",
          draft: true,
        },
        {
          key: "pricingPlans.features.autoValidation",
          draft: true,
        },
        { key: "pricingPlans.features.templates" },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      subtitle: "pricingPlans.professional.subtitle",
      price: "Rp1.500.000",
      pricePeriod: "pricingPlans.perMonth",
      quota: "pricingPlans.professional.quota",
      quotaDescription: "pricingPlans.professional.quotaDescription",
      included: "pricingPlans.professional.included",
      button: "pricingPlans.professional.button",
      featured: true,
      badge: "pricingPlans.recommended",
      features: [
        { key: "pricingPlans.features.fiveUsers" },
        {
          key: "pricingPlans.features.hsCodeAI",
          draft: true,
        },
        {
          key: "pricingPlans.features.lartas",
          draft: true,
        },
        {
          key: "pricingPlans.features.multipleClients",
          draft: true,
        },
        { key: "pricingPlans.features.approvalWorkflow" },
        {
          key: "pricingPlans.features.analyticsDashboard",
          draft: true,
        },
        { key: "pricingPlans.features.emailWhatsappSupport" },
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      subtitle: "pricingPlans.ultimate.subtitle",
      price: "Rp2.500.000",
      pricePeriod: "pricingPlans.perMonth",
      quota: "pricingPlans.ultimate.quota",
      quotaDescription: "pricingPlans.ultimate.quotaDescription",
      included: "pricingPlans.ultimate.included",
      button: "pricingPlans.ultimate.button",
      features: [
        { key: "pricingPlans.features.tenUsers" },
        { key: "pricingPlans.features.apiIntegration" },
        {
          key: "pricingPlans.features.clientPortal",
          draft: true,
        },
        {
          key: "pricingPlans.features.activityHistory",
          draft: true,
        },
        { key: "pricingPlans.features.prioritySupport" },
      ],
    },
  ];

  const enterpriseFeatures = [
    "pricingPlans.enterprise.features.allUltimate",
    "pricingPlans.enterprise.features.quotaUsers",
    "pricingPlans.enterprise.features.customIntegration",
    "pricingPlans.enterprise.features.accountManager",
    "pricingPlans.enterprise.features.sla",
  ];

  const renderDocumentIcon = () => (
    <span className={"text-red-600"}>
      <svg
        className={"w-4 h-4"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"1.8"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        viewBox={"0 0 24 24"}
        aria-hidden={"true"}
      >
        <path d={"M7 3h7l5 5v13H7z"}></path>
        <path d={"M14 3v5h5M10 13h6M10 17h6"}></path>
      </svg>
    </span>
  );

  const renderCheckIcon = () => (
    <span className={"plan-check"}>
      <svg
        className={"w-3 h-3"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        viewBox={"0 0 24 24"}
        aria-hidden={"true"}
      >
        <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
      </svg>
    </span>
  );

  return (
    <section
      id={"pricing-plans"}
      className={"px-5 lg:px-12 -mt-20 lg:-mt-24 relative z-10 scroll-mt-28"}
      aria-label={t("pricingPlans.ariaLabel")}
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-4 items-stretch"
          }
        >
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card${plan.featured ? " is-featured" : ""}`}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.featured && (
                <span className={"plan-badge"}>
                  {t(plan.badge)}
                </span>
              )}

              <h3
                id={`plan-${plan.id}`}
                className={"text-lg font-bold text-slate-900"}
              >
                {plan.name}

                {plan.id === "payg" && (
                  <>
                    {" "}
                    <span
                      className={
                        "text-xs font-medium text-slate-400 align-middle"
                      }
                    >
                      {t(plan.subtitle)}
                    </span>
                  </>
                )}
              </h3>

              {plan.id !== "payg" && (
                <p className={"text-[13px] text-slate-500 mt-0.5"}>
                  {t(plan.subtitle)}
                </p>
              )}

              {plan.id === "payg" && (
                <p className={"text-[13px] text-slate-500 mt-0.5"}>
                  {t(plan.description)}
                </p>
              )}

              <div className={"mt-5"}>
                <div className={"plan-price"}>{plan.price}</div>
                <div className={"text-[13px] text-slate-500 mt-1"}>
                  {t(plan.pricePeriod)}
                </div>
              </div>

              <div className={"plan-quota mt-4"}>
                {renderDocumentIcon()}

                <div>
                  <div className={"font-semibold text-slate-900"}>
                    {t(plan.quota)}
                  </div>

                  <div className={"text-[12px] text-slate-500"}>
                    {t(plan.quotaDescription)}
                  </div>
                </div>
              </div>

              <div className={"text-xs font-semibold text-slate-500 mt-6 mb-3"}>
                {t(plan.included)}
              </div>

              <ul className={"plan-feats space-y-2.5 flex-1"}>
                {plan.features.map((feature) => (
                  <li
                    key={feature.key}
                    data-fitur-baru={feature.draft ? "" : undefined}
                  >
                    {renderCheckIcon()}

                    <span>
                      {feature.draft ? (
                        <>
                          <mark className={"draft-hl"}>
                            {t(feature.key)}
                          </mark>

                          <span className={"draft-note"}>
                            {t("pricingPlans.needsConfirmation")}
                          </span>
                        </>
                      ) : (
                        t(feature.key)
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type={"button"}
                onClick={() => {
                  openPlanWhatsApp(plan.name);
                }}
                className={
                  plan.featured
                    ? "mt-7 w-full bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold text-sm transition"
                    : "mt-7 w-full bg-white text-slate-900 border border-slate-300 hover:border-slate-900 px-5 py-3 rounded-lg font-semibold text-sm transition"
                }
              >
                {t(plan.button)}
              </button>
            </article>
          ))}
        </div>

        {/* Enterprise */}
        <div
          className={
            "mt-5 rounded-2xl bg-slate-900 text-white px-6 py-6 lg:px-8 lg:py-7 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
          }
        >
          <div className={"lg:w-[300px] shrink-0"}>
            <h3 className={"text-lg font-bold"}>
              Enterprise
            </h3>

            <div className={"text-2xl font-bold mt-1"}>
              {t("pricingPlans.enterprise.price")}
            </div>

            <p className={"text-[13px] text-slate-300 mt-1 leading-relaxed"}>
              {t("pricingPlans.enterprise.description")}
            </p>
          </div>

          <ul className={"flex flex-wrap gap-2 flex-1 text-[13px]"}>
            {enterpriseFeatures.map((feature) => (
              <li
                key={feature}
                className={
                  "rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5"
                }
              >
                {t(feature)}
              </li>
            ))}
          </ul>

          <button
            type={"button"}
            onClick={() => {
              openPlanWhatsApp("Enterprise");
            }}
            className={
              "shrink-0 bg-red-600 hover:bg-red-500 text-white px-7 py-3 rounded-lg font-semibold text-sm transition"
            }
          >
            {t("pricingPlans.enterprise.button")}
          </button>
        </div>

        <p className={"mt-4 text-[13px] text-slate-500"}>
          {t("pricingPlans.footer")}
        </p>
      </div>
    </section>
  );
}
